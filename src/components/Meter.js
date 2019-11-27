import React,{useContext} from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Context from '../config/context'
export default ({data,label,mkey})=>{

    const {clickHandler} = useContext(Context)
    return(
        <div className="meter" onClick={clickHandler} data-key={mkey}>
            <h3>
                {label}
            </h3>
            <ReactSpeedometer
                    width={200}
                    height={200}
                    customSegmentStops={[0, 500, 750, 900, 1000]}
                    segmentColors={["firebrick", "tomato", "gold", "limegreen"]}
                    value={data}
            />
            <input type="hidden" value={mkey} onClick={clickHandler}/>
        </div>
    )
}