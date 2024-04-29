import './Main.css'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Componen2'
import Component3 from './Component3/Component3'
import Component4 from './Component4/Component4'
import { useSelector } from 'react-redux'



const Main = () => {

    const weatherState = useSelector(state => state.currentWeatherSliceReduser.weather)
    // console.log(weatherState);
    return(
        <div className="main">
            <Component1 />
            <Component2 {...weatherState.main} />
            <Component3 />
            <Component4 />
        </div>
    )
}

export default Main