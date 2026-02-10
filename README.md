# AFM Probe Inventory Management

A web-based inventory management system for AFM probes, developed using Google Apps Script and Google Sheets.

AFM probes are expensive consumables, and keeping track of stock manually is time-consuming and error-prone. This system allows each user to record, edit, and track probe information, including model, resonance frequency, force constant, serial number, and remaining quantity. Low stock notifications help ensure timely ordering and smooth experiment workflow.

---

## Features

- Add, edit, and delete AFM probe information.
- Track probe details:  
  - Model  
  - Resonance frequency  
  - Force constant  
  - Serial number  
  - Remaining quantity
- Real-time stock updates and alerts for low inventory.
- Multi-user support: each user can record and edit probes.
- Data stored in Google Sheets for easy access and backup.

---

## Architecture / Technology

- **Frontend:** Google Apps Script HTML Service
- **Backend:** Google Apps Script (server-side)
- **Database:** Google Sheets
- **Languages:** HTML, CSS, JavaScript

---

## How to Use

1. Open the Google Apps Script project.
2. Connect the project to the Google Sheet containing probe data.
3. Deploy the project as a web app:
   - `Publish` → `Deploy as web app`
   - Set access to `Anyone with the link` or `Anyone in your domain`
4. Open the web app URL and start managing AFM probes.

---

## Benefits

- Saves time on manual inventory checks.
- Reduces risk of running out of expensive probes.
- Ensures experiments run smoothly.
- Minimizes administrative costs and improves lab efficiency.

---

## Future Improvements

- Automatic email alerts for low stock.
- Integration with supplier ordering system.
- User authentication and role-based access.
- Advanced analytics and visualization for probe usage trends.
