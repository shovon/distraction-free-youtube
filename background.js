const hide = (el) => {
  if (el) {
    el.hidden = true;
  }
}

window.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    hide(document.querySelectorAll('ytd-watch-next-secondary-results-renderer'))
    hide(document.querySelector('#feed, ytd-browse[page-subtype=home]'))
    hide(document.querySelector('#related'));
  }, 32);
});
