import './Profile.css'
import { createButton } from './Button.js'

export function createProfileSection() {
  const section = document.createElement('section')
  section.id = 'profile'

  const picContainer = document.createElement('div')
  picContainer.className = 'section__pic-container'

  const img = document.createElement('img')
  img.src = './assets/profile-pic.png'
  img.alt = 'John Doe profile picture'
  img.className = 'profile-pic'

  picContainer.appendChild(img)

  const textContainer = document.createElement('div')
  textContainer.className = 'section__text'

  const p1 = document.createElement('p')
  p1.className = 'section__text__p1'
  p1.textContent = "Hello, I'm"

  const h1 = document.createElement('h1')
  h1.className = 'title'
  h1.textContent = 'John Doe'

  const p2 = document.createElement('p')
  p2.className = 'section__text__p2'
  p2.textContent = 'Frontend Developer'

  // Crear botones reutilizables
  const btnContainer = document.createElement('div')
  btnContainer.className = 'btn-container'

  const btnCV = createButton('Download CV', 'btn-color-2', () => {
    window.open('./assets/resume-example.pdf')
  })

  const btnContact = createButton('Contact Info', 'btn-color-1', () => {
    location.href = './#contact'
  })

  btnContainer.appendChild(btnCV)
  btnContainer.appendChild(btnContact)

  textContainer.appendChild(p1)
  textContainer.appendChild(h1)
  textContainer.appendChild(p2)
  textContainer.appendChild(btnContainer)

  section.appendChild(picContainer)
  section.appendChild(textContainer)

  return section
}
