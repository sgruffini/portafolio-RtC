import './Experience.css'
import { createButton } from './Button.js'

export function createExperienceSection() {
  const section = document.createElement('section')
  section.id = 'experience'

  // Contenedor de botones de alternancia
  const toggleContainer = document.createElement('div')
  toggleContainer.className = 'toggle-container'

  // Crear botones utilizando el componente Button
  const experienceBtn = createButton('Experiencia', 'toggle-btn active', () => {
    experienceContainer.style.display = 'block'
    studiesContainer.style.display = 'none'
    experienceBtn.classList.add('active')
    studiesBtn.classList.remove('active')
  })

  const studiesBtn = createButton('Estudios', 'toggle-btn', () => {
    experienceContainer.style.display = 'none'
    studiesContainer.style.display = 'block'
    studiesBtn.classList.add('active')
    experienceBtn.classList.remove('active')
  })

  toggleContainer.appendChild(experienceBtn)
  toggleContainer.appendChild(studiesBtn)
  section.appendChild(toggleContainer)

  // Contenedor de Experiencia
  const experienceContainer = document.createElement('div')
  experienceContainer.className = 'content-container'
  experienceContainer.id = 'experience-content'

  const experienceList = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Basic' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node JS', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' }
      ]
    }
  ]

  experienceList.forEach((exp) => {
    const detailsContainer = document.createElement('div')
    detailsContainer.className = 'details-container'

    const h2 = document.createElement('h2')
    h2.className = 'experience-sub-title'
    h2.textContent = exp.title

    const articleContainer = document.createElement('div')
    articleContainer.className = 'article-container'

    exp.skills.forEach((skill) => {
      const article = document.createElement('article')

      const icon = document.createElement('img')
      icon.src = `./assets/${skill.name}.png`
      icon.alt = `${skill.name} icon`
      icon.className = 'icon'

      const div = document.createElement('div')
      const h3 = document.createElement('h3')
      h3.textContent = skill.name

      const p = document.createElement('p')
      p.textContent = skill.level

      div.appendChild(h3)
      div.appendChild(p)

      article.appendChild(icon)
      article.appendChild(div)

      articleContainer.appendChild(article)
    })

    detailsContainer.appendChild(h2)
    detailsContainer.appendChild(articleContainer)
    experienceContainer.appendChild(detailsContainer)
  })

  // Contenedor de Estudios
  const studiesContainer = document.createElement('div')
  studiesContainer.className = 'content-container'
  studiesContainer.id = 'studies-content'
  studiesContainer.style.display = 'none' // Oculto por defecto

  const studiesList = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'XYZ University',
      year: '2018 - 2022'
    },
    {
      degree: 'M.Sc. Software Engineering',
      institution: 'ABC Institute',
      year: '2023 - Present'
    }
  ]

  studiesList.forEach((study) => {
    const detailsContainer = document.createElement('div')
    detailsContainer.className = 'details-container'

    const h2 = document.createElement('h2')
    h2.className = 'study-sub-title'
    h2.textContent = study.degree

    const p = document.createElement('p')
    p.textContent = `${study.institution} | ${study.year}`

    detailsContainer.appendChild(h2)
    detailsContainer.appendChild(p)
    studiesContainer.appendChild(detailsContainer)
  })

  section.appendChild(experienceContainer)
  section.appendChild(studiesContainer)

  return section
}
