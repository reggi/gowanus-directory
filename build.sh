wintersmith build
#git push origin `git subtree split --prefix build gh-pages`:gh-pages --force
git subtree split --prefix build --branch gh-pages
git push origin gh-pages
