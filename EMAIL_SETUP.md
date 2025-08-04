# E-Mail Setup für Next Mountain Adventure

## Formspree Integration

Die Website ist jetzt für E-Mail-Versendung über Formspree konfiguriert. Folgen Sie diesen Schritten:

### 1. Formspree Account erstellen
1. Gehen Sie zu https://formspree.io
2. Erstellen Sie einen kostenlosen Account
3. Verifizieren Sie Ihre E-Mail-Adresse

### 2. Neues Formular erstellen
1. Klicken Sie auf "New Form"
2. Geben Sie Ihre E-Mail-Adresse ein: `info@nextmountain.at`
3. Wählen Sie einen Formularnamen: `Next Mountain Contact`
4. Kopieren Sie die Form-ID (z.B. `mwkgpzyx`)

### 3. Form-ID in Website einfügen
Ersetzen Sie in folgenden Dateien `YOUR_FORM_ID` mit Ihrer echten Form-ID:

**In:** `layouts/partials/contact.html`
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

**In:** `layouts/partials/sections/angebot.html` 
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

### 4. Formspree Einstellungen konfigurieren
Im Formspree Dashboard:

1. **Settings → Notifications**
   - E-Mail-Benachrichtigungen aktivieren
   - Custom subject lines aktivieren

2. **Settings → Submissions**
   - Spam-Schutz aktivieren
   - reCAPTCHA optional hinzufügen

3. **Settings → Redirects** (optional)
   - Nach dem Absenden zu Danke-Seite weiterleiten

### 5. Testen
1. Website deployen
2. Testformular absenden
3. E-Mail-Empfang prüfen

## Funktionen

### Hauptkontaktformular
- **Quelle**: "Hauptkontaktformular"
- **Subject**: "Kontaktanfrage von Next Mountain Adventure Website"
- **CC**: info@nextmountain.at

### Modal-Anfragen
- **Quelle**: "Modal-Anfrage" 
- **Subject**: "Paket-Anfrage von Next Mountain Adventure Website"
- **Kontext**: Paketname und Preis automatisch mit gesendet
- **CC**: info@nextmountain.at

### E-Mail Inhalte
Jede E-Mail enthält:
- Name und E-Mail des Absenders
- Gewähltes Paket (bei Modal-Anfragen)
- Preis (bei Modal-Anfragen)
- Nachricht
- Gewünschter Zeitraum (bei Modal-Anfragen)
- Telefonnummer (optional, bei Modal-Anfragen)
- Quelle der Anfrage (Kontaktformular vs. Modal)

## Kosten
- **Kostenlos**: Bis zu 50 Submissions/Monat
- **Pro Plan**: $10/Monat für 1.000 Submissions
- **Business Plan**: $50/Monat für 10.000 Submissions

## Alternativen
Falls Formspree nicht geeignet ist:
- **Netlify Forms** (wenn auf Netlify gehostet)
- **EmailJS** (Client-side E-Mail Service)
- **Basin** (Ähnlich wie Formspree)
- **Getform** (Weitere Alternative)
