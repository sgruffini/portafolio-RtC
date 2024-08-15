import './About.css'

export function createAboutSection() {
  const section = document.createElement('section')
  section.id = 'about'

  const p = document.createElement('p')
  p.className = 'section__text__p1'
  p.textContent = 'Get To Know More'

  const h1 = document.createElement('h1')
  h1.className = 'title'
  h1.textContent = 'About Me'

  const container = document.createElement('div')
  container.className = 'section-container'

  // Eliminamos la creación de picContainer y la imagen

  const detailsContainer = document.createElement('div')
  detailsContainer.className = 'about-details-container'

  const aboutContainers = document.createElement('div')
  aboutContainers.className = 'about-containers'

  const experiences = [
    {
      img: './assets/experience.png',
      title: 'Experience',
      description: '2+ years \nFrontend Development'
    },
    {
      img: './assets/education.png',
      title: 'Education',
      description: 'B.Sc. Bachelors Degree\nM.Sc. Masters Degree'
    }
  ]

  experiences.forEach((exp) => {
    const details = document.createElement('div')
    details.className = 'details-container'

    const icon = document.createElement('img')
    icon.src = exp.img
    icon.alt = `${exp.title} icon`
    icon.className = 'icon'

    const h3 = document.createElement('h3')
    h3.textContent = exp.title

    const p = document.createElement('p')
    p.innerHTML = exp.description.replace('\n', '<br />')

    details.appendChild(icon)
    details.appendChild(h3)
    details.appendChild(p)

    aboutContainers.appendChild(details)
  })

  const textContainer = document.createElement('div')
  textContainer.className = 'text-container'

  detailsContainer.appendChild(aboutContainers)
  detailsContainer.appendChild(textContainer)

  container.appendChild(detailsContainer)

  section.appendChild(p)
  section.appendChild(h1)
  section.appendChild(container)

  return section
}
