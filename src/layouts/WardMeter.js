import React from 'react'
import Meter from '../components/Meter'
export default ()=>{
    return(
        <div className="ward_meter">

            <section className="jugad">
            <div className="wardSelector">
            <select>
                <option>
                    Aundh-Baner
                 </option> 
                 <option>
                    Ghole Road
                 </option> 
                 <option>
                    Kothrud
                 </option> 
                   
            </select>
            </div>
            <Meter
            data={4.14}
            label={"Ward Meter"}
            />
            </section>
            <section className="sub_meters">
                <div className="positive_meter">
                <Meter
            data={5.8}
            label={"SWM"}
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
                <Meter
            data={2.0}
            label={"AQI"}
            mkey={"aqi"}
            /><Meter
            data={2}
            label={"Complaints"}
            mkey={"complaint"}
            
            />
                </div>
            </section>
        </div>
    )
}