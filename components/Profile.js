import './Profile.css'

export function createProfileSection() {
  const section = document.createElement('section')
  section.id = 'profile'

  const picContainer = document.createElement('div')
  picContainer.className = 'section__pic-container'

  const img = document.createElement('img')
  img.src = './assets/profile-pic.png'
  img.alt = 'John Doe profile picture'
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

  const btnContainer = document.createElement('div')
  btnContainer.className = 'btn-container'

  const btnCV = document.createElement('button')
  btnCV.className = 'btn btn-color-2'
  btnCV.textContent = 'Download CV'
  btnCV.onclick = () => window.open('./assets/resume-example.pdf')

  const btnContact = document.createElement('button')
  btnContact.className = 'btn btn-color-1'
  btnContact.textContent = 'Contact Info'
  btnContact.onclick = () => (location.href = './#contact')

  btnContainer.appendChild(btnCV)
  btnContainer.appendChild(btnContact)

  const socialsContainer = document.createElement('div')
  socialsContainer.id = 'socials-container'

  const linkedinIcon = document.createElement('img')
  linkedinIcon.src = './assets/linkedin.png'
  linkedinIcon.alt = 'My LinkedIn profile'
  linkedinIcon.className = 'icon'
  linkedinIcon.onclick = () => (location.href = 'https://linkedin.com/')

  const githubIcon = document.createElement('img')
  githubIcon.src = './assets/github.png'
  githubIcon.alt = 'My Github profile'
  githubIcon.className = 'icon'
  githubIcon.onclick = () => (location.href = 'https://github.com/')

  socialsContainer.appendChild(linkedinIcon)
  socialsContainer.appendChild(githubIcon)

  textContainer.appendChild(p1)
  textContainer.appendChild(h1)
  textContainer.appendChild(p2)
  textContainer.appendChild(btnContainer)
  textContainer.appendChild(socialsContainer)

  section.appendChild(picContainer)
  section.appendChild(textContainer)

  return section
}
