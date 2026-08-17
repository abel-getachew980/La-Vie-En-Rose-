/**
 * Premium Smooth Scroll Utility
 * 
 * Provides an easing curve (easeInOutCubic / easeInOutQuart) for natural,
 * luxurious smooth scrolling with automatic sticky-header offset compensation.
 */

// Cubic ease in/out curve for a natural deceleration feeling
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  updateHash?: boolean;
  onComplete?: () => void;
}

/**
 * Calculates the current sticky header height or returns a safe default.
 */
export function getHeaderOffset(fallbackOffset = 80): number {
  const header = document.getElementById('main-header');
  if (header) {
    const rect = header.getBoundingClientRect();
    return rect.height > 0 ? rect.height + 12 : fallbackOffset;
  }
  return fallbackOffset;
}

/**
 * Smoothly scrolls to a target element or selector with custom easing.
 * 
 * @param target Target element, ID string (e.g. "menu" or "#menu"), or vertical Y coordinate.
 * @param options Configuration for offset, duration, hash updating, and completion callback.
 */
export function smoothScrollTo(
  target: string | HTMLElement | number,
  options: SmoothScrollOptions = {}
): void {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let targetElement: HTMLElement | null = null;
  let targetY = 0;
  let targetId = '';

  const headerOffset = options.offset !== undefined ? options.offset : getHeaderOffset(84);

  if (typeof target === 'number') {
    targetY = Math.max(0, target);
  } else if (typeof target === 'string') {
    const cleanId = target.startsWith('#') ? target.substring(1) : target;
    targetId = cleanId;
    targetElement = document.getElementById(cleanId) || document.querySelector(target);
    if (!targetElement) {
      console.warn(`[smoothScroll] Target element '${target}' not found.`);
      return;
    }
    const rect = targetElement.getBoundingClientRect();
    targetY = window.pageYOffset + rect.top - headerOffset;
  } else if (target instanceof HTMLElement) {
    targetElement = target;
    targetId = target.id;
    const rect = target.getBoundingClientRect();
    targetY = window.pageYOffset + rect.top - headerOffset;
  }

  // Ensure within document bounds
  const maxScroll = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight;

  const finalTargetY = Math.min(Math.max(0, targetY), maxScroll);
  const startY = window.pageYOffset;
  const distance = finalTargetY - startY;

  // If already at or very close to target, finish immediately
  if (Math.abs(distance) < 2) {
    if (options.updateHash && targetId) {
      window.history.pushState(null, '', `#${targetId}`);
    }
    if (options.onComplete) options.onComplete();
    return;
  }

  // If reduced motion is preferred, use instant jump
  if (prefersReducedMotion) {
    window.scrollTo(0, finalTargetY);
    if (options.updateHash && targetId) {
      window.history.pushState(null, '', `#${targetId}`);
    }
    if (options.onComplete) options.onComplete();
    return;
  }

  // Calculate dynamic duration based on distance (minimum 500ms, maximum 950ms)
  const defaultDuration = Math.min(950, Math.max(500, Math.abs(distance) * 0.45));
  const duration = options.duration || defaultDuration;

  let startTime: number | null = null;
  let animationFrameId: number | null = null;

  // Allow user interactions to cancel the programmatic smooth scroll
  const cancelEvents = ['wheel', 'touchmove', 'keydown', 'mousedown'];
  const cancelAnimation = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    cleanup();
  };

  const cleanup = () => {
    cancelEvents.forEach((ev) => window.removeEventListener(ev, cancelAnimation));
  };

  cancelEvents.forEach((ev) => window.addEventListener(ev, cancelAnimation, { passive: true }));

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      cleanup();
      // Ensure target position is precise
      window.scrollTo(0, finalTargetY);
      if (options.updateHash && targetId) {
        window.history.pushState(null, '', `#${targetId}`);
      }
      if (options.onComplete) {
        options.onComplete();
      }
    }
  }

  animationFrameId = requestAnimationFrame(step);
}

/**
 * Glides smoothly back to the top of the page.
 */
export function scrollToTop(duration = 700): void {
  smoothScrollTo(0, { offset: 0, duration });
}
