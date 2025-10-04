CI / Deploy instructions
=========================

This project includes a GitHub Actions workflow that builds the Next.js app and deploys the exported static `out/` site to Firebase Hosting on pushes to `main`.

Required GitHub secrets
- `FIREBASE_TOKEN` - a CI token created with the Firebase CLI.
- (Optional) `FIREBASE_PROJECT` - if you use multiple Firebase projects, set this to your project id. The workflow will fall back to the default project if this isn't set.

How to create the Firebase CI token
1. Install the Firebase CLI locally (if not already):
   npm install -g firebase-tools
2. Generate a CI token (this will open a browser for auth):
   firebase login:ci
   Save the printed token.

Add the token to GitHub
1. Go to your repository on GitHub → Settings → Secrets and variables → Actions → New repository secret.
2. Add a secret named `FIREBASE_TOKEN` containing the token from `firebase login:ci`.
3. (Optional) Add `FIREBASE_PROJECT` with your Firebase project id.

Notes
- The workflow runs `npm ci` and `npm run build`. Ensure the `build` script in `package.json` produces the static `out/` directory (this repo uses Next's `output: 'export'` setting).
- The workflow requires the `FIREBASE_TOKEN` secret to be present in the repo secrets to perform deployments.
