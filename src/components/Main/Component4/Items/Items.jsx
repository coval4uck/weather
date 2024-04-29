import s from "./Items.module.css";

import Item from "./Item/Item";

const test = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];


const itemStyle = {
    rotateImgSpeed: [0,-45,0,45,0],
}

const Items = () => {
  return (
    <div className={s.items}>
      {test.map((item) => <Item  rotateImgSpeed = {itemStyle.rotateImgSpeed[item.id]} />)}
    </div>
  );
};

export default Items;
