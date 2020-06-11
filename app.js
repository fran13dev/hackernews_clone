import RouterHandler from './router.js'

window.onhashchange = () => {
  setActiveLink()
}

function setActiveLink() {
  const links = document.querySelectorAll('.header-link')

  links.forEach(link => {
    const linkURL = link.getAttribute('href')
    const currentURL = window.location.hash

    if (linkURL === currentURL) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

class App {
  constructor() {
    new RouterHandler()
  }
}

new App()
