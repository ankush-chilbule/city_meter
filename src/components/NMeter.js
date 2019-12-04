import React,{useContext} from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Context from '../config/context'

import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
export default ({data,label,mkey})=>{

    const {clickHandler,meter,seekbarChangeHandler} = useContext(Context)
    const curr = meter[mkey]
    return(
        <div className="meter" onClick={clickHandler} data-key={mkey}>
            <h3>
                {label}
            </h3>
            <ReactSpeedometer
                    width={200}
                    height={200}
                    minValue={0}
                    maxValue={10}
                    customSegmentStops={[0, 3, 7,  10]}
                    segmentColors={["#1d9421", "gold", "#DF2727"]}
                    value={data}
                    needleColor={"#242325"}
                    needleHeightRatio={0.8}
            />
             <div className="mySlider">
             <Slider min={0} max={10}  value={meter[mkey]} marks={{ 0: 0, 10: 10 }} onChange={value=>seekbarChangeHandler(value,mkey)}/>
             <article>
                <p>Current Value {meter[mkey]}</p>
            <p>Require Value 123</p>
                </article>
            </div>
            <input type="hidden" value={mkey} onClick={clickHandler}/>
        </div>
    )
}