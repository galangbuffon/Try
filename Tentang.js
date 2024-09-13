let prevScrollPos = window.pageYOffset;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        // Scroll ke atas
        header.style.top = "0";
    } else {
        // Scroll ke bawah
        header.style.top = `-${headerHeight}px`;
    }
    
    prevScrollPos = currentScrollPos;
}