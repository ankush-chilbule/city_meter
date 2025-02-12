import React,{useContext} from 'react'

import ReactSpeedometer from "react-d3-speedometer"
import Meter from '../components/Meter'
import NMeter from '../components/NMeter'
import PMeter from '../components/PMeter'
import TreeMeter from '../components/TreeMeter'
import SWMMeter from '../components/SWMMeter'
import Context from '../config/context'
import TitleBar from '../containers/TitleBar'
export default ()=>{
    const {meter,resetHandler} = useContext(Context)
    return(
        <div className="city_meter">
            <TitleBar 
            title={"City Health Meter"}
            tagLine={"Key Performance Indicator Of The Health Of Your City"}
            />
            <section className="main">
            <Meter
            data={meter["main"]}
            label={"City Health Meter"}
            
            mkey={"swm"}
           
            />
             <div className="legend">
                <table>
                    <tr>
                        <td><div className="red_box"></div></td>
                        <td><p>Poor</p></td>
                        
                    </tr>
                    <tr>
                    <td><div className="yellow_box"></div></td>
                        <td><p>Average</p></td>
                    </tr>
                    <tr>
                    <td><div className="green_box"></div></td>
                        <td><p>Good</p></td>
                    </tr>
                </table>

            </div>
            <div className="mySlider">
                <button className="reset" onClick={resetHandler}>
                    reset
                 </button>   
            </div>
            </section>
            <section className="sub_meters">
                <div className="positive_meter">
                <SWMMeter
            data={meter["swm"]}
            label={"Waste Management"}
            mkey={"swm"}
            sliderMin={0}
            sliderMax={80}
            hint={"Change Collected Garbage"}
            /><TreeMeter
            data={meter["tree"]}
            label={"Tree Census "}
            mkey={"tree"}
            sliderMin={0}
            sliderMax={212585}
            hint={"Change Number Of Trees"}
            /><PMeter
            data={meter["hospital"]}
            label={"Hospital"}
            mkey={"hospital"}
            sliderMin={0}
            sliderMax={570480}
            hint={"Change Beds In Hospital"}
            />

                </div>
                <div className="negative_meter">
                <NMeter
            data={meter["aqi"]}
            label={"Air Quality Index"}
            mkey={"aqi"}
            sliderMin={0}
            sliderMax={500}
            hint={"Change Air Quality"}
            /><NMeter
            data={meter["complaint"]}
            label={"Complaints"}
            mkey={"complaint"}
            sliderMin={0}
            sliderMax={20000}
            hint={"Change Number Of Complaints"}
            
            />
                </div>
            </section>
           
        </div>
    )
}