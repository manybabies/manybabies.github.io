# Home page for the ManyBabies project

Visible at [http://manybabies.stanford.edu]().

This site is a blatant clone of the ManyPrimates site: [http://manyprimates.github.io]()

## Making changes to the content

- Fetch any upstream changes to your local repo (i.e., make sure you have the latest version)
- Edit the Markdown `.md` files. When you push changes to the remote repo, github will build the site (typically within a few minutes).
- Put images in the `assets/images` folder
- Use relative urls whenever possible, e.g. `pilot.html` instead of `https://manybabies.github.io/pilot.html`
- **Do not touch the files in the folders that start with an underscore `_` unless you're sure you know what you're doing!**

## Setting up a local site to preview changes

- Have a clone of the github repo on your local machine
- Install Jekyll: `gem install bundler jekyll`
    - If that gives you any errors, google them... or check [here](https://jekyllrb.com/docs/installation/)
- Install jekyll-seo-tag: `gem install bundler jekyll-seo-tag`
- `cd` into the git repo for the website
- Build local Jekyll site: `bundle exec jekyll serve`
- Open browser and go to: `http://localhost:4000`
- You should see any changes you save on your local `.md` files (refresh)
- Push your changes when you're happy with the preview!
