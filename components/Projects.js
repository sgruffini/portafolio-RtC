import './Projects.css'
import { createButton } from './Button.js'

export function createProjectsSection() {
  const section = document.createElement('section')
  section.id = 'projects'

  const p = document.createElement('p')
  p.className = 'section__text__p1'
  p.textContent = 'Browse My Recent'

  const h1 = document.createElement('h1')
  h1.className = 'title'
  h1.textContent = 'Projects'

  const projectDetails = document.createElement('div')
  projectDetails.className = 'experience-details-container'

  const projects = [
    {
      title: 'Project One',
      img: './assets/project-1.png',
      github: 'https://github.com/',
      demo: 'https://github.com/'
    },
    {
      title: 'Project Two',
      img: './assets/project-2.png',
      github: 'https://github.com/',
      demo: 'https://github.com/'
    },
    {
      title: 'Project Three',
      img: './assets/project-3.png',
      github: 'https://github.com/',
      demo: 'https://github.com/'
    }
  ]

  projects.forEach((project) => {
    const detailsContainer = document.createElement('div')
    detailsContainer.className = 'details-container color-container'

    const articleContainer = document.createElement('div')
    articleContainer.className = 'article-container'

    const img = document.createElement('img')
    img.src = project.img
    img.alt = project.title
    img.className = 'project-img'

    articleContainer.appendChild(img)

    const h2 = document.createElement('h2')
    h2.className = 'experience-sub-title project-title'
    h2.textContent = project.title

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btn-container'

    // Crear botones reutilizables
    const btnGithub = createButton('Github', 'btn-color-2', () => {
      location.href = project.github
    })

    const btnDemo = createButton('Live Demo', 'btn-color-2', () => {
      location.href = project.demo
    })

    btnContainer.appendChild(btnGithub)
    btnContainer.appendChild(btnDemo)

    detailsContainer.appendChild(articleContainer)
    detailsContainer.appendChild(h2)
    detailsContainer.appendChild(btnContainer)

    projectDetails.appendChild(detailsContainer)
  })

  section.appendChild(p)
  section.appendChild(h1)
  section.appendChild(projectDetails)

  return section
}
