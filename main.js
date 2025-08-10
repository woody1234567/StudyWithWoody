let currentLang = 'en';

const langBtn = document.getElementById('language-toggle');
langBtn.textContent = 'English';

// Language button event handlers - prevent double trigger
let langTouchHandled = false;

function toggleLanguage(e) {
    if (e.type === 'touchstart') {
        langTouchHandled = true;
    } else if (e.type === 'click' && langTouchHandled) {
        langTouchHandled = false;
        return;
    }
    
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    langBtn.textContent = currentLang === 'en' ? 'English' : '中文';
}

langBtn.addEventListener('click', toggleLanguage);
langBtn.addEventListener('touchstart', toggleLanguage, { passive: true });

const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');
const musicIcon = musicBtn.querySelector('i');
let hasStarted = false;

// 自動播放（第一次進入頁面，需用互動觸發）
function startMusic() {
    music.play().then(() => {
        // musicBtn.textContent = "playing";
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
        hasStarted = true;

    }).catch(() => { });
}

// 只在第一次互動時自動播放 - Include touch events for mobile
function handleUserInteraction() {
    if (!hasStarted) startMusic();
}
window.addEventListener('click', handleUserInteraction, { once: true });
window.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });
window.addEventListener('keydown', handleUserInteraction, { once: true });
window.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });

// Music button toggle function - prevent double trigger
let musicTouchHandled = false;

function toggleMusic(e) {
    e.stopPropagation();
    
    if (e.type === 'touchstart') {
        musicTouchHandled = true;
    } else if (e.type === 'click' && musicTouchHandled) {
        musicTouchHandled = false;
        return;
    }
    
    if (!hasStarted || music.paused) {
        startMusic();
    } else {
        music.pause();
        // musicBtn.textContent = "stopped";
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    }
}

// 按鈕控制播放/暫停 - Support both click and touch events
musicBtn.addEventListener('click', toggleMusic);
musicBtn.addEventListener('touchstart', toggleMusic, { passive: false });

// Dark mode toggle functionality
const darkModeBtn = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeBtn.querySelector('i');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply saved theme on page load
function applyTheme() {
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        document.documentElement.removeAttribute('data-theme');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
}

// Initialize theme on page load
applyTheme();

// Dark mode toggle function - prevent double trigger
let darkModeTouchHandled = false;

function toggleDarkMode(e) {
    if (e.type === 'touchstart') {
        darkModeTouchHandled = true;
    } else if (e.type === 'click' && darkModeTouchHandled) {
        darkModeTouchHandled = false;
        return;
    }
    
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
    updateGeometricBackground(); // Update geometric background when theme changes
}

// Dark mode toggle event listeners - Support both click and touch events
darkModeBtn.addEventListener('click', toggleDarkMode);
darkModeBtn.addEventListener('touchstart', toggleDarkMode, { passive: true });

// /* Particles.js configuration - COMMENTED OUT
// function initParticles() {
//     particlesJS('particles-js', {
//         "particles": {
//             "number": {
//                 "value": 80,
//                 "density": {
//                     "enable": true,
//                     "value_area": 800
//                 }
//             },
//             "color": {
//                 "value": isDarkMode ? "#A2D4E6" : "#002B44"
//             },
//             "shape": {
//                 "type": "circle",
//                 "stroke": {
//                     "width": 0,
//                     "color": "#000000"
//                 }
//             },
//             "opacity": {
//                 "value": isDarkMode ? 0.4 : 0.6,
//                 "random": false,
//                 "anim": {
//                     "enable": false
//                 }
//             },
//             "size": {
//                 "value": 3,
//                 "random": true,
//                 "anim": {
//                     "enable": false
//                 }
//             },
//             "line_linked": {
//                 "enable": true,
//                 "distance": 150,
//                 "color": isDarkMode ? "#A2D4E6" : "#083C5A",
//                 "opacity": isDarkMode ? 0.3 : 0.5,
//                 "width": 1
//             },
//             "move": {
//                 "enable": true,
//                 "speed": 2,
//                 "direction": "none",
//                 "random": false,
//                 "straight": false,
//                 "out_mode": "out",
//                 "bounce": false,
//                 "attract": {
//                     "enable": false
//                 }
//             }
//         },
//         "interactivity": {
//             "detect_on": "canvas",
//             "events": {
//                 "onhover": {
//                     "enable": true,
//                     "mode": "repulse"
//                 },
//                 "onclick": {
//                     "enable": true,
//                     "mode": "push"
//                 },
//                 "resize": true
//             },
//             "modes": {
//                 "grab": {
//                     "distance": 400,
//                     "line_linked": {
//                         "opacity": 1
//                     }
//                 },
//                 "bubble": {
//                     "distance": 400,
//                     "size": 40,
//                     "duration": 2,
//                     "opacity": 8,
//                     "speed": 3
//                 },
//                 "repulse": {
//                     "distance": 100,
//                     "duration": 0.4
//                 },
//                 "push": {
//                     "particles_nb": 4
//                 },
//                 "remove": {
//                     "particles_nb": 2
//                 }
//             }
//         },
//         "retina_detect": true
//     });
// }

// // Update particles color based on theme
// function updateParticlesColor() {
//     // Reinitialize particles with new colors
//     setTimeout(() => {
//         initParticles();
//     }, 100);
// }

// // Initialize particles when page loads
// window.addEventListener('load', () => {
//     initParticles();
// });
// */ // END PARTICLES COMMENT

// New Geometric Background Animation
function createGeometricBackground() {
    const canvas = document.getElementById('particles-js');
    if (!canvas) return;
    
    // Clear any existing content
    canvas.innerHTML = '';
    
    // Set base background
    canvas.style.background = isDarkMode ? '#002B44' : '#A2D4E6';
    canvas.style.backgroundSize = 'cover';
    canvas.style.animation = 'none';
    
    // Create floating geometric shapes
    const colors = isDarkMode 
        ? ['#A2D4E6', '#083C5A', '#FFA126'] 
        : ['#002B44', '#083C5A', '#FFA126'];
    
    // Remove existing shapes
    canvas.querySelectorAll('.floating-shape').forEach(shape => shape.remove());
    
    // Create multiple floating circles
    for (let i = 0; i < 8; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape floating-circle';
        
        // Random properties
        const size = Math.random() * 50 + 15; // 15-65px
        const x = Math.random() * 100; // 0-100%
        const y = Math.random() * 100; // 0-100%
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDelay = Math.random() * 8; // 0-8s delay
        const animationDuration = (Math.random() * 10 + 15); // 15-25s duration
        
        // Style the shape
        shape.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(circle, ${color}40, ${color}10);
            border-radius: 50%;
            animation: floatShape ${animationDuration}s ease-in-out infinite;
            animation-delay: ${animationDelay}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        canvas.appendChild(shape);
    }

    // Create floating squares
    for (let i = 0; i < 6; i++) {
        const square = document.createElement('div');
        square.className = 'floating-shape floating-square';
        
        const size = Math.random() * 40 + 20;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDelay = Math.random() * 6;
        const animationDuration = Math.random() * 8 + 12;
        
        square.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(135deg, ${color}35, ${color}15);
            border-radius: 10%;
            animation: rotateSquare ${animationDuration}s ease-in-out infinite;
            animation-delay: ${animationDelay}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        canvas.appendChild(square);
    }

    // Create floating diamonds
    for (let i = 0; i < 5; i++) {
        const diamond = document.createElement('div');
        diamond.className = 'floating-shape floating-diamond';
        
        const size = Math.random() * 35 + 20;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDelay = Math.random() * 7;
        const animationDuration = Math.random() * 12 + 18;
        
        diamond.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(45deg, ${color}40, ${color}20);
            transform: rotate(45deg);
            animation: floatDiamond ${animationDuration}s ease-in-out infinite;
            animation-delay: ${animationDelay}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        canvas.appendChild(diamond);
    }

    // Create floating hexagons
    for (let i = 0; i < 4; i++) {
        const hexagon = document.createElement('div');
        hexagon.className = 'floating-shape floating-hexagon';
        
        const size = Math.random() * 30 + 25;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDelay = Math.random() * 5;
        const animationDuration = Math.random() * 15 + 20;
        
        hexagon.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 0.866}px;
            left: ${x}%;
            top: ${y}%;
            background: ${color}30;
            margin: ${size * 0.289}px 0;
            animation: floatHexagon ${animationDuration}s linear infinite;
            animation-delay: ${animationDelay}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        // Create hexagon shape using pseudo elements
        hexagon.style.position = 'relative';
        
        const beforeElement = document.createElement('div');
        beforeElement.style.cssText = `
            position: absolute;
            top: -${size * 0.289}px;
            left: 0;
            width: 0;
            height: 0;
            border-left: ${size / 2}px solid transparent;
            border-right: ${size / 2}px solid transparent;
            border-bottom: ${size * 0.289}px solid ${color}30;
        `;
        
        const afterElement = document.createElement('div');
        afterElement.style.cssText = `
            position: absolute;
            bottom: -${size * 0.289}px;
            left: 0;
            width: 0;
            height: 0;
            border-left: ${size / 2}px solid transparent;
            border-right: ${size / 2}px solid transparent;
            border-top: ${size * 0.289}px solid ${color}30;
        `;
        
        hexagon.appendChild(beforeElement);
        hexagon.appendChild(afterElement);
        canvas.appendChild(hexagon);
    }
    
    // Add some triangular shapes
    for (let i = 0; i < 6; i++) {
        const triangle = document.createElement('div');
        triangle.className = 'floating-triangle';
        
        const size = Math.random() * 40 + 20;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDelay = Math.random() * 6;
        const animationDuration = Math.random() * 8 + 12;
        
        triangle.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            left: ${x}%;
            top: ${y}%;
            border-left: ${size}px solid transparent;
            border-right: ${size}px solid transparent;
            border-bottom: ${size * 1.5}px solid ${color}30;
            animation: rotateFloat ${animationDuration}s linear infinite;
            animation-delay: ${animationDelay}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        canvas.appendChild(triangle);
    }
}

// Update geometric background when theme changes
function updateGeometricBackground() {
    createGeometricBackground();
}

// Initialize geometric background when page loads
window.addEventListener('load', () => {
    createGeometricBackground();
});

// import 資料 from "模組檔案的路徑"
// import { multiply, sum } from './lib.js';
// console.log(sum);
// console.log(multiply);
// console.log(multiply({ a: 2, b: 3 }));
// console.log(sum(10));






