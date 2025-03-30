// Accessibility utilities

/**
 * Sets focus to the first focusable element within a container
 * @param {HTMLElement} container - The container to search for focusable elements
 */
export const focusFirstElement = (container) => {
  if (!container) return;
  
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
};

/**
 * Traps focus within a container (used for modals, dialogs, etc.)
 * @param {KeyboardEvent} e - The keyboard event
 * @param {HTMLElement} container - The container to trap focus within
 */
export const trapFocus = (e, container) => {
  if (!container || e.key !== 'Tab') return;
  
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // If shift+tab on first element, wrap to last element
  if (e.shiftKey && document.activeElement === firstElement) {
    e.preventDefault();
    lastElement.focus();
  }
  // If tab on last element, wrap to first element
  else if (!e.shiftKey && document.activeElement === lastElement) {
    e.preventDefault();
    firstElement.focus();
  }
};

/**
 * Announces a message to screen readers via an ARIA live region
 * @param {string} message - The message to announce
 * @param {string} priority - The priority level ('polite' or 'assertive')
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  // Check if the live region already exists
  let liveRegion = document.getElementById('a11y-announcer');
  
  // Create it if it doesn't exist
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'a11y-announcer';
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('role', priority === 'assertive' ? 'alert' : 'status');
    liveRegion.style.border = '0';
    liveRegion.style.clip = 'rect(0 0 0 0)';
    liveRegion.style.height = '1px';
    liveRegion.style.margin = '-1px';
    liveRegion.style.overflow = 'hidden';
    liveRegion.style.padding = '0';
    liveRegion.style.position = 'absolute';
    liveRegion.style.width = '1px';
    document.body.appendChild(liveRegion);
  }
  
  // Set the message and optionally change the priority
  liveRegion.setAttribute('aria-live', priority);
  
  // Clear the region, then set the message after a brief delay
  // This ensures screen readers will announce the new message
  liveRegion.textContent = '';
  setTimeout(() => {
    liveRegion.textContent = message;
  }, 50);
};
