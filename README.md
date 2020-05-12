# ManyBabies website

Visible at http://manybabies.stanford.edu.


## Run locally to preview changes

To run locally (good idea to test out any substantive changes you make before you make a pull request):
1. Install [jekyll](https://jekyllrb.com/docs/installation/) and [bundler](https://bundler.io/)
2. Clone repository
3. ``cd`` into directory 
4. Build local Jekyll site: ``bundle exec jekyll server``
5. To preview, open browser and go to: ``http://localhost:4000``
6. Push your changes when you are done

## Modify

To modify:
- ``_config.yaml`` has many of the basic configuration options (e.g., social media and links to other pages)
- ``index.html`` is the main page, but currently (mostly) generated from...
- ``_posts/`` has blog posts, the most recent of which are featured in index.html
- ``about.md`` and other pages can be created in the root directory

If you'd like to post some news, create a new post in ``_posts/`` following the template ``YYYY-MM-DD-post-template.md``.
