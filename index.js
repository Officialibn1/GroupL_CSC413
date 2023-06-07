function togglerNavbar() {
    let navbar = document.getElementById('mobileNavLinks');

    navbar.classList.toggle('show');
}

let open = document.getElementById('open');

open.addEventListener('click', togglerNavbar);

let close = document.getElementById('close');

close.addEventListener('click', togglerNavbar);

var navLlink = document.getElementById('link')

navLlink.addEventListener('click', togglerNavbar)

var navLlink2 = document.getElementById('link2')

navLlink2.addEventListener('click', togglerNavbar)

var navLlink3 = document.getElementById('link3')

navLlink3.addEventListener('click', togglerNavbar)

var navLlink4 = document.getElementById('link4')

navLlink4.addEventListener('click', togglerNavbar)

var navLlink5 = document.getElementById('link5')

navLlink5.addEventListener('click', togglerNavbar)