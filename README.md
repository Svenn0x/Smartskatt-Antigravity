# Smartskatt.no

**Fintech Affiliate Portal** for oppdagelse av skattefradrag i Norge.

## Om prosjektet
Smartskatt.no er en brukervennlig tjeneste designet for å hjelpe nordmenn, kryptoinvestorer og bedrifter med å navigere det norske skattesystemet. Løsningen inkluderer en skatteveiviser som kvalifiserer brukere til relevante fradrag, og konverterer dem via affiliate-samarbeid.

## Teknologistakk
- **Next.js**: React-rammeverk for rask og SEO-vennlig rendering (SSR/SSG).
- **Tailwind CSS**: Utility-first CSS rammeverk for moderne, responsivt og premium design.
- **TypeScript**: Sikker og robust koding.

## Kjøre lokalt
1. Klon prosjektet:
   ```bash
   git clone <ditt-repo-url>
   ```
2. Installer avhengigheter:
   ```bash
   npm install
   ```
3. Start utviklingsserveren:
   ```bash
   npm run dev
   ```
4. Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Miljøvariabler (Environment Variables)
Følgende miljøvariabler må konfigureres i din hosting-tjeneste (Netlify/Vercel) og kan legges i en lokal `.env.local` fil for utvikling:
- `NEXT_PUBLIC_AFFILIATE_KRYPTOSEKKEN_ID`
- `NEXT_PUBLIC_AFFILIATE_FIKEN_ID`
- `NEXT_PUBLIC_AFFILIATE_TJENESTETORGET_ID`

## Deployment
Prosjektet er optimalisert for sømløs deployment til **Vercel** eller **Netlify**. Kontinuerlig integrasjon (CI/CD) settes opp automatisk når repositoryet kobles til en av disse tjenestene.
