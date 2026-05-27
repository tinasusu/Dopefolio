// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')
const lightbox = document.getElementById('lightbox')

if (headerLogoConatiner && lightbox) {
  headerLogoConatiner.style.cursor = 'pointer'
  headerLogoConatiner.addEventListener('click', () => {
    lightbox.classList.add('active')
  })
}

// ---
const heroImgCont = document.querySelector('.home-hero__img-cont')

if (heroImgCont && lightbox) {
  heroImgCont.style.cursor = 'pointer'
  heroImgCont.addEventListener('click', () => {
    lightbox.classList.add('active')
  })
}

// ---
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (!e.target.classList.contains('lightbox__img')) {
      lightbox.classList.remove('active')
    }
  })
}

// ---
const lifeGalleries = document.querySelectorAll('[data-gallery]')

for (let i = 0; i < lifeGalleries.length; i++) {
  const gallery = lifeGalleries[i]
  const main = gallery.querySelector('[data-gallery-main]')
  const thumbs = gallery.querySelectorAll('[data-gallery-thumb]')

  for (let j = 0; j < thumbs.length; j++) {
    thumbs[j].addEventListener('click', () => {
      const tone = thumbs[j].dataset.tone
      const image = thumbs[j].dataset.image
      for (let k = 0; k < thumbs.length; k++) {
        thumbs[k].classList.remove('is-active')
      }

      thumbs[j].classList.add('is-active')

      if (main) {
        main.classList.add('is-switching')
        window.setTimeout(() => {
          if (image) {
            main.className = 'life-story__image life-story__image--photo is-active'
            main.style.backgroundImage = `url('${image}')`
          } else {
            main.className = `life-story__image life-story__image--${tone} is-active`
            main.style.backgroundImage = ''
          }
          main.classList.remove('is-switching')
        }, 120)
      }
    })
  }
}
