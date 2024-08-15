import './Header.css'

export function createNav() {
  const navDesktop = document.createElement('nav')
  navDesktop.id = 'desktop-nav'

  const logo = document.createElement('div')
  logo.className = 'logo'
  logo.textContent = 'John Doe'

  const navLinks = document.createElement('ul')
  navLinks.className = 'nav-links'

  const links = ['About', 'Experience', 'Projects', 'Contact']
  links.forEach((link) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = `#${link.toLowerCase()}`
    a.textContent = link
    li.appendChild(a)
    navLinks.appendChild(li)
  })

  navDesktop.appendChild(logo)
  navDesktop.appendChild(navLinks)

  // Hamburger Nav
  const navHamburger = document.createElement('nav')
  navHamburger.id = 'hamburger-nav'

  const logoHamburger = document.createElement('div')
  logoHamburger.className = 'logo'
  logoHamburger.textContent = 'John Doe'

  const hamburgerMenu = document.createElement('div')
  hamburgerMenu.className = 'hamburger-menu'

  const hamburgerIcon = document.createElement('div')
  hamburgerIcon.className = 'hamburger-icon'
  hamburgerIcon.onclick = toggleMenu
  ;['span', 'span', 'span'].forEach((tag) => {
    const span = document.createElement(tag)
    hamburgerIcon.appendChild(span)
  })

  const menuLinks = document.createElement('div')
  menuLinks.className = 'menu-links'

  links.forEach((link) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = `#${link.toLowerCase()}`
    a.textContent = link
    a.onclick = toggleMenu
    li.appendChild(a)
    menuLinks.appendChild(li)
  })

  hamburgerMenu.appendChild(hamburgerIcon)
  hamburgerMenu.appendChild(menuLinks)
  navHamburger.appendChild(logoHamburger)
  navHamburger.appendChild(hamburgerMenu)

  return { navDesktop, navHamburger }
}

function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')
  menu.classList.toggle('open')
  icon.classList.toggle('open')
}
