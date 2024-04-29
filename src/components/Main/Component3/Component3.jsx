import s from "./Component3.module.css";
import pathImg from "../../../../src/img/clouds.png";

const dayItem = [{}, {}, {}, {}, {}];

const Component3 = () => {
  return (
    <div className={s.component3}>
      <h3 className={s.title}>5 Days Forecast:</h3>
      <ul className={s.day_lists}>
        {dayItem.map((item) => (
            <li className={s.day_item}>
            <a className={s.day_link}>
              <img className={s.icon} src={pathImg} alt="" />
              <p className={s.temperature}>20°C</p>
              <p className={s.date}>Friday, 1 Sep</p>
            </a>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Component3;
