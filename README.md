# Control Bionics Support — V1.4

A fully static, no-API frontline support prototype. It can be hosted for free on GitHub Pages.

## What is included

- NeuroNode & AAC support
- Grid 3 support
- NeuroStrip help centre
- General enquiries
- Keyword-based search (runs locally in the browser)
- Guided troubleshooting flows
- Visual guides sourced from the supplied Trial Cards PDF
- Resolution vs escalation logic
- Human-support case summary generation
- Responsive phone/tablet/desktop design

## Important V1 limitation

This is not generative AI. It uses predefined approved support content and simple keyword matching. That is why it can run without an AI API or usage cost.

## Before publishing

1. Open `app.js`.
2. Find:

   `supportEmail: "Support.au@controlbionics.com"`

3. Replace it with the correct Control Bionics support mailbox.
4. Review all troubleshooting wording internally before customer release.

## Put it online free with GitHub Pages

1. Sign in to GitHub and create a new public repository, e.g. `control-bionics-support-v1`.
2. Upload **all files and the assets folder** from this project.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**.
7. Save.
8. GitHub will provide a public URL similar to:

   `https://YOUR-USERNAME.github.io/control-bionics-support-v1/`

No server or API is required for this V1.

## How to add another knowledge item

- Add a new issue card in `SECTIONS` inside `app.js`.
- Add either a new `FLOW` for guided troubleshooting or an `ARTICLE` for informational content.
- Put any approved image in `assets/` and reference its filename.

## Files

- `index.html` — page structure
- `styles.css` — design / mobile layout
- `app.js` — knowledge content, search and troubleshooting flows
- `assets/` — visual reference images

## NeuroStrip content added in V1.2
The NeuroStrip Help Centre now includes approved content and visual references from the supplied NeuroStrip User Guide: product overview, EMG placement, patch alignment, Patient Manager, device connections, protocols, session creation, session graph controls, session export, connection troubleshooting, and erratic/inaccurate sEMG troubleshooting.


## V1.2 additions
- NeuroNode electrode and muscle placement visual guide
- Electrode type selection: non-adhesive, adhesive and cloth
- Adhesive electrode preparation
- Cloth electrode preparation
- NeuroNode band, bezel and non-adhesive electrode fitting
- AU Support email preconfigured from the supplied Control Bionics placement guide


## V1.4 additions
- Start by intent: setup, troubleshooting, or learning
- Expanded Common Quick Fixes
- NeuroNode activation troubleshooting
- Interactive electrode-selection wizard
- Interactive placement-area wizard
- Helpful / not-helpful feedback controls (local UI only; no database)
- Clear product-support / clinical-scope boundary
- Support escalation remains email-based and free


## V1.4 external resources
This build adds official outbound links for Control Bionics, Control Bionics Australia Instagram, Microsoft Bookings, IRISBOND Hiru, Alea IntelliGaze, Smartbox Grid 3 / Grid for iPad, Smartbox product information, and Rehadapt mounting systems. External links open in a new tab.
