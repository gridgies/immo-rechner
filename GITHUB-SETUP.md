# 🚀 GitHub Setup Guide

## Schritt-für-Schritt Anleitung zum Upload auf GitHub

### 1️⃣ GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com)
2. Klicke auf **"New repository"** (grüner Button oben rechts)
3. Repository-Details:
   - **Name**: `immobilien-rechner`
   - **Description**: `Professioneller Immobilien-Investment-Rechner mit IRR-Berechnung`
   - **Visibility**: Private oder Public (deine Wahl)
   - ❌ **NICHT** "Add a README file" ankreuzen
   - ❌ **NICHT** ".gitignore" hinzufügen
   - ❌ **NICHT** "Choose a license" wählen
4. Klicke **"Create repository"**

### 2️⃣ Projekt vorbereiten

#### Download & Extrahieren
```bash
# Download das tar.gz file
# Extrahiere es
tar -xzf immobilien-rechner-step4-prepared.tar.gz
cd immobilien-rechner
```

#### Aufräumen (wichtig!)
```bash
# Entferne build artifacts
rm -rf .next/
rm -rf node_modules/

# Entferne backups falls vorhanden
find . -name "*.backup" -delete

# Entferne test files (optional)
rm -f test-irr.js
rm -f verify-calculations.js
```

### 3️⃣ Git initialisieren

```bash
# Git repo initialisieren
git init

# Files zum staging hinzufügen
git add .

# Ersten Commit machen
git commit -m "Initial commit: Complete immobilien-rechner with Step 3 + Step 4 design preparation"
```

### 4️⃣ Zu GitHub pushen

**GitHub zeigt dir diese Commands nach dem Erstellen des Repos:**

```bash
# Remote hinzufügen (ersetze USERNAME und REPO_NAME)
git remote add origin https://github.com/USERNAME/immobilien-rechner.git

# Branch zu main umbenennen (falls nötig)
git branch -M main

# Push zu GitHub
git push -u origin main
```

**Beispiel:**
```bash
git remote add origin https://github.com/graciellag/immobilien-rechner.git
git branch -M main
git push -u origin main
```

### 5️⃣ Credentials (falls gefragt)

Bei HTTPS wirst du nach Credentials gefragt:
- **Username**: Dein GitHub Username
- **Password**: **NICHT dein Passwort!** → Verwende ein **Personal Access Token**

#### Personal Access Token erstellen:
1. GitHub → Settings (oben rechts, dein Avatar)
2. Developer settings (ganz unten links)
3. Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Scopes auswählen: `repo` (alle)
6. Generate token
7. **Kopiere das Token** (wird nur einmal angezeigt!)
8. Verwende es als Passwort beim Push

**Alternative: SSH verwenden (empfohlen)**
```bash
# SSH Key generieren (falls noch nicht vorhanden)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Public key anzeigen und kopieren
cat ~/.ssh/id_ed25519.pub

# Zu GitHub hinzufügen:
# GitHub → Settings → SSH and GPG keys → New SSH key

# Remote zu SSH ändern
git remote set-url origin git@github.com:USERNAME/immobilien-rechner.git
```

### 6️⃣ Verify

Gehe zu `https://github.com/USERNAME/immobilien-rechner` und du solltest sehen:

```
immobilien-rechner/
├── app/
├── components/
├── lib/
├── README.md
├── package.json
├── tailwind.config.ts
├── supabase-schema.sql
└── ...
```

✅ **Fertig!** Dein Projekt ist jetzt auf GitHub!

---

## 📋 Repository-Struktur nach dem Upload

### Branches
```
main (default)
```

### Wichtige Files
```
✅ README.md              - Projekt-Dokumentation
✅ .gitignore            - Ignorierte Files
✅ package.json          - Dependencies
✅ supabase-schema.sql   - Database Schema
✅ STEP4-DESIGN-GUIDE.md - Design-Dokumentation
✅ .env.local.example    - Env template
```

### NICHT im Repo (durch .gitignore)
```
❌ node_modules/
❌ .next/
❌ .env.local
❌ *.backup
```

---

## 🔄 Weitere Änderungen pushen

Nach Änderungen am Code:

```bash
# Status checken
git status

# Geänderte files hinzufügen
git add .

# Commit mit Nachricht
git commit -m "Beschreibe deine Änderung"

# Push zu GitHub
git push
```

### Beispiele:
```bash
git commit -m "Update design with green color scheme"
git commit -m "Add IRR calculation fix"
git commit -m "Implement edit functionality for scenarios"
```

---

## 🌿 Branches für Features

Für größere Features:

```bash
# Neuen Branch erstellen
git checkout -b feature/design-update

# Arbeite an deinem Feature...
git add .
git commit -m "Implement new design"

# Push den Branch
git push -u origin feature/design-update

# Auf GitHub: Create Pull Request
# Nach Review: Merge to main
```

---

## 🚀 Deployment auf Vercel

### Von GitHub deployen:

1. Gehe zu [vercel.com](https://vercel.com)
2. Sign in mit GitHub
3. **"New Project"**
4. **Import** dein `immobilien-rechner` Repository
5. **Environment Variables** hinzufügen:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   ```
6. **Deploy**!

Vercel wird automatisch bei jedem Push deployen! 🎉

---

## 🔐 Environment Variables Setup

### Für lokale Entwicklung:

Erstelle `.env.local` (nicht im Git!):
```env
NEXT_PUBLIC_SUPABASE_URL=deine-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-key
```

### Für Vercel/Production:

In Vercel Dashboard:
1. Dein Projekt → Settings → Environment Variables
2. Füge hinzu:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Redeploy

---

## 📝 Best Practices

### Commit Messages
```bash
# ✅ Gut
git commit -m "Add user authentication"
git commit -m "Fix IRR calculation for month 0"
git commit -m "Update button styles to green theme"

# ❌ Schlecht
git commit -m "changes"
git commit -m "fix"
git commit -m "update"
```

### Branch Naming
```bash
# ✅ Gut
feature/design-update
bugfix/irr-calculation
hotfix/login-error

# ❌ Schlecht
new-stuff
fix
updates
```

### .gitignore checken
Vor dem ersten Push:
```bash
# Checke was committed wird
git status

# Sollte NICHT dabei sein:
# - node_modules/
# - .next/
# - .env.local
# - .env
```

---

## ❓ Troubleshooting

### Problem: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/immobilien-rechner.git
```

### Problem: "Permission denied (publickey)"
→ SSH Key Setup (siehe oben) oder HTTPS verwenden

### Problem: "rejected (fetch first)"
```bash
git pull origin main --rebase
git push
```

### Problem: "Large files not allowed"
→ Checke .gitignore, entferne node_modules:
```bash
git rm -r --cached node_modules/
git commit -m "Remove node_modules"
git push
```

### Problem: Versehentlich .env.local committed
```bash
# File aus Git entfernen (behält lokale Kopie)
git rm --cached .env.local
git commit -m "Remove .env.local from tracking"
git push

# GitHub: Settings → Secrets → Rotate Keys!
```

---

## ✅ Checklist vor dem Push

- [ ] `node_modules/` nicht im Repo
- [ ] `.next/` nicht im Repo
- [ ] `.env.local` nicht im Repo
- [ ] README.md aktualisiert
- [ ] .gitignore vorhanden
- [ ] Supabase schema included
- [ ] Build funktioniert (`npm run build`)
- [ ] Keine sensiblen Daten im Code

---

## 🎯 Nach dem Upload

### 1. Repository Settings anpassen
- Description hinzufügen
- Topics hinzufügen: `nextjs`, `typescript`, `real-estate`, `investment-calculator`
- Website URL setzen (falls deployed)

### 2. Collaborators hinzufügen (optional)
Settings → Collaborators → Add people

### 3. Branch Protection (optional)
Settings → Branches → Add rule für `main`

### 4. GitHub Actions (später)
Für automatische Tests/Deployment

---

**Fertig! Dein Projekt ist jetzt professionell auf GitHub! 🎉**

Bei Fragen: GitHub Docs sind dein Freund → [docs.github.com](https://docs.github.com)
