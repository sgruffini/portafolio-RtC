import './Button.css'

export function createButton(text, className, onClick) {
  const button = document.createElement('button')
  button.className = `btn ${className}`
  button.textContent = text
  button.onclick = onClick

  return button
}
