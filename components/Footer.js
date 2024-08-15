import './Footer.css'

export function createFooter() {
  const footer = document.createElement('footer')

  const nav = document.createElement('nav')
  const navLinksContainer = document.createElement('div')
  navLinksContainer.className = 'nav-links-container'

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

  navLinksContainer.appendChild(navLinks)
  nav.appendChild(navLinksContainer)

  const copyright = document.createElement('p')
  copyright.textContent = 'Copyright © 2023 John Doe. All Rights Reserved.'

  footer.appendChild(nav)
  footer.appendChild(copyright)

  return footer
}
