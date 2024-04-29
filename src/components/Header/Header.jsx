import BtnLocation from './BtnLocation/BtnLocation'
import s from  './Header.module.css'
import SearchCity from './SearchCity/SearchCity'
import ToggleTheme from './ToggleTheme/ToggleTheme'


const Header = () => {
    return(
        <header className={s.header}>
            <ToggleTheme />
            <SearchCity />
            <BtnLocation />
        </header>
    )
}

export default Header