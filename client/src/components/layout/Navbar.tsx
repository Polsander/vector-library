import logo from "../../assets/logo.svg";
import { TbSunMoon } from "react-icons/tb";

export const Navbar = () => {

  const handleThemeChange = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme')
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <nav className='px-16 py-5 flex bg-bg grid grid-cols-2 border-b-1 border-faded items-center'>
      <h4 className='font-bold grid-row text-text flex items-center text-2xl'><img className='h-[3em] w-[3em] pr-2' src={logo}/>Vector Architect</h4>
      <div className='flex justify-end'>
        <button className='' onClick={handleThemeChange}><TbSunMoon className='w-5 h-5'/></button>
      </div>
    </nav>
  )
}
