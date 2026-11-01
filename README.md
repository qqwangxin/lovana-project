# Lovana Project

A static website for Lovana Project, an Asian-led 501(c)(3) nonprofit connecting people through culture, art, music, and well-being.

## Publish with GitHub Pages

1. Open this repository’s **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Choose **226Roble** and **/(root)**, then save.
4. Add the confirmed custom domain in Pages, configure the corresponding DNS records, and enable HTTPS once the certificate is available.

This is a buildless website: no dependencies, build commands, or server are required. `.nojekyll` lets GitHub serve the files directly.

## Content

- `index.html`: introduction, programs, community photos, and The Transcendental Water.
- `donate.html`: donation information and checkout availability.
- `privacy.html`: website privacy information.
- `assets/style.css`: responsive styles.
- `assets/site.js`: public contact, EIN, and donation checkout configuration.
- `assets/photos/`: responsive images with EXIF metadata removed.

## Donations

Online giving is not activated. Once the nonprofit bank account and payment provider are verified, set the HTTPS `donationUrl` and `donationProvider` fields in `assets/site.js`. The giving page then links to the secure hosted checkout.

Do not store payment credentials, bank details, secret keys, or private documents in this public repository.

## Contact

Lovana Project · EIN 42-5350375  
[jasonwang.connect@gmail.com](mailto:jasonwang.connect@gmail.com)

The project is independent of Burning Man Project. Photos were supplied for this website by the project organizer.
