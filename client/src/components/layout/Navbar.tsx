import React from 'react'

export const Navbar = () => {

  const handleThemeChange = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme')
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='px-16 my-5 flex'>
        <h4>Architect Vectors</h4>
        <button onClick={handleThemeChange}>Mode</button>
    </div>
  )
}
