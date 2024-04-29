import s from './BtnLocation.module.css'
import pathIcon from '../../../img/symbol-defs.svg'


const BtnLocation = () => {
    return(
        <button className={s.btn_location}>
            <svg className={s.icon_location}>
                <use href={`${pathIcon}#icon-location`}/>
            </svg>
            <span>Current Location</span>
        </button>
    )
}

export default BtnLocation