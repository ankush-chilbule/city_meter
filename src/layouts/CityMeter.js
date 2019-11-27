import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Meter from '../components/Meter'
export default ()=>{
    return(
        <div className="city_meter">
            <section>
            <Meter
            data={200}
            label={"City Meter"}
            />
            </section>
            <section className="sub_meters">
                <div className="positive_meter">
                <Meter
            data={200}
            label={"SWM"}
            mkey={"swm"}
            /><Meter
            data={200}
            label={"Tree Census"}
            /><Meter
            data={200}
            label={"Hospital"}
            />

                </div>
                <div className="negative_meter">
                <Meter
            data={200}
            label={"AQI"}
            /><Meter
            data={200}
            label={"Complaints"}
            />
                </div>
            </section>
        </div>
    )
}