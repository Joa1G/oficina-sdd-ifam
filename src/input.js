export function initInput(onStart) {
  const keys = {
    left: false,
    right: false,
    space: false
  };

  const handleKey = (event, isPressed) => {
    const key = event.key ? event.key.toLowerCase() : '';

    if (isPressed && (key === ' ' || event.code === 'Space') && event.repeat) {
      return;
    }

    if (key === 'arrowleft' || key === 'a') {
      keys.left = isPressed;
    }

    if (key === 'arrowright' || key === 'd') {
      keys.right = isPressed;
    }

    if (key === ' ' || event.code === 'Space') {
      keys.space = isPressed;
      if (isPressed && typeof onStart === 'function') {
        onStart();
      }
    }
  };

  window.addEventListener('keydown', (event) => handleKey(event, true));
  window.addEventListener('keyup', (event) => handleKey(event, false));

  return keys;
}
