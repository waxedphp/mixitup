
import mixitup from 'mixitup';
import mixitupPagination from 'mixitup-pagination';
window.mixitup = mixitup;
// Call the mixitup factory's .use() method, passing in the extension to install it
window.mixitup.use(mixitupPagination);
//import "mixitup-multifilter/dist/mixitup-multifilter.js";

import "./plugin.js";
import "./style.css";
