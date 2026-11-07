(() => {
  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href.split('#')[0];
  const status = document.querySelector('.share-status');
  const shareData = {
    title: 'Shimi Esterkin — Systems & Full-Stack Developer',
    text: 'Meet Shimi Esterkin — a systems-minded engineer and product-focused builder.',
    url: canonicalUrl
  };

  const announce = (message) => {
    if (status) status.textContent = message;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
    } catch {
      const input = document.createElement('textarea');
      input.value = canonicalUrl;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.append(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    announce('Link copied — ready to share.');
  };

  document.querySelectorAll('[data-native-share]').forEach((button) => {
    button.addEventListener('click', async () => {
      if (!navigator.share) {
        await copyLink();
        announce('Link copied. Open the app and add it to your story.');
        return;
      }

      try {
        await navigator.share(shareData);
        announce(`Shared via ${button.dataset.nativeShare}.`);
      } catch (error) {
        if (error.name !== 'AbortError') {
          await copyLink();
          announce('Sharing was unavailable, so the link was copied instead.');
        }
      }
    });
  });

  document.querySelector('[data-copy-link]')?.addEventListener('click', copyLink);
})();
