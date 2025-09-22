# Content editing

All client-editable copy and data live in JSON files under `src/content`.

- Brand and contact: `src/content/site.json`
- Services: `src/content/services.json`
- How we work steps: `src/content/how-we-work.json`
- Testimonials: `src/content/testimonials.json`
- Blog categories + posts: `src/content/blog.json`

How to edit
1. Open the JSON file in GitHub (or locally) and change text/values.
2. Commit to the default branch. Vercel will auto-redeploy.

Notes
- Keep field names the same (title, description, price, etc.).
- Images reference files in `/public`. To replace an image, upload a file into `public/` and update the JSON path.
- For live editing UI later, we can add a minimal admin page that commits changes back to GitHub using a token stored in Vercel envs.
