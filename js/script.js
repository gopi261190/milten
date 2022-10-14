// menu
let navbar = document.getElementById("menus");

// write condition

const toggle = () => {

    // when
    if (navbar.style.display == "none") {
        navbar.style.display = "block";
        navbar.style.textAlign = "left";

    } else {
        navbar.style.display = "none";
    }

}

