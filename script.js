
/* Select first nav button */
let navigationButton1 = document.getElementById("first-button");

/* Select second nav button */
let navigationButton2 = document.getElementById("second-button");

/* Select menu toggle button */
let menuToggleOpenButton = document.querySelector(".js-menu-toggle");


/* Create function that toggles the first submenu */
function toggleFirstSubmenu () {
    if (navigationButton1.ariaExpanded === "false") {
        navigationButton1.setAttribute("aria-expanded", "true");
    }
    else {
        navigationButton1.setAttribute("aria-expanded", "false");
    }
}

/* Add Event Listener on first nav button */
navigationButton1.addEventListener("click", toggleFirstSubmenu);


/* Create function that toggles the second submenu */
function toggleSecondSubmenu () {
    if (navigationButton2.ariaExpanded === "false") {
        navigationButton2.setAttribute("aria-expanded", "true");
    }
    else {
        navigationButton2.setAttribute("aria-expanded", "false");
    }
}

/* Add Event Listener on second nav button */
navigationButton2.addEventListener("click", toggleSecondSubmenu);