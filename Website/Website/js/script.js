document.addEventListener('DOMContentLoaded', function () {
  function hideLoading() {
    document.body.classList.remove('loading');
  }

  window.addEventListener('load', hideLoading);
  setTimeout(hideLoading, 3000);
  document.body.classList.add('loading');

  const ipBlock = document.getElementById('ipBlock');
  const copyHint = document.getElementById('copyHint');

  if (ipBlock) {
    ipBlock.addEventListener('click', function () {
      const ip = this.querySelector('span').textContent.trim();
      navigator.clipboard.writeText(ip).then(function () {
        copyHint.textContent = 'Copied!';
        setTimeout(function () {
          copyHint.textContent = 'Click to copy IP';
        }, 2000);
      }).catch(function () {
        copyHint.textContent = 'Failed to copy';
      });
    });
  }
});
