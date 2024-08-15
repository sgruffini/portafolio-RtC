import './Contact.css'

export function createContactSection() {
  const section = document.createElement('section')
  section.id = 'contact'

  const p = document.createElement('p')
  p.className = 'section__text__p1'
  p.textContent = 'Get in Touch'

  const h1 = document.createElement('h1')
  h1.className = 'title'
  h1.textContent = 'Contact Me'

  const contactInfoUpper = document.createElement('div')
  contactInfoUpper.className = 'contact-info-upper-container'

  const contactDetails = [
    {
      icon: './assets/email.png',
      text: '<a href="mailto:examplemail@gmail.com">Example@gmail.com</a>'
    },
    {
      icon: './assets/linkedin.png',
      text: '<a href="https://www.linkedin.com">LinkedIn</a>'
    }
  ]

  contactDetails.forEach((contact) => {
    const contactContainer = document.createElement('div')
    contactContainer.className = 'contact-info-container'

    const icon = document.createElement('img')
    icon.src = contact.icon
    icon.alt = 'Contact icon'
    icon.className = 'icon contact-icon'

    const p = document.createElement('p')
    p.innerHTML = contact.text

    contactContainer.appendChild(icon)
    contactContainer.appendChild(p)

    contactInfoUpper.appendChild(contactContainer)
  })

  section.appendChild(p)
  section.appendChild(h1)
  section.appendChild(contactInfoUpper)

  return section
}
