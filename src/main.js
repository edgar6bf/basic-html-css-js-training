// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    // 스크롤되는 Y 좌표가 headerHeight 보다 크다면 다른 스타일링!
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home Section을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    // 실시간으로 정밀하게 값을 수정해야 하므로 CSS를 inline으로 설정
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// 화살표 아이콘 숨기기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY < homeHeight / 2) {
        arrowUp.classList.add('arrow-up--hide');
    } else {
        arrowUp.classList.remove('arrow-up--hide');
    }
});

// Navbar Toggle Button Click Process
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});
