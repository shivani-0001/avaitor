/* Shared navigation, footer, responsive menu, WhatsApp links and enquiry validation. */
(() => {
  const cfg = window.AGENCY_CONFIG || {};

  // Theme switch: dark wine by default, warm ivory in light mode.
  const themeButton = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('tap-theme');
  if (savedTheme === 'light') document.documentElement.setAttribute('data-theme','light');
  if (themeButton) {
    themeButton.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '☼' : '◐';
    themeButton.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') !== 'light';
      document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
      localStorage.setItem('tap-theme', isLight ? 'light' : 'dark');
      themeButton.textContent = isLight ? '☼' : '◐';
    });
  }
  const links = [
    ['Home','index.html'],['About','about.html'],['Services','services.html'],['Work','portfolio.html'],['Insights','blog.html'],['Contact','contact.html']
  ];
  const serviceLinks = [['Meta Ads','meta-ads.html'],['Google Ads','google-ads.html'],['SEO','seo.html'],['Social Media','social-media.html'],['Website Development','web-development.html'],['Branding','branding.html'],['Lead Generation','lead-generation.html']];
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = `<!-- HEADER SECTION START -->
    <header class="site-header"><a class="brand" href="index.html" aria-label="THEANCHORPOINT Home"><img src="assets/images/logo/theanchorpoint-logo.png" alt="THEANCHORPOINT official logo"><span>THEANCHORPOINT<small>DIGITAL GROWTH STUDIO</small></span></a>
    <button class="theme-toggle" type="button" aria-label="Toggle light and dark theme" title="Toggle light/dark theme">◐</button><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button>
    <nav class="main-nav" aria-label="Main navigation">${links.map(([name,url])=>`<a href="${url}">${name}</a>`).join('')}<div class="nav-services"><button type="button">Services ▾</button><div class="services-menu">${serviceLinks.map(([n,u])=>`<a href="${u}">${n}</a>`).join('')}</div></div><a class="nav-cta" href="contact.html">Start a project ↗</a></nav></header>`;
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `<!-- FOOTER SECTION START -->
    <footer class="site-footer"><div class="footer-top"><div class="footer-brand"><img src="assets/images/logo/theanchorpoint-logo.png" alt="THEANCHORPOINT official logo"><p>Strategy, creative, performance and technology—connected for digital growth.</p><a class="btn btn-ghost wa-link" href="#">Talk to us ↗</a></div><div class="footer-links"><div><h4>Explore</h4>${links.map(([n,u])=>`<a href="${u}">${n}</a>`).join('')}</div><div><h4>Services</h4>${serviceLinks.map(([n,u])=>`<a href="${u}">${n}</a>`).join('')}</div><div><h4>Locations</h4><a href="ghaziabad.html">Ghaziabad</a><a href="delhi.html">Delhi</a><a href="noida.html">Noida</a><h4 class="footer-legal-heading">Legal</h4><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms & Conditions</a></div></div></div><div class="footer-bottom"><span>© <span class="year"></span> THEANCHORPOINT</span><span>Digital Growth · Performance · Creative · Web</span><span>Built for movement ↗</span></div></footer><a class="floating-wa wa-link" href="#" aria-label="WhatsApp THEANCHORPOINT"><span>◉</span></a>`;
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  const waMessage = encodeURIComponent('Hi THEANCHORPOINT, I would like to discuss a digital marketing project.');
  document.querySelectorAll('.wa-link').forEach(el => el.href = `https://wa.me/${cfg.phoneDigits || '919311703705'}?text=${waMessage}`);
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => { const opened = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(opened)); });
  // Basic Organization schema, sourced from the agency's published contact details.
  const schema = document.createElement('script'); schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify({
    '@context':'https://schema.org','@type':'Organization','name':cfg.brand || 'THEANCHORPOINT',
    'url':cfg.website || 'https://theanchorpoint.store/','telephone':cfg.phoneDisplay || '+91 93117 03705',
    'email':cfg.email || 'anshtyagi746@gmail.com',
    'areaServed':['Ghaziabad','Delhi','Noida','India'],
    'description':'Digital marketing, performance advertising, SEO, social media, web and lead generation.'
  }); document.head.appendChild(schema);
  const form = document.getElementById('enquiry-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault(); const data = new FormData(form);
    const text = `Hello THEANCHORPOINT, I have a project enquiry.\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not provided'}\nBusiness: ${data.get('company') || 'Not provided'}\nService: ${data.get('service')}\nBudget: ${data.get('budget')}\nProject details: ${data.get('details')}`;
    const status = form.querySelector('.form-status'); if(status) status.textContent = 'Your enquiry is ready. WhatsApp will open with the details—please review and send it.';
    window.open(`https://wa.me/${cfg.phoneDigits || '919311703705'}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
})();
