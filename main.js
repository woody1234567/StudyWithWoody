let currentLang = 'en';

const langBtn = document.getElementById('language-toggle');
langBtn.textContent = 'English';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    langBtn.textContent = currentLang === 'en' ? 'English' : '中文';
});



// import 資料 from "模組檔案的路徑"
import { multiply, sum } from './lib.js';
console.log(sum);
console.log(multiply);
console.log(multiply({ a: 2, b: 3 }));
console.log(sum(10));




