import { createNav } from './components/Header.js'
import { createProfileSection } from './components/Profile.js'
import { createAboutSection } from './components/About.js'
import { createExperienceSection } from './components/Experience.js'
import { createProjectsSection } from './components/Projects.js'
import { createContactSection } from './components/Contact.js'
import { createFooter } from './components/Footer.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')

  const { navDesktop, navHamburger } = createNav()
  app.appendChild(navDesktop)
  app.appendChild(navHamburger)

  app.appendChild(createProfileSection())
  app.appendChild(createAboutSection())
  app.appendChild(createExperienceSection())
  app.appendChild(createProjectsSection())
  app.appendChild(createContactSection())
  app.appendChild(createFooter())
})
