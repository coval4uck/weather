import s from './Item.module.css'
import pathImgClouds from "../../../../../img/clouds.png";
import pathImgSpeed from "../../../../../img/speed.png";

const Item = ({rotateImgSpeed}) => {
    return(
        <div className={s.item}>
            <p className={s.time}>12:00</p>
            <img src={pathImgClouds} alt="Weather img" className={s.imgWeather}/>
            <p className={s.temperature}>26°C</p>
            <img
              className={s.imgSpeed}
              style={{transform:`rotate(${rotateImgSpeed}deg)`} }
              src={pathImgSpeed}
              alt="Speed img"
            />
            <p className={s.speed}>3km/h</p>
          </div>
    )
}

export default Item