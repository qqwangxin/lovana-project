/* Public configuration only. Never put API keys, banking details, or credentials here. */
const LOVANA = {
  ein: '42-5350375',
  contactEmail: 'jasonwang.connect@gmail.com',
  donationUrl: '',
  donationProvider: ''
};

if (/^\d{2}-\d{7}$/.test(LOVANA.ein)) {
  document.querySelectorAll('.ein-slot').forEach(node => {
    node.textContent = ` · EIN ${LOVANA.ein}`;
  });
}

if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(LOVANA.contactEmail)) {
  document.querySelectorAll('.contact-slot').forEach(node => {
    node.replaceChildren('Want to collaborate? ');
    const link = document.createElement('a');
    link.href = `mailto:${LOVANA.contactEmail}`;
    link.textContent = LOVANA.contactEmail;
    node.append(link);
  });
}

const givingStatus = document.getElementById('giving-status');
if (givingStatus && LOVANA.donationUrl) {
  try {
    const url = new URL(LOVANA.donationUrl);
    if (url.protocol === 'https:') {
      const link = document.createElement('a');
      link.className = 'button';
      link.href = url.href;
      link.textContent = 'Donate to us ↗';
      const note = document.createElement('p');
      note.className = 'fine';
      note.textContent = LOVANA.donationProvider
        ? `Continue to secure checkout with ${LOVANA.donationProvider}.`
        : 'Continue to our secure donation checkout.';
      givingStatus.replaceChildren(link, note);
    }
  } catch { /* Keep the honest unavailable state if the URL is invalid. */ }
}

// Preserve the project link shared before programs moved to their own page.
if ((window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')) && window.location.hash === '#transcendental-water') {
  window.location.replace('programs.html#transcendental-water');
}
