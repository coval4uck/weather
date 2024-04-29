import s from './RightElement.module.css'
import iconSVG from "../../../../img/symbol-defs.svg";


const RightElement = () => {
  return (
    <div className={s.rightBlock}>
      <div className={s.item}>
        <svg className={s.icon}>
          <use href={`${iconSVG}#icon-humidity`} />
        </svg>
        <h4>41%</h4>
        <p>Humidity</p>
      </div>
      <div className={s.item}>
        <svg className={s.icon}>
          <use href={`${iconSVG}#icon-wind`} />
        </svg>
        <h4>2km/h</h4>
        <p>Wind Speed</p>
      </div>
      <div className={s.item}>
        <svg className={s.icon}>
          <use href={`${iconSVG}#icon-pressure`} />
        </svg>
        <h4>997hPa</h4>
        <p>Pressure</p>
      </div>
      <div className={s.item}>
        <svg className={s.icon}>
          <use href={`${iconSVG}#icon-uv`} />
        </svg>
        <h4>8</h4>
        <p>UV</p>
      </div>
    </div>
  )
}

export default RightElement
