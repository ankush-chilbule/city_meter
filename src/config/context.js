import React,{Component} from 'react'

import csvToJson from 'convert-csv-to-json'
import csv from 'csvtojson'
const Context = React.createContext()

export class Provider extends Component{
   
    state={
        name:"Rahul",
        current:'hospital',
        aqi:[{"Diseases\/Syndromes":"Viral Hepatitis","2012":48,"2013":113,"2014":131,"2015":139,"2016":205,"2017":145,"2018":126},{"Diseases\/Syndromes":"Enteric Fever ","2012":39,"2013":75,"2014":138,"2015":129,"2016":200,"2017":166,"2018":70},{"Diseases\/Syndromes":"Malaria","2012":94,"2013":80,"2014":47,"2015":22,"2016":14,"2017":9,"2018":2},{"Diseases\/Syndromes":"Dengue \/ DHF \/ DSS (Suspected)","2012":15,"2013":87,"2014":401,"2015":1259,"2016":3049,"2017":6390,"2018":2943},{"Diseases\/Syndromes":"Chikungunya","2012":29,"2013":8,"2014":3,"2015":66,"2016":2481,"2017":951,"2018":378},{"Diseases\/Syndromes":"Acute Encephalitis Syndrome ( J E)","2012":12,"2013":41,"2014":33,"2015":0,"2016":1,"2017":0,"2018":0},{"Diseases\/Syndromes":"Meningitis","2012":9,"2013":5,"2014":18,"2015":0,"2016":0,"2017":1,"2018":0},{"Diseases\/Syndromes":"Measles","2012":7,"2013":9,"2014":36,"2015":35,"2016":21,"2017":36,"2018":5},{"Diseases\/Syndromes":"Diphtheria","2012":2,"2013":2,"2014":0,"2015":0,"2016":0,"2017":0,"2018":0},{"Diseases\/Syndromes":"Pertussis","2012":1,"2013":2,"2014":0,"2015":0,"2016":0,"2017":0,"2018":0},{"Diseases\/Syndromes":"Fever of Unknown Origin      [ PUO ] ","2012":11251,"2013":13597,"2014":23615,"2015":1837,"2016":943,"2017":992,"2018":973},{"Diseases\/Syndromes":"Acute Respiratory Infection [ ARI ] \/ Influenza Like illness [ ILI ] ","2012":7621,"2013":14341,"2014":18182,"2015":6601,"2016":3709,"2017":2973,"2018":592},{"Diseases\/Syndromes":"Pneumonia","2012":93,"2013":302,"2014":201,"2015":108,"2016":5,"2017":19,"2018":2},{"Diseases\/Syndromes":"Leptospirosis","2012":0,"2013":3,"2014":6,"2015":1,"2016":4,"2017":14,"2018":5},{"Diseases\/Syndromes":"Acute Flaccid Paralysis  < 15 Years of Age ","2012":4,"2013":8,"2014":5,"2015":0,"2016":0,"2017":2,"2018":0},{"Diseases\/Syndromes":"Any other State Specific Disease [ Specify ] ","2012":153,"2013":132,"2014":236,"2015":22,"2016":11,"2017":12,"2018":15},{"Diseases\/Syndromes":"Unusual Syndromes NOT Captured Abore  [ Specify clinical diagnosis] ","2012":1101,"2013":1532,"2014":2991,"2015":1189,"2016":1011,"2017":556,"2018":415},{"Diseases\/Syndromes":"Total New OPD attendance [ Not to be filled up when data collected for indoor cases ] ","2012":85231,"2013":102254,"2014":202896,"2015":405706,"2016":771288,"2017":901627,"2018":110576},{"Diseases\/Syndromes":"Action taken in brief if unusual increase noticed in cases \/ deaths for any of the above diseases  ","2012":0,"2013":0,"2014":0,"2015":0,"2016":0,"2017":0,"2018":0},{"Diseases\/Syndromes":"Cholera ","2012":7,"2013":22,"2014":7,"2015":1,"2016":10,"2017":1,"2018":0}],
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
        aqi:[{},{}]
        }

    }

    componentDidMount(){
        // console.log(csvToJson.getJsonFromCsv('./data/City-positive-data.csv'))
     
        fetch('./data/Aqi-data.json')
        .then((res)=>{
            console.log(res.json())
        })
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