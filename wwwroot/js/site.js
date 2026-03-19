import {
    debug
} from "./utils.js";

const PageScripts = {
    home: function () {
        debug("Page", "Home");
        

    }
}

document.addEventListener("DOMContentLoaded", function () {
    const page = document.body.dataset.page;

    if (PageScripts[page]) {
        PageScripts[page]();
    } 
});