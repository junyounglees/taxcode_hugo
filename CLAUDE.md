# TaxHugo - Tax Accounting Office Website

## Tech Stack

### Base Stack
- **Writing**: Emacs + org-mode
- **Export**: ox-hugo
- **SSG**: Hugo
- **Theme**: Blowfish
- **CSS**: Tailwind CSS (built into Blowfish)
- **Hosting**: Vercel

## Claude AI Interaction Guidelines

### AI Interaction Rules
- Never do anything I didn't ask.
- Change the site configuration one by one as directed
- Remember and follow step-by-step instructions
- Wait for explicit direction before making changes

## Complete Setup Documentation

### Step 1: Initial Hugo Site Setup
```bash
# Install Hugo (if not already installed)
brew install hugo

# Initialize Hugo site in current directory
hugo new site . --force
```
**What this does**: Creates the basic Hugo directory structure with config files, content folders, and theme directory.

### Step 2: Install Blowfish Theme
```bash
# Add Blowfish theme as git submodule
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish

# Initialize and update submodules
git submodule update --init --recursive
```
**What this does**: Downloads the Blowfish theme into your themes directory and sets up version control tracking.

### Step 3: Configure Hugo for Blowfish
```bash
# Copy example configuration from theme
cp themes/blowfish/exampleSite/config/_default/* config/_default/
```
**What this does**: Copies the theme's example configuration files to your site's config directory.

### Step 4: Basic Site Configuration
Edit `config/_default/config.toml`:
```toml
baseURL = "https://your-domain.com"
languageCode = "en-us"
title = "Your Tax Accounting Office"
theme = "blowfish"
```

## How the Website Works

### Directory Structure Explained
```
TaxHugo/
├── config/
│   └── _default/           # Site configuration files
│       ├── config.toml     # Main Hugo config
│       ├── params.toml     # Theme-specific settings
│       ├── menus.toml      # Navigation menus
│       └── languages.toml  # Language settings
├── content/
│   ├── _index.md          # Homepage content
│   ├── about/             # About page
│   ├── services/          # Services pages
│   └── posts/             # Blog posts
├── static/
│   ├── images/            # Images (logos, photos)
│   └── documents/         # PDFs, documents
├── themes/
│   └── blowfish/          # Theme files (don't edit)
├── layouts/               # Custom template overrides
├── assets/                # Custom CSS/JS (if needed)
└── public/                # Generated site (auto-created)
```

### Content Management

#### Creating Pages
```bash
# Create new page
hugo new content/services/tax-preparation.md

# Create new blog post
hugo new content/posts/tax-season-tips.md
```

#### Content File Structure
Every content file has:
```markdown
---
title: "Page Title"
date: 2024-01-01
draft: false
description: "Page description"
---

Your content here in markdown format.
```

### Theme Configuration

#### Main Settings (`config/_default/params.toml`)
```toml
colorScheme = "blowfish"
defaultAppearance = "light"
autoSwitchAppearance = true

[homepage]
layout = "profile"
showRecent = true
recentLimit = 5

[article]
showDate = true
showAuthor = true
showReadingTime = true
```

#### Navigation (`config/_default/menus.toml`)
```toml
[[main]]
name = "Home"
url = "/"
weight = 10

[[main]]
name = "Services"
url = "/services/"
weight = 20

[[main]]
name = "About"
url = "/about/"
weight = 30

[[main]]
name = "Contact"
url = "/contact/"
weight = 40
```

## Daily Operations

### Starting Development Server
```bash
# Start local development server
hugo server -D

# Access site at: http://localhost:1313
```
**What this does**: Starts a local web server that automatically rebuilds when you change files.

### Adding New Content
1. Create new content file: `hugo new content/posts/new-article.md`
2. Edit the file with your content
3. Change `draft: false` when ready to publish
4. Save file - site updates automatically in development

### Building for Production
```bash
# Generate static site
hugo --minify

# Files are created in ./public/ directory
```

### Publishing Changes
```bash
# Commit changes to git
git add .
git commit -m "Add new content"
git push

# Deploy to Vercel (if connected to git)
# Vercel will automatically build and deploy
```

## Content Writing Guidelines

### For Tax Office Content
- Use professional, clear language
- Include relevant keywords for SEO
- Structure content with headers (## ### ####)
- Add meta descriptions for each page
- Include contact information prominently

### Org-mode Integration (Future)
When using Emacs + ox-hugo:
1. Write in org-mode files
2. Use ox-hugo export to generate markdown
3. Files automatically go to Hugo content directory
4. Site rebuilds automatically

## Troubleshooting

### Common Issues
- **Site not loading**: Check `hugo server -D` output for errors
- **Theme not working**: Ensure theme is properly installed and config points to correct theme name
- **Content not showing**: Check if `draft: false` is set in content files
- **CSS not loading**: Clear browser cache, check theme installation

### Getting Help
- Hugo documentation: https://gohugo.io/documentation/
- Blowfish theme docs: https://blowfish.page/
- Check `hugo version` to ensure compatibility

## Maintenance Tasks

### Regular Updates
```bash
# Update theme
git submodule update --remote --merge

# Update Hugo
brew upgrade hugo
```

### Backup Strategy
- Git repository contains all source files
- Regular commits preserve content history
- Vercel maintains deployment history
- Consider backing up media files separately

## Repository Guidelines

### Business Context
- **Business Type**: Solo tax accountant practice (1인 세무사)
- **Target Audience**: Korean clients seeking tech-savvy tax services
- **Location**: Busan, Korea (But Targetting for All District in South Korea)
- **Business Stage**: First-year practitioner, small client base
- **Unique Value**: Engineering background + AI-powered tax solutions
- **Business Owner**: Young early 30s male, smart accountant
- **Office**: Home-based operation (no physical office)

### Content Strategy
- **Authority Building**: Establish expertise as tech-savvy tax professional
- **Accessibility**: Make complex tax knowledge understandable
- **AI Integration**: Showcase AI-powered tools and solutions
- **Korean Market**: Focus on Korean tax regulations and practices

### Development Workflow
1. **Content Creation**: Write in Korean for local market
2. **Technical Implementation**: Leverage engineering background
3. **AI Tools**: Integrate AI-powered features where beneficial
4. **SEO Optimization**: Focus on Korean tax-related keywords
5. **Mobile-First**: Ensure excellent mobile experience

### Repository Structure Guidelines
```
├── content/
│   ├── _index.md          # Homepage (Korean)
│   ├── about/             # About page - tech background story
│   ├── services/          # Tax services offered
│   ├── blog/              # Tax tips and insights
│   └── contact/           # Contact and consultation info
├── static/
│   ├── images/            # Business logos, professional photos
│   └── documents/         # Tax guides, forms, resources
├── data/                  # Structured data for services, pricing
└── layouts/               # Custom templates if needed
```

### Content Guidelines
- **Language**: Primary Korean, secondary English
- **Tone**: Professional but approachable
- **Focus Areas**: Personal tax, business tax, AI-powered solutions
- **SEO Keywords**: 세무사, 소득세, 사업자세무, AI세무

### Technical Standards
- **Performance**: Fast loading times for mobile users
- **SEO**: Proper meta tags, structured data
- **Analytics**: Track user engagement and popular content
- **Security**: SSL, secure contact forms
- **Accessibility**: Screen reader friendly, proper contrast

### Deployment & Maintenance
- **Staging**: Test all changes locally before deployment
- **Production**: Deploy via Vercel with automated builds
- **Monitoring**: Regular performance and uptime checks
- **Updates**: Keep Hugo and theme updated monthly
- **Content**: Regular blog posts for SEO and authority building

### Business Development Integration
- **Lead Generation**: Contact forms, consultation booking
- **Client Resources**: Downloadable tax guides and checklists
- **Social Proof**: Client testimonials (with permission)
- **Local SEO**: Korean business directory integration

## Next Steps After Setup
1. Create professional branding (logo, colors, fonts)
2. Write core business content in Korean
3. Set up contact forms and consultation booking
4. Create downloadable tax resources
5. Implement analytics and SEO tracking
6. Connect to Korean business directories
7. Set up automated client communication tools
8. Test mobile experience thoroughly