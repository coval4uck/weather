import s from './SearchCity.module.css'
import pathIcon from '../../../img/symbol-defs.svg'



const SearchCity = () => {
    return(
        <div className={s.search}>
            <input type="text"
                placeholder='Search for your preffered city...'
                className={s.input_text}
            />
            <svg className={s.icon_search}>
                <use href={`${pathIcon}#icon-search`} />
            </svg>

        
        </div>
    )
}
 
export default SearchCity