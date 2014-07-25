const data = require('sdk/self').data;
const { Panel } = require("dev/panel");
const { Tool } = require("dev/toolbox");
const { Class } = require("sdk/core/heritage");

const GulpPanel = Class({
  extends: Panel,
  label: "Gulp Runner",
  tooltip: "Gulp Runner",
  icon: "./images/gulp-devtools-16x16.png",
  url: "./index.html",
  setup: function({debuggee}) {
    this.debuggee = debuggee;
  },
  dispose: function() {
    this.debuggee = null;
  },
  onReady: function() {
    console.log("Gulp panel document is interactive");
    this.debuggee.start();
    this.postMessage("RDP", [this.debuggee]);
  },
  onLoad: function() {
    console.log("Gulp.js panel document is fully loaded");
  }
});
exports.GulpPanel = GulpPanel;

const replTool = new Tool({
  panels: { repl: GulpPanel }
});