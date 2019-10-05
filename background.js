window.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    document.querySelector('#feed, ytd-browse[page-subtype=home]').hidden = true;
    document.querySelector('#related').hidden = true;
  }, 32);
});
