export default function navToggleStart() {
    console.log('Header Nav JS Started')
    const nav_toggle = document.getElementById("header-nav-toggle");
    if (!nav_toggle) { console.error('Error! No Navigation Toggle Button found.'); return; }
    
    nav_toggle.addEventListener('click', function() {
        console.log('Click')
        const nav = document.getElementById("header-nav");
        if (!nav) { console.error('Error! No Navigation found.'); return; }
    
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
}