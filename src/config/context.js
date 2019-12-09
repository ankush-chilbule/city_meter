import React,{Component} from 'react'
import ReactDOM from 'react-dom' 
import csvToJson from 'convert-csv-to-json'
import csv from 'csvtojson'
import axios from 'axios'
import {hospital_function,tree_function,swm_function,complaint_function,aqi_function} from './meterFunctions'
const Context = React.createContext()

export class Provider extends Component{
   
    constructor(props){
        super(props)

        this.mainRef = React.createRef()
    }
    state=
    {
        name:"Rahul",
        slider:{
            main:0,
            aqi:106,
            swm:0,
            complaint:13000,
            tree:0,
            hospital:0 
        },
        meter:{
            main:0,
            aqi:2,
            swm:7.9,
            complaint:4.86,
            tree:6,
            hospital:0.19
        },
        current:'swm',
        aqi:[{"Wards":"Aundh-Baner","AQI":0.042248,"status":"unhealthy for sensitive groups"},{"Wards":"Kothrud-Bawdhan","AQI":0.042820278,"status":"unhealthy for sensitive groups"},{"Wards":"Ghole Road","AQI":0.04064,"status":"unhealthy for sensitive groups"},{"Wards":"Warje-Karvenagar","AQI":0.044217323,"status":"unhealthy for sensitive groups"}],
        complaint:[{"Wards":"Aundh-Baner","2017":3450,"2018":4857,"Percent increase":17.350884,"Index":1.7350884},{"Wards":"Ghole Road","2017":2139,"2018":3401,"Percent increase":22.533062,"Index":2.2533062},{"Wards":"Kothrud-Bawdhan","2017":2057,"2018":2322,"Percent increase":7.315185,"Index":0.7315185},{"Wards":"Warje-Karvenagar","2017":1372,"2018":3046,"Percent increase":34.400483,"Index":3.4400483}],
        swm:[{"Wards":"Aundh-Baner","door to door collection percentage":2.992,"gate to gate collection  percentage":2.992,"total waste collected in tons":86.4,"total waste generated in tons":100.8,"Positive\/Negative Index":-14.28571429,"Normalized":7.320020299},{"Wards":"Kothrud-Bawdhan","door to door collection percentage":435.0,"gate to gate collection percentage":435.0,"total waste collected in tons":74.5,"total waste generated in tons":100.0,"Positive\/Negative Index":-25.5,"Normalized":4.821776721},{"Wards":"Ghole Road","door to door collection percentage":13317.0,"gate to gate collection percentage":7641,"total waste collected in tons":75.1,"total waste generated in tons":101.6,"Positive\/Negative Index":-7.00599385,"Normalized":4.159561234},{"Wards":"Warje-Karvenagar","door to door collection percentage":16607.37,"gate to gate collection percentage":2286.9205,"total waste collected in tons":67.6,"total waste generated in tons":94.67,"Positive\/Negative Index":-28.59406359,"Normalized":4.132501926}],
        hospital:[{"Wards":"Aundh-Baner","Number of Beds in facility type":1146,"Total Population":181124,"No_Required_bed":60372,"Percent":0.189823097,"Index":-98.10176903},{"Wards":"Ghole Road","Number of Beds in facility type":2709,"Total Population":433635,"No_Required_bed":144537,"Percent":0.187426057,"Index":-98.12573943},{"Wards":"Kothrud-Bawdhan","Number of Beds in facility type":1518,"Total Population":209331,"No_Required_bed":69776,"Percent":0.217553313,"Index":-97.82446687},{"Wards":"Warje-Karvenagar","Number of Beds in facility type":1312,"Total Population":233399,"No_Required_bed":77795,"Percent":0.168648371,"Index":-98.31351629}],
        nObj:null,
        isGraph:false,
        tree:[{"Wards":"Aundh-Baner","Tree Count":280564,"Total Population":181124,"Required Trees":90562.0,"Index":209.8032287,"Normalized Values":4.312176228},{"Wards":"Kothrud-Bawdhan","Tree Count":185265,"Total Population":209331,"Required Trees":104665.5,"Index":77.00675008,"Normalized Values":2.4327616},{"Wards":"Ghole Road","Tree Count":30387,"Total Population":30387,"Required Trees":216817.5,"Index":611.6959016,"Normalized Values":10.0},{"Wards":"Warje-Karvenagar","Tree Count":101481,"Total Population":233399,"Required Trees":116699.5,"Index":-13.04075853,"Normalized Values":1.158355783}],
        graph:{
            tree:[{'Tree Count':[280564,185265,862184,101481]},{'Required Trees':[90562,104665,121145,116699]}],
        swm:[{'total waste collected in tons':[86.4,74.5,71.61,67.6]},{'total waste generated in tons':[100.8,100,84.2,94.6]}],
        complaint:[{'2017':[3450,2139,2057,1372]},{'2018':[4857,3401,2322,3046]}],
        hospital:[{'Number of Beds in facility type':[1146,2709,1518,1312]},{'No_Required_bed':[60372,144537,69776,77795]}],
        aqi:[{},{}]
        },
        mainRef:this.mainRef,
        rd:{
    "Full_hospital": [
        {
            "Percent": 0.189823096799841,
            "Wards": "Aundh-Baner",
            "Total Population": 181124,
            "Unnamed: 0": 821,
            "No_Required_bed": 60372,
            "Number of Beds in facility type": 1146,
            "Ratio": -98.1017690320016
        },
        {
            "Percent": 0.18742605699578654,
            "Wards": "Ghole Road",
            "Total Population": 433635,
            "Unnamed: 0": 42536,
            "No_Required_bed": 144537,
            "Number of Beds in facility type": 2709,
            "Ratio": -98.12573943004213
        },
        {
            "Percent": 0.21755331346021556,
            "Wards": "Kothrud-Bawdhan",
            "Total Population": 209331,
            "Unnamed: 0": 20541,
            "No_Required_bed": 69776,
            "Number of Beds in facility type": 1518,
            "Ratio": -97.82446686539784
        },
        {
            "Percent": 0.16864837071791247,
            "Wards": "Warje-Karvenagar",
            "Total Population": 233399,
            "Unnamed: 0": 55914,
            "No_Required_bed": 77795,
            "Number of Beds in facility type": 1312,
            "Ratio": -98.31351629282088
        }
    ],
    "Full_Aqi": {
        "status": [
            "unhealthy for sensitive groups",
            "unhealthy for sensitive groups",
            "unhealthy for sensitive groups",
            "unhealthy for sensitive groups"
        ],
        "AQI": [
            105.62,
            107.0506958250497,
            101.6,
            110.54330708661418
        ]
    },
    "graph": {
        "disease1": {
            "0": {
                "name": "Top 5 diseases",
                "description": "Graph shows count of top 5 disease",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": {
                            "2018": [
                                2,
                                2943,
                                378,
                                70
                            ],
                            "Diseases/Syndromes": [
                                "Malaria",
                                "Dengue / DHF / DSS (Suspected)",
                                "Chikungunya",
                                "Enteric Fever "
                            ],
                            "2014": [
                                47,
                                401,
                                3,
                                138
                            ],
                            "2013": [
                                80,
                                87,
                                8,
                                75
                            ],
                            "2016": [
                                14,
                                3049,
                                2481,
                                200
                            ],
                            "2012": [
                                94,
                                15,
                                29,
                                39
                            ],
                            "2017": [
                                9,
                                6390,
                                951,
                                166
                            ],
                            "2015": [
                                22,
                                1259,
                                66,
                                129
                            ]
                        },
                        "label": "Year wise count of reported patients"
                    }
                ]
            }
        },
        "finance": {
            "0": {
                "name": "Area under slum",
                "description": "Area occupied by slum in each ward",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            27.3,
                            47.5,
                            51.2,
                            71.9,
                            85.9,
                            33.4,
                            54.22
                        ],
                        "label": "Slum Area"
                    }
                ]
            },
            "1": {
                "name": "Population of slum",
                "description": "ward-wise total population of slum ",
                "data": [
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            41475,
                            81045,
                            72040,
                            84465,
                            116390,
                            70900,
                            83595
                        ],
                        "label": "Slum Population"
                    }
                ]
            },
            "2": {
                "name": "Property tax collection",
                "description": "ward-wise total property tax collection",
                "data": [
                    {
                        "backgroundColor": "# 000066",
                        "data": [
                            1170817768,
                            787404899,
                            722554612,
                            1590802630,
                            367410040,
                            442018725,
                            683405235
                        ],
                        "label": "Property Tax Collection"
                    }
                ]
            }
        },
        "disease": {
            "0": {
                "name": "Diseases",
                "description": "Graph shows count of top 5 disease",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            105717,
                            132613,
                            248946,
                            417115,
                            782952,
                            913894,
                            116102
                        ],
                        "label": "Year wise count of reported patients"
                    }
                ]
            }
        },
        "aqi": {
            "0": {
                "name": "Wardwise AQI",
                "description": "AQI values for each ward",
                "data": [
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            105.62,
                            101.6,
                            110.54330708661418,
                            107.0506958250497
                        ],
                        "label": "AQI"
                    }
                ]
            }
        },
        "tree": {
            "0": {
                "name": "Analysis of Trees vs Required Trees",
                "description": "The required number of trees in each ward is calculated by considering the fact that a family of four people require minimum of two mature trees. ",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            280564,
                            30387,
                            185265,
                            101481
                        ],
                        "label": "Tree Count"
                    },
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            90562.0,
                            216817.5,
                            104665.5,
                            116699.5
                        ],
                        "label": "Required Trees"
                    }
                ]
            },
            "1": {
                "name": "Analysis of Population vs Required Trees",
                "description": "Population vs required trees",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            181124,
                            433635,
                            209331,
                            233399
                        ],
                        "label": "Total Population"
                    },
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            90562.0,
                            216817.5,
                            104665.5,
                            116699.5
                        ],
                        "label": "Required Trees"
                    }
                ]
            },
            "2": {
                "name": "Analysis of condition of Trees",
                "description": "condition of trees",
                "data": [
                    {
                        "backgroundColor": "#6B717E",
                        "data": [
                            981,
                            178,
                            433,
                            369
                        ],
                        "label": "Dead"
                    },
                    {
                        "backgroundColor": "#8FB339",
                        "data": [
                            280564,
                            30387,
                            185265,
                            101481
                        ],
                        "label": "Healthy"
                    },
                    {
                        "backgroundColor": "#E0CA3C",
                        "data": [
                            683,
                            61,
                            45,
                            82
                        ],
                        "label": "Poor"
                    },
                    {
                        "backgroundColor": "#F34213",
                        "data": [
                            4342,
                            606,
                            2087,
                            979
                        ],
                        "label": "Average"
                    }
                ]
            }
        },
        "complaint": {
            "1": {
                "name": "Complaints Data Inrease/Decrease",
                "description": "The graph showing increase/decrease of complaints in 2018 relative to 2017",
                "data": [
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            4.1986860441966956,
                            5.817465528562049,
                            1.5785077951002227,
                            10.488029465930019
                        ],
                        "label": "Complaints Index"
                    }
                ]
            },
            "2": {
                "name": "Top 5 Complaints Categories",
                "description": "",
                "data": [
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            4.1986860441966956,
                            5.817465528562049,
                            1.5785077951002227,
                            10.488029465930019
                        ],
                        "label": "Complaints Index"
                    }
                ]
            },
            "0": {
                "name": "Complaints Data 2017 vs 2018",
                "description": "Complaints Data 2017 vs 2018",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            5023,
                            3046,
                            3592,
                            2172
                        ],
                        "label": "Complaints in 2017"
                    },
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            7132,
                            4818,
                            4159,
                            4450
                        ],
                        "label": "Complaints in 2018"
                    }
                ]
            }
        },
        "swm": {
            "0": {
                "name": "Total Waste Generated vs Total Waste Collected",
                "description": "Graph shows total generated waste and collected waste for each ward",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            100.80000000000001,
                            101.6,
                            100.0,
                            94.67
                        ],
                        "label": "Total Waste Generated (In tons)"
                    },
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            86.4,
                            75.1,
                            74.5,
                            67.6
                        ],
                        "label": "Total Waste Collected (In tons)"
                    }
                ]
            }
        },
        "hospital": {
            "1": {
                "name": "Total Population Vs Number of Required_bed ",
                "description": "The number of required beds is calculated on the basis of the population and the WHO standard. The graph shows the total population vs number of beds required.",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            1146,
                            2709,
                            1518,
                            1312
                        ],
                        "label": "No_Required_bed"
                    },
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            181124,
                            433635,
                            209331,
                            233399
                        ],
                        "label": "Total Population"
                    }
                ]
            },
            "0": {
                "name": "Number of Beds in Facility vs Number of Required Beds",
                "description": "Number of beds availabel in facility is validated",
                "data": [
                    {
                        "backgroundColor": "#FF5964",
                        "data": [
                            1146,
                            2709,
                            1518,
                            1312
                        ],
                        "label": "Number of Beds in facility type"
                    },
                    {
                        "backgroundColor": "#51A3A3",
                        "data": [
                            60372,
                            144537,
                            69776,
                            77795
                        ],
                        "label": "No_Required_bed"
                    }
                ]
            }
        }
    },
    "Full_SWM": [
        {
            "Percent": 8.571428571428571,
            "Wards": "Aundh-Baner",
            "Normalized": 7.320020298720358,
            "gate_to_gate_collection_percentage": 2.992,
            "door_to_door_collection_percentage": 2.992,
            "total_waste_collected_in_tons": 86.4,
            "total_waste_generated_in_tons": 100.80000000000001
        },
        {
            "Percent": 7.391732283464567,
            "Wards": "Ghole Road",
            "Normalized": 4.691971798591251,
            "gate_to_gate_collection_percentage": 7641.6,
            "door_to_door_collection_percentage": 13317.05,
            "total_waste_collected_in_tons": 75.1,
            "total_waste_generated_in_tons": 101.6
        },
        {
            "Percent": 7.45,
            "Wards": "Kothrud-Bawdhan",
            "Normalized": 4.821776720933741,
            "gate_to_gate_collection_percentage": 435.0,
            "door_to_door_collection_percentage": 435.0,
            "total_waste_collected_in_tons": 74.5,
            "total_waste_generated_in_tons": 100.0
        },
        {
            "Percent": 7.140593641068975,
            "Wards": "Warje-Karvenagar",
            "Normalized": 4.132501925534962,
            "gate_to_gate_collection_percentage": 2286.9205,
            "door_to_door_collection_percentage": 16607.37,
            "total_waste_collected_in_tons": 67.6,
            "total_waste_generated_in_tons": 94.67
        }
    ],
    "Full_Tree": [
        {
            "Wards": "Bhavani Peth",
            "Total Population": 192932,
            "Required Trees": 96466.0,
            "Normalized Values": 0.0,
            "Ratio": -9.48883544461261,
            "Tree Count": 4931
        },
        {
            "Wards": "Ghole Road",
            "Total Population": 433635,
            "Required Trees": 216817.5,
            "Normalized Values": 0.12600573810834037,
            "Ratio": -8.598498737417414,
            "Tree Count": 30387
        },
        {
            "Wards": "Kothrud-Bawdhan",
            "Total Population": 209331,
            "Required Trees": 104665.5,
            "Normalized Values": 2.432761599896205,
            "Ratio": 7.700675007523969,
            "Tree Count": 185265
        },
        {
            "Wards": "Warje-Karvenagar",
            "Total Population": 233399,
            "Required Trees": 116699.5,
            "Normalized Values": 1.1583557829904296,
            "Ratio": -1.3040758529385301,
            "Tree Count": 101481
        }
    ],
    "meter": {
        "slum_population": {
            "name": "Population of Slum",
            "description": "Graph describes the total population living in slum from each ward. ",
            "data": 3.606314316969238
        },
        "disease": {
            "name": "City Health Meter",
            "description": "Count of Disease play an important role to decide the actual health of the ",
            "data": -7.863682080152678
        },
        "slum_area": {
            "name": "Area Under Slum",
            "description": "Graph depicts the area occupied by slum in each ward. ",
            "data": 0.2890446858164513
        },
        "property_tax": {
            "name": "Property tax collection",
            "description": "This graphs shows the total property tax collected from each ward.",
            "data": 4.088787613147621
        },
        "aqi": {
            "name": "Air Quality Index",
            "description": "The AQI of a city determines how healthy or harmful the environment is for the citizens. The AQI is based on measurement of particulate matter (PM2.5 and PM10), Ozone (O3), Nitrogen Dioxide (NO2), Sulphur Dioxide (SO2) and Carbon Monoxide (CO) emissions. Public health risks increase as the AQI rises. The graph below shows the AQI on ward level.",
            "data": 2.124070014558319
        },
        "tree": {
            "name": "Tree",
            "description": "The trees play a very crucial role in determining the health of the city. According to a fact, for a family of four people there should be two mature trees. The number of mature trees in Pune is counted by taking into consideration girth, height and condition of the tree and thereby calculating the amount of oxygen produced by it. The graph shows the required tree count per ward and the actual count.",
            "data": 6.023845573306574
        },
        "complaint": {
            "name": "Complaint",
            "description": " The increase or decrease in citizen grievances portraits the condition of the city. This helps the concerned authority to take relative actions to improve city condition. The graph shows the variation in the complaints  filed by the citizens on ward level.",
            "data": 4.862285838212969
        },
        "swm": {
            "name": "Solid Waste Management",
            "description": "It is observed that there is a difference between the solid waste generated in the city and the amount of waste that gets collected. This impacts on the health of the city inversely. The graph shows the amount of waste generated and collected in each ward of the city.",
            "data": 7.638438623990528
        },
        "hospital": {
            "name": "Hospital",
            "description": "According to the standard set by WHO, the minimum beds per 1000 people should be three. The graph below shows the difference between the required number of beds and the actual ones. The ward with the lowest value in the city is Aundh-Baner.",
            "data": 0.1908627094934389
        }
    },
    "Full_Complaint": {
        "Index": [
            4.1986860441966956,
            5.817465528562049,
            1.5785077951002227,
            10.488029465930019
        ],
        "2018": [
            7132,
            4818,
            4159,
            4450
        ],
        "2017": [
            5023,
            3046,
            3592,
            2172
        ]
    }
}
        ,
        handlers:{
            swm:swm_function,
            tree:tree_function,
            hospital:hospital_function,
            complaint:complaint_function,
            aqi:aqi_function
        }
        
      

    }

    componentDidMount=()=>{
        this.calculateMain()

        // axios.get('http://localhost:8000/').then((res)=>{
        //     this.setState({restData:res.data})
        //     console.log(this.state.restData)
        // }).catch((e)=>console.log(e))

        console.log(this.state.rd)

        
    }
    calculateMain=()=>{
        const {meter}=this.state
        const {swm,tree,hospital,aqi,complaint} = this.state.meter
        let temp = (swm+tree+hospital)/3-(aqi+complaint-7.86)/3
        if(temp<0){
            temp=0
        }
        else if(temp>10){
            temp=10
        }
        console.log(temp)
        meter.main = temp
        this.setState({meter:meter})
    }
   

    clickHandler=(e)=>{
       console.log(e.currentTarget.lastChild.value)
       this.setState({current:e.currentTarget.lastChild.value})
    }

    seekbarChangeHandler=(value,mkey)=>{
        console.log("value :"+value+" mkey"+mkey)
        const {meter,handlers,slider} = this.state
        console.log(handlers[mkey](value))
        meter[mkey]=handlers[mkey](value)
        slider[mkey]=value
        this.setState({meter})
        this.setState({slider})
        this.calculateMain();
    }
    resetHandler=()=>{
       const defaultMeter={
            main:0,
            aqi:2,
            swm:7.9,
            complaint:4.86,
            tree:6,
            hospital:0.19
        }
        const defaultSlider ={
            main:0,
            aqi:106,
            swm:0,
            complaint:13000,
            tree:0,
            hospital:6685 
        }
        const {swm,tree,hospital,aqi,complaint} = defaultMeter
        defaultMeter.main = (swm+tree+hospital)/3-(aqi+complaint-7.86)/3
        this.setState({meter:defaultMeter})
        this.setState({slider:defaultSlider})
    }
    toggleGraph=()=>{
        this.setState({isGraph:true})
    }
    toggleTable=()=>{
        this.setState({isGraph:false})
    }
    hospitalChangeHandler=(value,mkey)=>{
        const {meter,handlers} = this.state
        console.log(handlers["hospital"](value))
        meter[mkey]=handlers[mkey](value)
        this.setState({meter})
        this.calculateMain();
    }
    render(){
        return(
            <Context.Provider value={{
                ...this.state,
                clickHandler:this.clickHandler,
                toggleGraph:this.toggleGraph,
                toggleTable:this.toggleTable,
                seekbarChangeHandler:this.seekbarChangeHandler,
                resetHandler:this.resetHandler
                
            }}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;