import './Experience.css'

export function createExperienceSection() {
  const section = document.createElement('section')
  section.id = 'experience'

  const p = document.createElement('p')
  p.className = 'section__text__p1'
  p.textContent = 'Explore My'

  const h1 = document.createElement('h1')
  h1.className = 'title'
  h1.textContent = 'Experience'

  const experienceDetails = document.createElement('div')
  experienceDetails.className = 'experience-details-container'

  const experienceList = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Basic' },
        { name: 'Figma', level: 'Basic' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'PostgreSQL', level: 'Basic' },
        { name: 'Node JS', level: 'Intermediate' },
        { name: 'GitHub', level: 'Intermediate' },
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

      // Buscar la imagen correspondiente a la habilidad
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
    experienceDetails.appendChild(detailsContainer)
  })

  section.appendChild(p)
  section.appendChild(h1)
  section.appendChild(experienceDetails)

  return section
}
