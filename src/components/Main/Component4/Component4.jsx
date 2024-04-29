import s from "./Component4.module.css";
import Items from "./Items/Items";



const Component4 = () => {

  return (
    <div className={s.component4}>
      <h3 className={s.title}>Hourly Forecast:</h3>
      <div>
        <Items />
      </div>
    </div>
  );
};

export default Component4;
