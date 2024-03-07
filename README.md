# jgoodman-website

This is the repo for the `jgoodman-website` website built with [Astro](https://astro.build/).
This repo is available under the MIT license.

### Handy Links

- [Astro docs](https://docs.astro.build/en/getting-started/)
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Deploying Astro site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
- [Git](https://git-scm.com/book/en/v2/)
- [GitHub Desktop docs](https://docs.github.com/en/desktop)
- [Markdown basic syntax](https://www.markdownguide.org/basic-syntax/)
- [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)

### Website Features

- [90s Cursor Effects](https://github.com/tholman/cursor-effects)
- Search via [Pagefind](https://pagefind.app/), implemented with [shishkin/astro-pagefind](https://github.com/shishkin/astro-pagefind)
- Dynamic generation of pages for blog and associated tags/categories via Astro content collections

## Hosting

The website files can be hosted for free on GitHub in a repo named "*username*.github.io."
When
[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
is configured for the repo, a website will be created at "https://*username*.github.io."
Astro provides [instructions for deploying the site to GitHub pages](https://docs.astro.build/en/guides/deploy/github/).

You can review [limits on the use of GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits-on-use-of-github-pages) as well.

## Repo Ownership

Currently, the website is a public repo under `datle-dev`.
There's a few different options for making it yours:

- [Create a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the repo
  - Creates a copy of the original with a connection to that "upstream" original
  - Usually for making changes, then proposing the changes back upstream
  - If you're keen on sticking with a template, this would let you benefit from fetching upstream changes if it was actively maintained, and you would serve your own version (perhaps via a separate branch) of the website
- [Transfer ownership](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) of the repo
  - The original owner `datle-dev` would be added as a contributor in the new one, so I can continue to help update and maintain the site's code

**I recommend we transfer ownership.**

## Installation

### Prerequisites

1. Create an account on [GitHub](https://github.com/)
2. Install [Git](https://git-scm.com/download/mac)
    - Depending on your MacOs version, it may already be installed, so try to run `git` from the Terminal first to check
    ```bash
    git --version
    ```
3. If you'd prefer a graphical user interface (GUI) over a command line interface (CLI) for managing version control, consider [GitHub Desktop](https://desktop.github.com/) or similar
4. [Install Astro](https://docs.astro.build/en/install/auto/) by doing the following:
  - Install [Node.js](https://nodejs.org/en) v18.14.1 or higher (it includes the package manager `npm`)
  - Use any text editor you like—I recommend [Visual Studio (VS) Code](https://code.visualstudio.com/) with the following [editor setup](https://docs.astro.build/en/editor-setup/)
  - Use any terminal you like—the built-in Terminal in MacOs is fine

### Local Development of the Website

1. In the Terminal, navigate to a desired parent folder: `cd path/to/parent/folder`
2. Clone the repo: `git clone https://github.com/datle-dev/jgoodman-website.git`
3. Navigate to the cloned repo in the newly created subfolder: `cd jgoodman-website`
4. Install dependencies: `npm install`
5. Start a local dev server: `npm run dev`
6. Open `localhost:4321` in your browser to see the site
    - Provides live preview of updates made to the website pages and content
7. To preview the finished build (also at `localhost:4321`), type `npm run build` and once that's finished, `npm run preview`
8. Make changes as needed, stage those changes (`git add`), commit those changes (`git commit`), and push them (`git push`) to the remote (the repo stored on GitHub) to build the website
    - Can use a source control GUI instead like the VS Code built-in one or GitHub Desktop if you prefer
    - The GitHub Pages website is configured to be built and deployed automatically via a `/.github/workflows/deploy.yml` as recommended by Astro
9.  Once the build and deployment is complete, navigate to `https://datle-dev.github.io/jgoodman-website` to see the website

## VS Code Extensions

### Highly Recommended
- [Astro - Language support for Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Markdown All in One - All you need to write Markdown](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

### Optional
- [Markdown Table - Add features to edit markdown tables](https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable)
  - If you plan on writing a lot of tables in Markdown
- [MDX - Language support for MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
  - If you plan on writing MDX files


## Command Reference

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



## Project Structure

### Main Folders
The following are the main folders of interest in the project structure:

```text
/
├── .github/
├── .vscode/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```
`.github/`
contains the configuration for automatically building and deploying your site at "https://*username*.github.io" from the `main` branch of your repo whenever you `git push` according to [Astro's guide on deploying the site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

`.vscode/`
has `*.json` files that recommend specific extensions as well as configure run/debug.

`public/`
is for non-code, unprocessed assets like fonts, icons, etc.

`src/`
is where the project source code lives—components, pages, styles, scripts, etc.

### .gitignore Folders
The following folders are included in `.gitignore`, so they aren't synced to the remote repo.
These are only for local development and preview of the website.
```text
/
├── .astro/
├── dist/
├── node_modules/

```
`.astro/`
is generated by astro.

`dist/`
is where generated HTML and other processed files are created after running `npm run build` and previewed with `npm run preview`.

`node_modules/`
is where packages installed by `npm` end up.

Here's more info about [Astro project structure](https://docs.astro.build/en/basics/project-structure/).


## Customizing the Website

Consider [making changes in a branch](https://docs.github.com/en/desktop/making-changes-in-a-branch) and merging those changes into the `main` branch when ready.

### Main Pages

- `index.astro` is required in `src/pages` for the home page to be rendered correctly
  - For pages besides `index.astro`, there are other [supported page files](https://docs.astro.build/en/basics/astro-pages/) too

`src/pages/` is where all the main pages of your website live.
`/blog/`, `/category/`, and `/tags/` are all automatically set up to build pages based on whatever's in `src/content/blog/`—this is the dynamic page routing touted by Astro.

### Blog Content
`src/content/blog/`
is where you create individual blog posts by adding a `*.md` file
You will also be able to create a subfolder and inside include a `index.md` file,
which can help with organizing photos on a per-post basis.

### Writing Blog Posts

Every blog `*.md` file requires frontmatter, or custom metadata, to be defined.
The frontmatter must be fenced by a pair of 3 dashes (`---`).
The following are required frontmatter fields—Astro will enforce the type (string, boolean, array of strings, date, etc.) for these frontmatter fields.

```
---
title: "Title of Blog Post"
draft: False
tags: ["tag1", "tag2"]
category: "category1"
publishDate: yyyy-mm-dd
---
```

The following are optional frontmatter fields:
```
---
description:
image:
    src:
    alt:
modifyDate:
---
```

Aside from the frontmatter, you can write your content in Markdown.
Here's [Markdown basic syntax](https://www.markdownguide.org/basic-syntax/) and a [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/).
A Markdown test blog post is provided in `src/content/blog` that serves as a preview of all major Markdown syntax as it would appear on the website.

### Photography Gallery

The photography page is set up as a `*.astro` file to take advantage of a custom image component `src/components/GalleryImage.astro` aliased as `GalleryImage`.
This component simply wraps the photo with an HTML link that opens the full image file.
This component and all images to be included in the gallery should be imported similar to what's shown below in the Astro file's frontmatter.
A variable is also defined to specify a consistent image width between all `GalleryImage` components.

```astro
---
// stuff

import GalleryImage from '@components/GalleryImage.astro';

import my-image-1 from '@assets/subfolder/my-image-1.jpg';
import my-image-2 from '@assets/subfolder/my-image-2.jpg';
import my-image-3 from '@assets/subfolder/my-image-3.jpg';

const imageWidth = 200;
// stuff
---
```

Then in the main body of the `*.astro` file, the `GalleryImage` would be included as shown below:

```astro
<GalleryImage
  imagePath={my-image-1}
  altText="alt text for my image 1"
  width={imageWidth}
/>
```

Photos on the built site will be opened in new tab by clicking on them.
They won't open properly in dev mode (`npm run dev`), but will work when previewing (`npm run build`, then `npm run preview`).

## To-Do

### General
- [ ] choose design/template for main site (consider [one of these Astro themes](https://astro.build/themes/))
- [ ] finalize organization of what's included in `/public/` vs `/src/assets/`
  - [ ] gifs?
  - [ ] docs?
  - [ ] background images?
- [ ] test subfolders for blog posts with local images
- [ ] address accessibility issues
- [ ] make background image static relative to page scrolling

### Performance
  - [ ] look into lazy loading for posts or images in photo gallery
  - [ ] multiple pages for blog archive

## Miscellaneous Notes

### Resources for 90s Websites
- [90s web buttons](https://anlucas.neocities.org/88x31Buttons)
- [Under construction gifs](http://textfiles.com/underconstruction/)
- [Gifs from old websites](https://gifcities.org/)
- [Javascript library for cursor effects](https://github.com/tholman/cursor-effects)
- [Uncharacteristically helpful WikiHow article with resources for making a website like the 90s](https://www.wikihow.com/Make-a-Website-Like-the-90s)