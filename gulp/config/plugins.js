import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  if: ifPlugin
}

export { plugins };