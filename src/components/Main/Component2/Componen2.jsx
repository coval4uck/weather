import s from "./Cmponent2.module.css";
import imgPath from "../../../img/clouds.png";
import iconSVG from "../../../img/symbol-defs.svg";
import RightElement from "./RightElement/RightElement";
const Component2 = (props) => {
  console.log(props.feels_like);
  return (
    <div className={s.component2}>
      <div className={s.leftBlock}>
        <div className={s.temperature}>
          <h2>{props.temp}°C</h2>
          <p>
            <span>Feels like:</span>{props.feels_like}°C
          </p>
        </div>
        <div>
          <div className={s.info}>
            <svg className={s.icon}>
              <use href={`${iconSVG}#icon-sunrise`} />
            </svg>
            <div>
              <h4>Sunrise</h4>
              <p>06:37 AM</p>
            </div>
          </div>
          <div className={s.info}>
            <svg className={s.icon}>
              <use href={`${iconSVG}#icon-sunset`} />
            </svg>
            <div>
              <h4>Sunset</h4>
              <p>20:37 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.centerBlock}>
        <img src={imgPath} alt="" className={s.weatherImg} />
        <h3 className={s.weatherText}>Sunny</h3>
      </div>
      <RightElement />
    </div>
  );
};

export default Component2;
