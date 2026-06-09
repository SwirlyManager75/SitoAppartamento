# Landing appartamento - 150.000 euro

Sito statico pronto per GitHub Pages.

## Contenuti

- Home: `index.html`
- Stili: `styles.css`
- Interazioni e galleria: `script.js`
- Foto: cartella `immagini appartamento`
- Deploy Pages: `.github/workflows/deploy-pages.yml`

## Pubblicazione su GitHub Pages (senza Git locale)

1. Crea un nuovo repository su GitHub, per esempio `appartamento-vendita`.
2. Apri il repository e usa **Add file > Upload files**.
3. Carica **tutti** i file e le cartelle di questo progetto, inclusa `.github/workflows/deploy-pages.yml` e `immagini appartamento`.
4. Imposta il branch di default su `main` (se richiesto).
5. Vai in **Settings > Pages** e in **Build and deployment** seleziona **Source: GitHub Actions**.
6. Vai su **Actions**, attendi il workflow `Deploy static site to Pages` completato.
7. Apri l'URL pubblicato (mostrato nella pagina del workflow o in Settings > Pages).

## Nota

Aggiornando qualsiasi file sul branch `main`, il sito verrà ripubblicato automaticamente.
