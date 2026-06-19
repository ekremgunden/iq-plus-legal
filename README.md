# IQ Plus — Legal & Marketing Website

A small Next.js (App Router) website containing the legal documents required to
publish the **IQ Plus** brain training app on Google Play, plus a simple landing
page.

## Pages

| Route               | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `/`                 | Landing page                                         |
| `/privacy-policy`   | Privacy Policy (required by Google Play)             |
| `/terms-of-service` | Terms of Service                                     |
| `/data-deletion`    | Data deletion instructions (required by Google Play) |
| `/support`          | Support / contact + FAQ                              |

`/robots.txt` and `/sitemap.xml` are generated automatically.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Customizing

All app/company details live in **`lib/site.ts`** — edit that one file to update:

- Developer / company name
- Contact email
- Website URL (set this once you have a custom domain)
- Google Play listing URL
- Effective / last-updated dates

## Deploying to Vercel (recommended, free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), import the repo, and click **Deploy**.
3. After deployment, update `websiteUrl` in `lib/site.ts` with your live URL.

## Using these URLs on Google Play

In the Google Play Console:

- **Store listing → Privacy Policy:** `https://YOUR-DOMAIN/privacy-policy`
- **App content → Data deletion:** `https://YOUR-DOMAIN/data-deletion`
- **Support email/website:** the `/support` page and contact email

> ⚠️ These documents are templates provided in good faith to match common Google
> Play requirements. They are not legal advice. Review them — and adjust the
> data-collection sections to exactly match what your app does — before
> publishing. Consider consulting a lawyer for your specific situation.
