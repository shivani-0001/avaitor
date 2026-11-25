# THEANCHORPOINT Website — Static HTML/CSS/JS

A lightweight, multi-page digital growth agency website built with plain HTML5, CSS3 and vanilla JavaScript. No frontend framework or build step is required.


## Included
- 19 standalone HTML pages (home, about, services, seven service pages, portfolio, industries, contact, blog/insights, legal and location pages)
- Shared styles: `assets/css/style.css` and `assets/css/responsive.css`
- Shared navigation/footer, mobile menu, WhatsApp CTA and enquiry-form validation: `assets/js/main.js`
- Contact/social settings: `assets/js/config.js`
- Official supplied logo used in the header, footer, hero and favicon
- `sitemap.xml` and `robots.txt`

## Contact configuration
Open `assets/js/config.js` and edit `phoneDisplay`, `phoneDigits`, `email`, `website`, and social URLs. WhatsApp number must use country code and digits only (no plus, spaces or punctuation) in `phoneDigits`.


## Enquiry form behavior
The contact form validates required fields and prepares a WhatsApp message. It opens WhatsApp for the visitor to review and send. **This version does not store form submissions or send email directly.** For a server-side inbox, configure a backend/form provider and update the form handler before deployment.


## Images
The supplied logo is local at `assets/images/logo/theanchorpoint-logo.png`. Editorial and service images are currently loaded from Unsplash image URLs and require internet access. If you want fully self-hosted images, download optimized WebP files and replace each image URL in HTML; keep descriptive alt text. The build environment could not fetch external image files during packaging.


## Hosting on cPanel / shared hosting
1. Download and unzip the project.
2. Upload the contents of the `THEANCHORPOINT` folder (not the folder itself) into your domain's `public_html` directory using cPanel File Manager or FTP.
3. Keep `index.html` directly inside `public_html`.
4. Confirm `sitemap.xml` and `robots.txt` are accessible from your domain.
5. If you use another canonical domain, update canonical, Open Graph and sitemap URLs in HTML/XML.
6. Enable HTTPS in your hosting control panel and redirect HTTP to HTTPS if your host supports it.
7. Connect Google Search Console and submit `/sitemap.xml` after deployment.

## SEO notes
Titles and descriptions are unique per page, with canonical and Open Graph tags. This is a static SEO foundation—not a ranking guarantee. Review page copy, schema, location pages and keyword targets periodically. LocalBusiness/Organization schema is injected by `main.js` from configuration; visible FAQ content on the homepage is not currently emitted as FAQ schema.

## Navigation and editing
- Change homepage hero wording in `index.html` only.
- Edit individual service-page content in the corresponding HTML file.
- Shared visual styles are in `assets/css/style.css` and `assets/css/responsive.css`.
- Header/footer and form/WhatsApp behavior are in `assets/js/main.js`.
- Contact details are in `assets/js/config.js`.

