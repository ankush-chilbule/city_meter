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
            complaint:5.8,
            tree:0,
            hospital:0 
        },
        meter:{
            main:0,
            aqi:2,
            swm:7.9,
            complaint:5.8,
            tree:4.4,
            hospital:0.19
        },
        current:'swm',
        aqi:[{"Wards":"Aundh-Baner","AQI":0.042248,"status":"unhealthy for sensitive groups"},{"Wards":"Kothrud-Bawdhan","AQI":0.042820278,"status":"unhealthy for sensitive groups"},{"Wards":"Tilak Road","AQI":0.04064,"status":"unhealthy for sensitive groups"},{"Wards":"Warje-Karvenagar","AQI":0.044217323,"status":"unhealthy for sensitive groups"}],
        complaint:[{"Wards":"Aundh-Baner","2017":3450,"2018":4857,"Percent increase":17.350884,"Index":1.7350884},{"Wards":"Ghole Road","2017":2139,"2018":3401,"Percent increase":22.533062,"Index":2.2533062},{"Wards":"Kothrud-Bawdhan","2017":2057,"2018":2322,"Percent increase":7.315185,"Index":0.7315185},{"Wards":"Warje-Karvenagar","2017":1372,"2018":3046,"Percent increase":34.400483,"Index":3.4400483}],
        swm:[{"Wards":"Aundh-Baner","door to door collection percentage":2.992,"gate to gate collection  percentage":2.992,"total waste collected in tons":86.4,"total waste generated in tons":100.8,"Positive\/Negative Index":-14.28571429,"Normalized":7.320020299},{"Wards":"Kothrud-Bawdhan","door to door collection percentage":435.0,"gate to gate collection percentage":435.0,"total waste collected in tons":74.5,"total waste generated in tons":100.0,"Positive\/Negative Index":-25.5,"Normalized":4.821776721},{"Wards":"Tilak Road","door to door collection percentage":143.0,"gate to gate collection percentage":178.0,"total waste collected in tons":71.61,"total waste generated in tons":84.253,"Positive\/Negative Index":-15.00599385,"Normalized":7.159561234},{"Wards":"Warje-Karvenagar","door to door collection percentage":16607.37,"gate to gate collection percentage":2286.9205,"total waste collected in tons":67.6,"total waste generated in tons":94.67,"Positive\/Negative Index":-28.59406359,"Normalized":4.132501926}],
        hospital:[{"Wards":"Aundh-Baner","Number of Beds in facility type":1146,"Total Population":181124,"No_Required_bed":60372,"Percent":0.189823097,"Index":-98.10176903},{"Wards":"Tilak Road","Number of Beds in facility type":2709,"Total Population":433635,"No_Required_bed":144537,"Percent":0.187426057,"Index":-98.12573943},{"Wards":"Kothrud-Bawdhan","Number of Beds in facility type":1518,"Total Population":209331,"No_Required_bed":69776,"Percent":0.217553313,"Index":-97.82446687},{"Wards":"Warje-Karvenagar","Number of Beds in facility type":1312,"Total Population":233399,"No_Required_bed":77795,"Percent":0.168648371,"Index":-98.31351629}],
        nObj:null,
        isGraph:false,
        tree:[{"Wards":"Aundh-Baner","Tree Count":280564,"Total Population":181124,"Required Trees":90562.0,"Index":209.8032287,"Normalized Values":4.312176228},{"Wards":"Kothrud-Bawdhan","Tree Count":185265,"Total Population":209331,"Required Trees":104665.5,"Index":77.00675008,"Normalized Values":2.4327616},{"Wards":"Tilak Road","Tree Count":862184,"Total Population":242290,"Required Trees":121145.0,"Index":611.6959016,"Normalized Values":10.0},{"Wards":"Warje-Karvenagar","Tree Count":101481,"Total Population":233399,"Required Trees":116699.5,"Index":-13.04075853,"Normalized Values":1.158355783}],
        graph:{
            tree:[{'Tree Count':[280564,185265,862184,101481]},{'Required Trees':[90562,104665,121145,116699]}],
        swm:[{'total waste collected in tons':[86.4,74.5,71.61,67.6]},{'total waste generated in tons':[100.8,100,84.2,94.6]}],
        complaint:[{'2017':[3450,2139,2057,1372]},{'2018':[4857,3401,2322,3046]}],
        hospital:[{'Number of Beds in facility type':[1146,2709,1518,1312]},{'No_Required_bed':[60372,144537,69776,77795]}],
        aqi:[{},{}]
        },
        mainRef:this.mainRef,
        rd:{
            "Full_SWM": [
                {
                    "Normalized": 7.320020298720357,
                    "total waste collected in tons": 86.4,
                    "total waste generated in tons": 100.80000000000001,
                    "door to door collection percentage": 2.992,
                    "Positive/Negative Ratio": -14.28571428571429,
                    "gate to gate collection percentage": 2.992,
                    "Wards": "Aundh-Baner"
                },
                {
                    "Normalized": 4.141080487778859,
                    "total waste collected in tons": 51.44,
                    "total waste generated in tons": 72.0,
                    "door to door collection percentage": 115.0,
                    "Positive/Negative Ratio": -28.555555555555557,
                    "gate to gate collection percentage": 100.0,
                    "Wards": "Bhavani Peth"
                },
                {
                    "Normalized": 4.216318559274287,
                    "total waste collected in tons": 58.0,
                    "total waste generated in tons": 80.8,
                    "door to door collection percentage": 290.0,
                    "Positive/Negative Ratio": -28.217821782178216,
                    "gate to gate collection percentage": 235.0,
                    "Wards": "Bibewadi"
                },
                {
                    "Normalized": 7.018093098399912,
                    "total waste collected in tons": 98.7,
                    "total waste generated in tons": 117.0,
                    "door to door collection percentage": 2.2354000000000003,
                    "Positive/Negative Ratio": -15.641025641025639,
                    "gate to gate collection percentage": 1.5605999999999998,
                    "Wards": "Dhankawadi"
                },
                {
                    "Normalized": 0.0,
                    "total waste collected in tons": 38.730000000000004,
                    "total waste generated in tons": 73.275,
                    "door to door collection percentage": 2705.49,
                    "Positive/Negative Ratio": -47.144319344933464,
                    "gate to gate collection percentage": 2268.51,
                    "Wards": "Dhole Patil Road"
                },
                {
                    "Normalized": 4.691971798591249,
                    "total waste collected in tons": 75.1,
                    "total waste generated in tons": 101.6,
                    "door to door collection percentage": 13317.05,
                    "Positive/Negative Ratio": -26.082677165354333,
                    "gate to gate collection percentage": 7641.6,
                    "Wards": "Ghole Road"
                },
                {
                    "Normalized": 2.423903536767165,
                    "total waste collected in tons": 58.0,
                    "total waste generated in tons": 91.0,
                    "door to door collection percentage": 260.0,
                    "Positive/Negative Ratio": -36.26373626373626,
                    "gate to gate collection percentage": 275.0,
                    "Wards": "Hadapsar"
                },
                {
                    "Normalized": 7.162677062518975,
                    "total waste collected in tons": 74.45,
                    "total waste generated in tons": 87.58,
                    "door to door collection percentage": 132.31,
                    "Positive/Negative Ratio": -14.99200730760447,
                    "gate to gate collection percentage": 274.15999999999997,
                    "Wards": "Kasba Peth"
                },
                {
                    "Normalized": 8.560115014556951,
                    "total waste collected in tons": 98.2,
                    "total waste generated in tons": 107.58,
                    "door to door collection percentage": 40.3765,
                    "Positive/Negative Ratio": -8.71909276817252,
                    "gate to gate collection percentage": 60.873,
                    "Wards": "Kondhwa-Wanawadi"
                },
                {
                    "Normalized": 4.821776720933741,
                    "total waste collected in tons": 74.5,
                    "total waste generated in tons": 100.0,
                    "door to door collection percentage": 435.0,
                    "Positive/Negative Ratio": -25.5,
                    "gate to gate collection percentage": 435.0,
                    "Wards": "Kothrud-Bawdhan"
                },
                {
                    "Normalized": 7.1579608616589105,
                    "total waste collected in tons": 90.29000000000002,
                    "total waste generated in tons": 106.24000000000001,
                    "door to door collection percentage": 561.0,
                    "Positive/Negative Ratio": -15.013177710843362,
                    "gate to gate collection percentage": 419.0,
                    "Wards": "Nagar Road"
                },
                {
                    "Normalized": 9.817039847316487,
                    "total waste collected in tons": 63.0,
                    "total waste generated in tons": 65.0,
                    "door to door collection percentage": 183.0,
                    "Positive/Negative Ratio": -3.076923076923077,
                    "gate to gate collection percentage": 107.0,
                    "Wards": "Sahakar Nagar"
                },
                {
                    "Normalized": 7.159561233724391,
                    "total waste collected in tons": 71.61,
                    "total waste generated in tons": 84.253,
                    "door to door collection percentage": 143.0,
                    "Positive/Negative Ratio": -15.005993851850974,
                    "gate to gate collection percentage": 178.0,
                    "Wards": "Tilak Road"
                },
                {
                    "Normalized": 4.132501925534964,
                    "total waste collected in tons": 67.6,
                    "total waste generated in tons": 94.67,
                    "door to door collection percentage": 16607.37,
                    "Positive/Negative Ratio": -28.59406358931024,
                    "gate to gate collection percentage": 2286.9205,
                    "Wards": "Warje-Karvenagar"
                },
                {
                    "Normalized": 10.000000000000002,
                    "total waste collected in tons": 65.0,
                    "total waste generated in tons": 66.5,
                    "door to door collection percentage": 2215.19,
                    "Positive/Negative Ratio": -2.2556390977443606,
                    "gate to gate collection percentage": 100.97999999999999,
                    "Wards": "Yerwada"
                }
            ],
            "Full_Aqi": {
                "status": [
                    "unhealthy for sensitive groups",
                    "unhealthy for sensitive groups",
                    "unhealthy for sensitive groups",
                    "unhealthy for sensitive groups",
                    "unhealthy for sensitive groups"
                ],
                "AQI": [
                    105.62,
                    107.0506958250497,
                    101.6,
                    110.54330708661418,
                    104.93454545454546
                ]
            },
            "meter": {
                "property_tax": {
                    "Description": "This graphs shows the total property tax collected from each ward.",
                    "data": 4.088787613147621,
                    "Name": "Property tax collection"
                },
                "tree": {
                    "Description": "The tree helps to control the pollution and thus it is considered as positive aspectFor family of 4 people we require 2 mature trees, taking this fact into considerationrequired number of tree is evaluated for each ward.",
                    "data": 4.475823402618741,
                    "Name": "Tree"
                },
                "disease": {
                    "Description": "Number of beds availabel in facility is validated",
                    "data": -7.863682080152678,
                    "Name": "Disease"
                },
                "complaint": {
                    "Description": "Count of Complaints shows how satisfied the people of city areIf the number of complaints are more then it hampers the performance of the city and that's the reason complaint data is used as negative indexThe complaint index is calculated by considering the two consecutive years data",
                    "data": 5.520672208447246,
                    "Name": "Complaint"
                },
                "aqi": {
                    "Description": "Air quality index of each ward on the basis of concentration of various pollutants. The graph depicts wardwaise air quality on basis of which the overall air quality of a city is derived.",
                    "data": 2.124070014558319,
                    "Name": "Air Quality Index"
                },
                "swm": {
                    "Description": "Solid waste management is remedy for controlling the solid waste of the city.For calculation used the total waste generated and total wastecollected data.",
                    "data": 5.858465044728363,
                    "Name": "Solid Waste Management"
                },
                "hospital": {
                    "Description": "The hospital meter is considered as positive aspect in the calculation of key permofmance index.According to the World Health Bank there shold be 3 beds per 1000 people.Considering this fact, required number of beds is calculated for each ward.And thus we evaluated the deficiency of beds for each ward.",
                    "data": 0.1908627094934389,
                    "Name": "Hospital"
                },
                "slum_population": {
                    "Description": "Graph describes the total population living in slum from each ward. ",
                    "data": 3.606314316969238,
                    "Name": "Population of Slum"
                },
                "slum_area": {
                    "Description": "Graph depicts the area occupied by slum in each ward. ",
                    "data": 0.2890446858164513,
                    "Name": "Area Under Slum"
                }
            },
            "Full_Tree": [
                {
                    "Required Trees": 90562.0,
                    "Ratio": 209.80322872728075,
                    "Total Population": 181124,
                    "Tree Count": 280564,
                    "Normalized Values": 4.3121762275883295,
                    "Wards": "Aundh-Baner"
                },
                {
                    "Required Trees": 96466.0,
                    "Ratio": -94.8883544461261,
                    "Total Population": 192932,
                    "Tree Count": 4931,
                    "Normalized Values": 0.0,
                    "Wards": "Bhavani Peth"
                },
                {
                    "Required Trees": 145723.0,
                    "Ratio": -57.012276716784584,
                    "Total Population": 291446,
                    "Tree Count": 62643,
                    "Normalized Values": 0.5360447449111203,
                    "Wards": "Bibewadi"
                },
                {
                    "Required Trees": 118324.0,
                    "Ratio": 128.99749839423956,
                    "Total Population": 236648,
                    "Tree Count": 270959,
                    "Normalized Values": 3.168565545055155,
                    "Wards": "Dhankawadi"
                },
                {
                    "Required Trees": 77706.5,
                    "Ratio": 62.553969101683904,
                    "Total Population": 155413,
                    "Tree Count": 126315,
                    "Normalized Values": 2.2282172607070296,
                    "Wards": "Dhole Patil Road"
                },
                {
                    "Required Trees": 216817.5,
                    "Ratio": -85.98498737417414,
                    "Total Population": 433635,
                    "Tree Count": 30387,
                    "Normalized Values": 0.1260057381083406,
                    "Wards": "Ghole Road"
                },
                {
                    "Required Trees": 162375.5,
                    "Ratio": 27.72247044658831,
                    "Total Population": 324751,
                    "Tree Count": 207390,
                    "Normalized Values": 1.735261206892126,
                    "Wards": "Hadapsar"
                },
                {
                    "Required Trees": 89242.0,
                    "Ratio": -92.93269984984649,
                    "Total Population": 178484,
                    "Tree Count": 6307,
                    "Normalized Values": 0.02767758522115571,
                    "Wards": "Kasba Peth"
                },
                {
                    "Required Trees": 104665.5,
                    "Ratio": 77.0067500752397,
                    "Total Population": 209331,
                    "Tree Count": 185265,
                    "Normalized Values": 2.432761599896205,
                    "Wards": "Kothrud-Bawdhan"
                },
                {
                    "Required Trees": 102720.5,
                    "Ratio": 8.502197711265035,
                    "Total Population": 205441,
                    "Tree Count": 111454,
                    "Normalized Values": 1.4632444930931905,
                    "Wards": "Sahakar Nagar"
                },
                {
                    "Required Trees": 121145.0,
                    "Ratio": 611.6959016055141,
                    "Total Population": 242290,
                    "Tree Count": 862184,
                    "Normalized Values": 10.0,
                    "Wards": "Tilak Road"
                },
                {
                    "Required Trees": 116699.5,
                    "Ratio": -13.040758529385302,
                    "Total Population": 233399,
                    "Tree Count": 101481,
                    "Normalized Values": 1.1583557829904298,
                    "Wards": "Warje-Karvenagar"
                },
                {
                    "Required Trees": 119782.0,
                    "Ratio": 59.29688934898398,
                    "Total Population": 239564,
                    "Tree Count": 190809,
                    "Normalized Values": 2.1821211338148125,
                    "Wards": "Yerwada"
                }
            ],
            "Full_hospital": [
                {
                    "Percent": 0.189823096799841,
                    "Unnamed: 0": 821,
                    "No_Required_bed": 60372,
                    "Total Population": 181124,
                    "Wards": "Aundh-Baner",
                    "Number of Beds in facility type": 1146,
                    "Ratio": -98.1017690320016
                },
                {
                    "Percent": 0.0,
                    "Unnamed: 0": 850,
                    "No_Required_bed": 64306,
                    "Total Population": 192932,
                    "Wards": "Bhavani Peth",
                    "Number of Beds in facility type": 0,
                    "Ratio": -100.0
                },
                {
                    "Percent": 0.0881157033300736,
                    "Unnamed: 0": 4006,
                    "No_Required_bed": 97145,
                    "Total Population": 291446,
                    "Wards": "Bibewadi",
                    "Number of Beds in facility type": 856,
                    "Ratio": -99.11884296669926
                },
                {
                    "Percent": 0.16853281853281854,
                    "Unnamed: 0": 4267,
                    "No_Required_bed": 51800,
                    "Total Population": 155413,
                    "Wards": "Dhole Patil Road",
                    "Number of Beds in facility type": 873,
                    "Ratio": -98.31467181467181
                },
                {
                    "Percent": 0.18742605699578654,
                    "Unnamed: 0": 42536,
                    "No_Required_bed": 144537,
                    "Total Population": 433635,
                    "Wards": "Ghole Road",
                    "Number of Beds in facility type": 2709,
                    "Ratio": -98.12573943004213
                },
                {
                    "Percent": 0.09302712290296357,
                    "Unnamed: 0": 11010,
                    "No_Required_bed": 108248,
                    "Total Population": 324751,
                    "Wards": "Hadapsar",
                    "Number of Beds in facility type": 1007,
                    "Ratio": -99.06972877097037
                },
                {
                    "Percent": 0.2336448598130841,
                    "Unnamed: 0": 26029,
                    "No_Required_bed": 59492,
                    "Total Population": 178484,
                    "Wards": "Kasba Peth",
                    "Number of Beds in facility type": 1390,
                    "Ratio": -97.66355140186917
                },
                {
                    "Percent": 0.21755331346021556,
                    "Unnamed: 0": 20541,
                    "No_Required_bed": 69776,
                    "Total Population": 209331,
                    "Wards": "Kothrud-Bawdhan",
                    "Number of Beds in facility type": 1518,
                    "Ratio": -97.82446686539784
                },
                {
                    "Percent": 0.1847335601734889,
                    "Unnamed: 0": 27636,
                    "No_Required_bed": 68477,
                    "Total Population": 205441,
                    "Wards": "Sahakar Nagar",
                    "Number of Beds in facility type": 1265,
                    "Ratio": -98.15266439826512
                },
                {
                    "Percent": 0.16864837071791247,
                    "Unnamed: 0": 55914,
                    "No_Required_bed": 77795,
                    "Total Population": 233399,
                    "Wards": "Warje-Karvenagar",
                    "Number of Beds in facility type": 1312,
                    "Ratio": -98.31351629282088
                },
                {
                    "Percent": 0.28853378750688774,
                    "Unnamed: 0": 47436,
                    "No_Required_bed": 79852,
                    "Total Population": 239564,
                    "Wards": "Yerwada",
                    "Number of Beds in facility type": 2304,
                    "Ratio": -97.11466212493112
                }
            ],
            "graph": {
                "tree": {
                    "0": {
                        "Description": "Trees vs Required Trees",
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
                        ],
                        "name": "Analysis of Trees vs Required Trees"
                    },
                    "1": {
                        "Description": "Population vs required trees",
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
                        ],
                        "name": "Analysis of Population vs Required Trees"
                    },
                    "2": {
                        "Description": "condition of trees",
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
                        ],
                        "name": "Analysis of condition of Trees"
                    }
                },
                "disease": {
                    "0": {
                        "Description": "Graph shows count of top 5 disease",
                        "data": [
                            {
                                "backgroundColor": "#FF5964",
                                "data": {
                                    "2016": [
                                        14,
                                        3049,
                                        2481,
                                        200
                                    ],
                                    "2014": [
                                        47,
                                        401,
                                        3,
                                        138
                                    ],
                                    "2012": [
                                        94,
                                        15,
                                        29,
                                        39
                                    ],
                                    "2013": [
                                        80,
                                        87,
                                        8,
                                        75
                                    ],
                                    "Diseases/Syndromes": [
                                        "Malaria",
                                        "Dengue / DHF / DSS (Suspected)",
                                        "Chikungunya",
                                        "Enteric Fever "
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
                                    ],
                                    "2018": [
                                        2,
                                        2943,
                                        378,
                                        70
                                    ]
                                },
                                "label": "Year wise count of reported patients"
                            }
                        ],
                        "Name": "Top 5 diseases"
                    }
                },
                "complaint": {
                    "1": {
                        "Description": "The graph showing increase/decrease of complaints in 2018 relative to 2017",
                        "data": [
                            {
                                "backgroundColor": "#51A3A3",
                                "data": [
                                    4.198686044196695,
                                    5.81746552856205,
                                    1.5785077951002227,
                                    10.488029465930017
                                ],
                                "label": "Complaints Index"
                            }
                        ],
                        "Name": "Complaints Data Inrease/Decrease"
                    },
                    "0": {
                        "Description": "Complaints Data 2017 vs 2018",
                        "data": [
                            {
                                "backgroundColor": "#FF5964",
                                "data": [
                                    3450,
                                    2139,
                                    2057,
                                    1372
                                ],
                                "label": "Complaints in 2017"
                            },
                            {
                                "backgroundColor": "#51A3A3",
                                "data": [
                                    4857,
                                    3401,
                                    2322,
                                    3046
                                ],
                                "label": "Complaints in 2018"
                            }
                        ],
                        "Name": "Complaints Data 2017 vs 2018"
                    },
                    "2": {
                        "Description": "",
                        "data": [
                            {
                                "backgroundColor": "#51A3A3",
                                "data": [
                                    4.198686044196695,
                                    5.81746552856205,
                                    1.5785077951002227,
                                    10.488029465930017
                                ],
                                "label": "Complaints Index"
                            }
                        ],
                        "Name": "Top 5 Complaints Categories"
                    }
                },
                "aqi": {
                    "0": {
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
                        ],
                        "name": "Wardwise AQI"
                    }
                },
                "swm": {
                    "0": {
                        "Description": "Graph shows total generated waste and collected waste for each ward",
                        "data": [
                            {
                                "backgroundColor": "#FF5964",
                                "data": [
                                    100.80000000000001,
                                    100.0,
                                    84.253,
                                    94.67
                                ],
                                "label": "Total Waste Generated (In tons)"
                            },
                            {
                                "backgroundColor": "#51A3A3",
                                "data": [
                                    86.4,
                                    74.5,
                                    71.61,
                                    67.6
                                ],
                                "label": "Total Waste Collected (In tons)"
                            }
                        ],
                        "Name": "Total Waste Generated vs Total Waste Collected"
                    }
                },
                "hospital": {
                    "1": {
                        "Description": "xyz",
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
                        ],
                        "Name": "Total Population Vs Number of Required_bed "
                    },
                    "0": {
                        "Description": "Number of beds availabel in facility is validated",
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
                        ],
                        "Name": "Number of Beds in Facility vs Number of Required Beds"
                    }
                },
                "finance": {
                    "0": {
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
                        ],
                        "name": "Area under slum"
                    },
                    "1": {
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
                        ],
                        "name": "Population of slum"
                    },
                    "2": {
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
                        ],
                        "name": "Property tax collection"
                    }
                }
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
        let temp = (swm+tree+hospital)/3-(aqi+complaint-7.8)/3
        if(temp<0){
            temp=0
        }
        else if(temp>10){
            temp=10
        }
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
            complaint:5.8,
            tree:4.4,
            hospital:0.19
        }
        const defaultSlider ={
            main:0,
            aqi:106,
            swm:0,
            complaint:5.8,
            tree:0,
            hospital:6685 
        }
        const {swm,tree,hospital,aqi,complaint} = defaultMeter
        defaultMeter.main = (swm+tree+hospital)/3-(aqi+complaint-6)/3
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