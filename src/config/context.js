import React,{Component} from 'react'
import ReactDOM from 'react-dom' 
import csvToJson from 'convert-csv-to-json'
import csv from 'csvtojson'
const Context = React.createContext()

export class Provider extends Component{
   
    constructor(props){
        super(props)

        this.mainRef = React.createRef()
    }
    state={
        name:"Rahul",
        current:'swm',
        aqi:[{"Wards":"Aundh-Baner","AQI":0.042248,"status":"unhealthy for sensitive groups"},{"Wards":"Kothrud-Bawdhan","AQI":0.042820278,"status":"unhealthy for sensitive groups"},{"Wards":"Tilak Road","AQI":0.04064,"status":"unhealthy for sensitive groups"},{"Wards":"Warje-Karvenagar","AQI":0.044217323,"status":"unhealthy for sensitive groups"}],
        complaint:[{"Wards":"Aundh-Baner","2017":3450,"2018":4857,"Percent increase":17.350884,"Index":1.7350884},{"Wards":"Ghole Road","2017":2139,"2018":3401,"Percent increase":22.533062,"Index":2.2533062},{"Wards":"Kothrud-Bawdhan","2017":2057,"2018":2322,"Percent increase":7.315185,"Index":0.7315185},{"Wards":"Warje-Karvenagar","2017":1372,"2018":3046,"Percent increase":34.400483,"Index":3.4400483}],
        swm:[{"Wards":"Aundh-Baner","door_to_door_collection_percentage":2.992,"gate_to_gate_collection_percentage":2.992,"total_waste_collected_in_tons":86.4,"total_waste_generated_in_tons":100.8,"Positive\/Negative Index":-14.28571429,"Normalized":7.320020299},{"Wards":"Kothrud-Bawdhan","door_to_door_collection_percentage":435.0,"gate_to_gate_collection_percentage":435.0,"total_waste_collected_in_tons":74.5,"total_waste_generated_in_tons":100.0,"Positive\/Negative Index":-25.5,"Normalized":4.821776721},{"Wards":"Tilak Road","door_to_door_collection_percentage":143.0,"gate_to_gate_collection_percentage":178.0,"total_waste_collected_in_tons":71.61,"total_waste_generated_in_tons":84.253,"Positive\/Negative Index":-15.00599385,"Normalized":7.159561234},{"Wards":"Warje-Karvenagar","door_to_door_collection_percentage":16607.37,"gate_to_gate_collection_percentage":2286.9205,"total_waste_collected_in_tons":67.6,"total_waste_generated_in_tons":94.67,"Positive\/Negative Index":-28.59406359,"Normalized":4.132501926}],
        hospital:[{"Wards":"Aundh-Baner","Number of Beds in facility type":1146,"Total Population":181124,"No_Required_bed":60372,"Percent":0.189823097,"Index":-98.10176903},{"Wards":"Tilak Road","Number of Beds in facility type":2709,"Total Population":433635,"No_Required_bed":144537,"Percent":0.187426057,"Index":-98.12573943},{"Wards":"Kothrud-Bawdhan","Number of Beds in facility type":1518,"Total Population":209331,"No_Required_bed":69776,"Percent":0.217553313,"Index":-97.82446687},{"Wards":"Warje-Karvenagar","Number of Beds in facility type":1312,"Total Population":233399,"No_Required_bed":77795,"Percent":0.168648371,"Index":-98.31351629}],
        nObj:null,
        isGraph:false,
        tree:[{"Wards":"Aundh-Baner","Tree Count":280564,"Total Population":181124,"Required Trees":90562.0,"Index":209.8032287,"Normalized Values":4.312176228},{"Wards":"Kothrud-Bawdhan","Tree Count":185265,"Total Population":209331,"Required Trees":104665.5,"Index":77.00675008,"Normalized Values":2.4327616},{"Wards":"Tilak Road","Tree Count":862184,"Total Population":242290,"Required Trees":121145.0,"Index":611.6959016,"Normalized Values":10.0},{"Wards":"Warje-Karvenagar","Tree Count":101481,"Total Population":233399,"Required Trees":116699.5,"Index":-13.04075853,"Normalized Values":1.158355783}],
        graph:{
            tree:[{'Tree Count':[280564,185265,862184,101481]},{'Required Trees':[90562,104665,121145,116699]}],
        swm:[{'total_waste_collected_in_tons':[86.4,74.5,71.61,67.6]},{'total_waste_generated_in_tons':[100.8,100,84.2,94.6]}],
        complaint:[{'2017':[3450,2139,2057,1372]},{'2018':[4857,3401,2322,3046]}],
        hospital:[{'Number of Beds in facility type':[1146,2709,1518,1312]},{'No_Required_bed':[60372,144537,69776,77795]}],
        aqi:[{},{}],
        mainRef:this.mainRef
        }

    }

   

    clickHandler=(e)=>{
       console.log(e.currentTarget.lastChild.value)
       this.setState({current:e.currentTarget.lastChild.value})
    }

    toggleGraph=()=>{
        this.setState({isGraph:true})
    }
    toggleTable=()=>{
        this.setState({isGraph:false})
    }
    render(){
        return(
            <Context.Provider value={{
                ...this.state,
                clickHandler:this.clickHandler,
                toggleGraph:this.toggleGraph,
                toggleTable:this.toggleTable
            }}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;