/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

export default function promiseClick(button) {
  // ваш код...
  return new Promise((resolve) => {
    button.addEventListener('click', (event) => {
      resolve(event);
    }, { once: true });
  });
}