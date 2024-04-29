import { useEffect, useState } from "react";
import s from "./ToggleTheme.module.css";

const ToggleTheme = () => {
    const [thema,setThema] = useState('light');

    const onChange = () => {
      setThema(thema === 'light' ? 'dark' : 'light')
  }
    
useEffect(() => {
  const root = document.querySelector(':root');
 const components = [
  'background-body',
  'background-input',
  'color-input',
  'color-toggle',
  'background-component',
  'color-component',
  'background-item',
  'gradient-text'
 ]
 components.forEach(element => {
  
  root.style.setProperty(`--${element}-default`,`var(--${element}-${thema})`)
 });
},[thema])
  return (
    <div>
      <label className={s.toggle_theme}>
        <input type="checkbox" onClick={onChange} />
        <span className={s.checked_slide}></span>
      </label>
      <h3 className={s.toggle_title}>{`${thema} Mode`}</h3>
    </div>
  );
};

export default ToggleTheme;
