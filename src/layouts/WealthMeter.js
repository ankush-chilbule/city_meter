import React,{useContext} from 'react'
import TitleBar from '../containers/TitleBar'
import Meter from '../components/Meter'

export default ()=>{

    return(
        <div className="wealth_meter">
            <TitleBar 
            title={"City Wealth Meter"}
            tagLine={"Key Performance Indicator Of The Wealth Your City"}
            />
             <section className="main">
            <Meter
            data={4.4}
            label={"City Wealth Meter"}
            mkey={"nObj"}
            />
             {/* <div className="legend">
                <table>
                    <tr>
                        <td><div className="red_box"></div></td>
                        <td><h4>Poor</h4></td>
                        
                    </tr>
                    <tr>
                    <td><div className="yellow_box"></div></td>
                        <td><h4>Average</h4></td>
                    </tr>
                    <tr>
                    <td><div className="green_box"></div></td>
                        <td><h4>Good</h4></td>
                    </tr>
                </table>

            </div>
            <div className="mySlider">
                <button onClick={resetHandler}>
                    reset
                 </button>   
            </div> */}
            </section>
            <section className="sub_meter">
            <Meter
            data={2}
            label={"City Meter"}
            mkey={"nObj"}
            />
            <Meter
            data={3}
            label={"City Meter"}
            mkey={"nObj"}
            />
            <Meter
            data={4}
            label={"City Meter"}
            mkey={"nObj"}
            />
            </section>
        </div>
    )
}