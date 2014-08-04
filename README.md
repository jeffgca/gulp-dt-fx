# Gulp Devtools for Firefox

A port of the chrome gulp extension to Firefox. Requires Firefox 34.

Note: this is super basic but seems to work, all I really did was check out [the chrome extension](https://github.com/niki4810/gulp-devtools) and then cp -r from the [chrome_extension](https://github.com/niki4810/gulp-devtools/tree/master/chrome-extension) folder into this add-on's data folder. And it just works.

### Requirements
* download Firefox Nightly
* install node & npm

### Get Started

To get started with this repo:

1. npm install -g jpm
2. git clone https://github.com/canuckistani/gulp-dt-fx.git
3. cd ./gulp-dt-fx && npm install ( just in case )
4. jpm -b /path/to/Firefox(.exe) run

For more info please see the [jpm docs](https://github.com/mozilla/jpm/blob/master/README.md)
