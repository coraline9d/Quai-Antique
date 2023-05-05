/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import "../styles/app.scss";

// start the Stimulus application
import "bootstrap";

require("./jquery.min.js");
require("./ajax.js");
require("./cookie.js");

import { Tooltip, Toast, Popover } from "bootstrap";

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("opaque");
    document.querySelector("body").classList.toggle("navbar-expanded");
  });
