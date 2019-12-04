import React,{useContext} from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Context from '../config/context'
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
  
export default ({data,label,mkey,sliderMin,sliderMax})=>{

    const {clickHandler,meter,seekbarChangeHandler} = useContext(Context)
    const myMarks = {
        sliderMin,
        sliderMax
    }
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
                    segmentColors={["#DF2727", "gold", "#1d9421"]}
                    value={data}
                    needleColor={"#242325"}
                    needleHeightRatio={0.8}
            />
            <div className="mySlider">
            <Slider min={sliderMin} max={sliderMax}  value={meter[mkey]}  onChange={value=>seekbarChangeHandler(value,mkey)}/>
                <article>
                <p>Current Value {meter[mkey]}</p>
                <p>Require Value {sliderMax}</p>
                </article>
            </div>
            <input type="hidden" value={mkey} onClick={clickHandler}/>
        </div>
    )
}