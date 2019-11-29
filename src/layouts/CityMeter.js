import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Meter from '../components/Meter'
import NMeter from '../components/NMeter'

export default ()=>{
    return(
        <div className="city_meter">
            <section >
            <Meter
            data={4.14}
            label={"City Meter"}
            mkey={"nObj"}
            />
            </section>
            <section className="sub_meters">
                <div className="positive_meter">
                <Meter
            data={5.8}
            label={"Solid Waste Management"}
            mkey={"swm"}
            /><Meter
            data={4.4}
            label={"Tree Census"}
            mkey={"tree"}
            /><Meter
            data={0.19}
            label={"Hospital"}
            mkey={"hospital"}
            />

                </div>
                <div className="negative_meter">
                <NMeter
            data={2.0}
            label={"Air Quality Index"}
            mkey={"aqi"}
            /><NMeter
            data={2}
            label={"Complaints"}
            mkey={"complaint"}
            
            />
                </div>
            </section>
        </div>
    )
}