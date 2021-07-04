document.addEventListener('DOMContentLoaded', () => {
  /* --- SHOW MENU --- */
  function showMenu(hamburgerId, navId) {
    const hamburger = document.getElementById(hamburgerId),
      nav = document.getElementById(navId)
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        nav.classList.toggle('show')
      })
    }
  }
  showMenu('nav-hamburger', 'nav-menu')

  /* --- BURGER ANIMATION --- */
  const animBurger = document.getElementById('nav-hamburger')
  let menuOpen = false
  animBurger.addEventListener('click', () => {
    if (!menuOpen) {
      animBurger.classList.add('open')
      menuOpen = true
    } else {
      animBurger.classList.remove('open')
      menuOpen = false
    }
  })

  /* --- GSAP --- */
  //Navbar
  gsap.from('.nav__title', {
    opacity: 0,
    duration: 3,
    delay: 0.8,
    y: 30,
    ease: 'expo.out',
  })
  gsap.from('.nav__hamburger', {
    opacity: 0,
    duration: 3,
    delay: 1.1,
    y: 30,
    ease: 'expo.out',
  })
  gsap.from('.nav__link', {
    opacity: 0,
    duration: 3,
    delay: 1,
    y: 35,
    ease: 'expo.out',
    stagger: 0.2,
  })
  //Text
  gsap.from('.landing__title', {
    opacity: 0,
    duration: 3,
    delay: 1.6,
    y: 35,
    ease: 'expo.out',
  })
  gsap.from('.landing__subtitle', {
    opacity: 0,
    duration: 3,
    delay: 1.4,
    y: 35,
    ease: 'expo.out',
  })

  //Scroll
  gsap.from('.landing__scroll', {
    opacity: 0,
    duration: 3,
    delay: 1.8,
    y: 35,
    ease: 'expo.out',
  })
})
