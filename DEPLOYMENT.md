
## Deploying to Netlify

### Prerequisites

- A [Netlify account](https://netlify.com)
- Your repository pushed to GitHub, GitLab, or Bitbucket

### Option 1: Deploy via Netlify UI (Recommended)

1. Go to [app.netlify.com](https://app.netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select the `MetaModernMonkey/website` repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **"Deploy site"**

### Option 2: Deploy via CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your site:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=.next
   ```

### Environment Variables

Set these in Netlify's **Site settings** → **Build & deploy** → **Environment**:

- `EMAIL_OCTOPUS_API_KEY`: Your EmailOctopus API key
- `EMAIL_OCTOPUS_LIST_ID`: Your EmailOctopus list ID
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID (e.g., `G-9E5T65Q11Z`)

**Note**: Only `NEXT_PUBLIC_GA_MEASUREMENT_ID` needs the `NEXT_PUBLIC_` prefix to be exposed to the browser.

### Domain Configuration

1. In Netlify, go to **Domain management** → **Custom domains**
2. Add your custom domain and follow DNS setup instructions, or
3. Use Netlify's default subdomain: `your-site.netlify.app`

### Continuous Deployment

Netlify automatically deploys when you push to your repository:
- Pushes to `main`/`master` deploy to production
- Pushes to other branches create preview deployments

You can configure this in **Site settings** → **Build & deploy** → **Branches and deploy contexts**.

### Troubleshooting

**Build fails with "command not found"**: Ensure Node version is set. Add `node_version = "18"` to `netlify.toml` or set it in **Site settings** → **Build & deploy** → **Build settings**.

**Email signup not working**: Verify env variables are set correctly in Netlify dashboard and that your EmailOctopus credentials are valid.

**SVGs not loading**: Clear Netlify's cache under **Deploys** → **Trigger deploy** → **Clear cache and deploy site**.

