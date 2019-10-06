const hide = (el) => {
  if (el) {
    el.hidden = true;
  }
}

const hideAll = (els) => {
  for (const el of els) {
    hide(el);
  }
}

window.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    hideAll(document.querySelectorAll('ytd-watch-next-secondary-results-renderer'))
    hideAll(document.querySelectorAll('.ytp-ce-covering-overlay'))
    hideAll(document.querySelectorAll('.ytp-ce-element.ytp-ce-video.ytp-ce-element-show.ytp-ce-top-right-quad'))
    hideAll(document.querySelectorAll('.ytp-ce-element.ytp-ce-video.ytp-ce-element-show.ytp-ce-top-left-quad'))
    hideAll(document.querySelectorAll('.ytp-ce-element.ytp-ce-channel.ytp-ce-channel-this.ytp-ce-top-right-quad.ytp-ce-element-show'))
    hideAll(document.querySelectorAll('.ytp-videowall-still.ytp-suggestion-set'))
    hide(document.querySelector('#feed, ytd-browse[page-subtype=home]'))
    hide(document.querySelector('#related'));
  }, 32);
});
