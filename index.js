function togglerNavbar() {
    let navbar = document.getElementById('mobileNavLinks');

    navbar.classList.toggle('show');
}

let open = document.getElementById('open');

open.addEventListener('click', togglerNavbar);

let close = document.getElementById('close');

close.addEventListener('click', togglerNavbar);