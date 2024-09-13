document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle untuk tampilan mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    // Fungsi untuk membuka/menutup menu
    function toggleMenu() {
        navMenu.classList.toggle('show');
    }

    // Event listener untuk tombol toggle menu
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event klik menyebar ke document
        toggleMenu();
    });

    // Event listener untuk menutup menu saat mengklik di luar
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuToggle && navMenu.classList.contains('show')) {
            toggleMenu();
        }
    });

    // Menutup menu saat item menu diklik (opsional, tergantung desain Anda)
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            toggleMenu();
        }
    });

    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Di sini Anda bisa menambahkan logika untuk slider testimonial jika diperlukan

    const learnMoreBtn = document.getElementById('learn-more-btn');
    
    learnMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    var openModalButton = document.querySelector('.open-registration-modal');
    var modal = document.getElementById('registration-modal');
    var closeModalButton = modal.querySelector('.close-modal');

    openModalButton.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    const slides = document.querySelector('.slideshow-container');
    const totalSlides = document.querySelectorAll('.slide').length;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        
        slides.style.transform = `translateX(-${currentSlide * 20}%)`;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideshow() {
        stopSlideshow();
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
        });
    });

    slides.addEventListener('mouseenter', stopSlideshow);
    slides.addEventListener('mouseleave', startSlideshow);

    startSlideshow();
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(n) {
    slideIndex = n;
    if (slideIndex >= totalSlides) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = totalSlides - 1}
    
    document.querySelector('.slideshow-container').style.transform = `translateX(-${slideIndex * 20}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function autoSlide() {
    nextSlide();
}

// Tambahkan event listener untuk tombol
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Tambahkan event listener untuk indikator
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

// Mulai slideshow otomatis
setInterval(autoSlide, 8000); // Ganti slide setiap 5 detik

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = nav.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInsideMenu) {
            closeMenu();
        }
    });

    function toggleMenu() {
        nav.classList.toggle('show-menu');
        console.log('Menu toggled');
    }

    function closeMenu() {
        if (nav.classList.contains('show-menu')) {
            nav.classList.remove('show-menu');
            console.log('Menu ditutup');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = `-${headerHeight}px`;
        }
        prevScrollPos = currentScrollPos;
    }

    window.addEventListener('scroll', handleScroll);
});

// Tambahkan efek parallax pada hero section
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Tambahkan efek fade-in saat scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = (element) => {
    const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;
    
    const opacity = 1 - (distanceToTop - scrollTop + elementHeight) / elementHeight;
    
    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
};

window.addEventListener('scroll', () => {
    fadeElements.forEach(element => fadeIn(element));
});

// Tambahkan efek smooth scroll untuk link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan kelas 'current' ke menu yang aktif
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    const menuLength = menuItems.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('current');
        }
    }
});

// Tambahkan event listener untuk klik menu
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

function openModal(imgSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(thumbnail) {
    var mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.querySelector('img').src;
    mainImage.alt = thumbnail.querySelector('img').alt;
}

// Tambahkan event listener untuk mainImage
document.getElementById("mainImage").addEventListener('click', function() {
    openModal(this.src);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImage = document.getElementById('mainImage');

    function openModal(imgSrc) {
        var modal = document.getElementById("imageModal");
        var modalImg = document.getElementById("modalImage");
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }

    function closeModal() {
        var modal = document.getElementById("imageModal");
        modal.style.display = "none";
    }

    function updateMainImage() {
        mainImage.src = thumbnails[currentIndex].src;
        mainImage.alt = thumbnails[currentIndex].alt;
    }

    function moveCarousel(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = thumbnails.length - 1;
        } else if (currentIndex >= thumbnails.length) {
            currentIndex = 0;
        }

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.parentElement.style.transform = `translateX(${-100 * currentIndex}%)`;
        });

        updateMainImage();
    }

    // Event listener untuk mainImage
    mainImage.addEventListener('click', function() {
        openModal(this.src);
    });

    // Event listener untuk tombol carousel
    document.querySelector('.carousel-button.prev').addEventListener('click', function() {
        moveCarousel(-1);
    });

    document.querySelector('.carousel-button.next').addEventListener('click', function() {
        moveCarousel(1);
    });

    // Event listener untuk thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index;
            updateMainImage();
        });
    });
});