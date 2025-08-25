console.log('Header Nav JS Started')
var nav_toggle = document.getElementById("header-nav-toggle");

nav_toggle.addEventListener('click', function() {
    console.log('Click')
    var nav = document.getElementById("header-nav");

    console.log('Current display:', nav.style.display)
    switch (nav.style.display) {
        case 'none':
            nav.style.display = 'flex';
            break;
        case 'flex':
            nav.style.display = 'none';
            break
        default:
            break;
    }
});