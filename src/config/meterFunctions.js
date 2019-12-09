 export const swm_function=(x)=>{
            
    var SWM = [
        {
            "total_waste_generated_in_tons": 100.80000000000001,
            "gate_to_gate_collection_percentage": 2.992,
            "total_waste_collected_in_tons": 86.4,
            "Wards": "Aundh-Baner",
            "Positive/Negative Ratio": -14.28571428571429,
            "door_to_door_collection_percentage": 2.992,
            "Normalized": 7.320020298720357
        },
        {
            "total_waste_generated_in_tons": 100.0,
            "gate_to_gate_collection_percentage": 435.0,
            "total_waste_collected_in_tons": 74.5,
            "Wards": "Kothrud-Bawdhan",
            "Positive/Negative Ratio": -25.5,
            "door_to_door_collection_percentage": 435.0,
            "Normalized": 4.821776720933741
        },
        {
            "total_waste_generated_in_tons": 84.253,
            "gate_to_gate_collection_percentage": 178.0,
            "total_waste_collected_in_tons": 71.61,
            "Wards": "Tilak Road",
            "Positive/Negative Ratio": -15.005993851850974,
            "door_to_door_collection_percentage": 143.0,
            "Normalized": 7.159561233724391
        },
        {
            "total_waste_generated_in_tons": 94.67,
            "gate_to_gate_collection_percentage": 2286.9205,
            "total_waste_collected_in_tons": 67.6,
            "Wards": "Warje-Karvenagar",
            "Positive/Negative Ratio": -28.59406358931024,
            "door_to_door_collection_percentage": 16607.37,
            "Normalized": 4.132501925534964
        }
    ]
    var increase = x
    var generated = 0
    var norm = 0
    var collected = 0
    SWM.forEach(e => {
       generated += e.total_waste_generated_in_tons
       collected += e.total_waste_collected_in_tons
       norm += e.Normalized
    });
    console.log(generated-collected)
    if(x > (generated-collected))
        x = generated-collected
    // console.log("Norm: " + norm)
    // console.log("Generated-collected total: " +(generated - collected))
    // console.log("Generated total: " +(generated))
    // console.log("collected total: " +(collected))
    // console.log((increase/generated)*10)

    collected +=x

    return Math.round((collected/generated)*10)

}


    
            export const tree_function = (x)=>{
                // if(x==0){
                //     return 4.4
                // }
                const trees = [
    // {
    //     "Ratio": 209.80322872728075,
    //     "Total Population": 181124,
    //     "Required Trees": 90562.0,
    //     "Wards": "Aundh-Baner",
    //     "Normalized Values": 4.3121762275883295,
    //     "Tree Count": 280564
    // },
    {
        "Ratio": -94.8883544461261,
        "Total Population": 192932,
        "Required Trees": 96466.0,
        "Wards": "Aundh-Baner",
        "Normalized Values": 0.0,
        "Tree Count": 4931
    },
    // {
    //     "Ratio": -57.012276716784584,
    //     "Total Population": 291446,
    //     "Required Trees": 145723.0,
    //     "Wards": "Bibewadi",
    //     "Normalized Values": 0.5360447449111203,
    //     "Tree Count": 62643
    // },
    // {
    //     "Ratio": 128.99749839423956,
    //     "Total Population": 236648,
    //     "Required Trees": 118324.0,
    //     "Wards": "Dhankawadi",
    //     "Normalized Values": 3.168565545055155,
    //     "Tree Count": 270959
    // },
    // {
    //     "Ratio": 62.553969101683904,
    //     "Total Population": 155413,
    //     "Required Trees": 77706.5,
    //     "Wards": "Dhole Patil Road",
    //     "Normalized Values": 2.2282172607070296,
    //     "Tree Count": 126315
    // },
    {
        "Ratio": -85.98498737417414,
        "Total Population": 433635,
        "Required Trees": 216817.5,
        "Wards": "Ghole Road",
        "Normalized Values": 0.1260057381083406,
        "Tree Count": 30387
    },
    // {
    //     "Ratio": 27.72247044658831,
    //     "Total Population": 324751,
    //     "Required Trees": 162375.5,
    //     "Wards": "Hadapsar",
    //     "Normalized Values": 1.735261206892126,
    //     "Tree Count": 207390
    // },
    // {
    //     "Ratio": -92.93269984984649,
    //     "Total Population": 178484,
    //     "Required Trees": 89242.0,
    //     "Wards": "Kasba Peth",
    //     "Normalized Values": 0.02767758522115571,
    //     "Tree Count": 6307
    // },
    {
        "Ratio": 77.0067500752397,
        "Total Population": 209331,
        "Required Trees": 104665.5,
        "Wards": "Kothrud-Bawdhan",
        "Normalized Values": 2.432761599896205,
        "Tree Count": 185265
    },
    // {
    //     "Ratio": 8.502197711265035,
    //     "Total Population": 205441,
    //     "Required Trees": 102720.5,
    //     "Wards": "Sahakar Nagar",
    //     "Normalized Values": 1.4632444930931905,
    //     "Tree Count": 111454
    // },
    // {
    //     "Ratio": 611.6959016055141,
    //     "Total Population": 242290,
    //     "Required Trees": 121145.0,
    //     "Wards": "Tilak Road",
    //     "Normalized Values": 10.0,
    //     "Tree Count": 862184
    // },
    {
        "Ratio": -13.040758529385302,
        "Total Population": 233399,
        "Required Trees": 116699.5,
        "Wards": "Warje-Karvenagar",
        "Normalized Values": 1.1583557829904298,
        "Tree Count": 101481
    }
    // {
    //     "Ratio": 59.29688934898398,
    //     "Total Population": 239564,
    //     "Required Trees": 119782.0,
    //     "Wards": "Yerwada",
    //     "Normalized Values": 2.1821211338148125,
    //     "Tree Count": 190809
    // }
]

           
               const tree_count_list = []
    trees.forEach((t)=>{
        tree_count_list.push(t["Tree Count"])
    })

    var sum_tot = 0
    tree_count_list.forEach((e)=>{
        sum_tot += e
    })
    //console.log(sum/4)

    var sum = 0
    const tree_req_list = []
    trees.forEach((t)=>{
        tree_req_list.push(t["Required Trees"])
    })

    tree_req_list.forEach((e)=>{
        sum += e
    })
    //console.log(sum/4)

    // new_trees = trees
    // new_trees.forEach((e)=>{
    //     e["Tree Count"] += x/4 
    //     //console.log(e)
    // })

    // min_tree = Math.min(...tree_count_list)
    // new_trees_without_min=trees.filter((e)=> e["Tree Count"]!=min_tree)
    // new_trees_withonly_min=trees.filter((e)=> e["Tree Count"]==min_tree)

    // new_trees_withonly_min[0]["Tree Count"] =min_tree + x
    // new_trees_without_min.push(new_trees_withonly_min[0])

    // new_trees.forEach((e)=>{
    //     // e['Index'] = (e["Tree Count"]-e["Required Trees"])*100/e["Required Trees"]
    //     e['Index'] = (e["Tree Count"])*10/e["Required Trees"]
    // })

   
    const temp = sum_tot + x
     return (temp* 10)/sum;



            }
            
            export const hospital_function = (x)=>{
                const Full_hospital = [
                    {
                        "Unnamed: 0": 821,
                        "Total Population": 181124,
                        "Number of Beds in facility type": 1146,
                        "No_Required_bed": 60372,
                        "Wards": "Aundh-Baner",
                        "Percent": 0.189823096799841,
                        "Ratio": -98.1017690320016
                    },
                    {
                        "Unnamed: 0": 850,
                        "Total Population": 192932,
                        "Number of Beds in facility type": 0,
                        "No_Required_bed": 64306,
                        "Wards": "Bhavani Peth",
                        "Percent": 0.0,
                        "Ratio": -100.0
                    },
                    {
                        "Unnamed: 0": 4006,
                        "Total Population": 291446,
                        "Number of Beds in facility type": 856,
                        "No_Required_bed": 97145,
                        "Wards": "Bibewadi",
                        "Percent": 0.0881157033300736,
                        "Ratio": -99.11884296669926
                    },
                    {
                        "Unnamed: 0": 4267,
                        "Total Population": 155413,
                        "Number of Beds in facility type": 873,
                        "No_Required_bed": 51800,
                        "Wards": "Dhole Patil Road",
                        "Percent": 0.16853281853281854,
                        "Ratio": -98.31467181467181
                    },
                    {
                        "Unnamed: 0": 42536,
                        "Total Population": 433635,
                        "Number of Beds in facility type": 2709,
                        "No_Required_bed": 144537,
                        "Wards": "Ghole Road",
                        "Percent": 0.18742605699578654,
                        "Ratio": -98.12573943004213
                    },
                    {
                        "Unnamed: 0": 11010,
                        "Total Population": 324751,
                        "Number of Beds in facility type": 1007,
                        "No_Required_bed": 108248,
                        "Wards": "Hadapsar",
                        "Percent": 0.09302712290296357,
                        "Ratio": -99.06972877097037
                    },
                    {
                        "Unnamed: 0": 26029,
                        "Total Population": 178484,
                        "Number of Beds in facility type": 1390,
                        "No_Required_bed": 59492,
                        "Wards": "Kasba Peth",
                        "Percent": 0.2336448598130841,
                        "Ratio": -97.66355140186917
                    },
                    {
                        "Unnamed: 0": 20541,
                        "Total Population": 209331,
                        "Number of Beds in facility type": 1518,
                        "No_Required_bed": 69776,
                        "Wards": "Kothrud-Bawdhan",
                        "Percent": 0.21755331346021556,
                        "Ratio": -97.82446686539784
                    },
                    {
                        "Unnamed: 0": 27636,
                        "Total Population": 205441,
                        "Number of Beds in facility type": 1265,
                        "No_Required_bed": 68477,
                        "Wards": "Sahakar Nagar",
                        "Percent": 0.1847335601734889,
                        "Ratio": -98.15266439826512
                    },
                    {
                        "Unnamed: 0": 55914,
                        "Total Population": 233399,
                        "Number of Beds in facility type": 1312,
                        "No_Required_bed": 77795,
                        "Wards": "Warje-Karvenagar",
                        "Percent": 0.16864837071791247,
                        "Ratio": -98.31351629282088
                    },
                    {
                        "Unnamed: 0": 47436,
                        "Total Population": 239564,
                        "Number of Beds in facility type": 2304,
                        "No_Required_bed": 79852,
                        "Wards": "Yerwada",
                        "Percent": 0.28853378750688774,
                        "Ratio": -97.11466212493112
                    }
                ]
                
                const new_wards = []
                Full_hospital.forEach((e)=>{
                    if(e['Wards'] == "Warje-Karvenagar"){
                        new_wards.push(e)
                    }
                    else if(e['Wards'] == "Ghole Road"){
                        new_wards.push(e)
                    }
                    else if(e['Wards'] == "Aundh-Baner"){
                        new_wards.push(e)
                    }
                    else if(e['Wards'] == "Kothrud-Bawdhan"){
                        new_wards.push(e)
                    }
                })
                 x = x/4;
                new_wards.forEach((e)=>{
                    e['Number of Beds in facility type'] = e['Number of Beds in facility type'] + x
                    e['Percent'] =  (e['Number of Beds in facility type']) * 10 / e['No_Required_bed']
                    if(e['Percent'] > 10){
                        e['Percent'] = 10
                    }
                })
                const list = []
                new_wards.forEach((t)=>{
                    list.push(t["Percent"])
                })
                const sum = list.reduce((a,b)=>a+b)
                const mean = sum / list.length
                return Math.round(mean)
                }

                export const complaint_function=(x)=>{
                    var complaint = {
                        "2018": [
                            4857,
                            3401,
                            2322,
                            3046
                        ],
                        "Index": [
                            1.7350884409707938,
                            2.2533062054933874,
                            0.7315185137401625,
                            3.440048323769254
                        ],
                        "2017": [
                            3450,
                            2139,
                            2057,
                            1372
                        ]};
                        // for(var i in complaint)
                        //     console.log(complaint[2018][0])
                                    var sum2018 = 0
                        var sum2017 = 0
                        for(var i in complaint[2018]){
                            sum2018 += complaint[2018][i]
                            sum2017 += complaint[2017][i]
                        }
                        //console.log("2018: " + sum2018)
                        //console.log("2017: " + sum2017)
                        // if(x < sum2018)
                        //     sum2018 -= x
                        // else{
                        //     sum2018 += x
                        // }

                        sum2018 = x
                        //console.log("2018updated: " + sum2018)
                var avg = ((sum2018-sum2017)/sum2017)*10
                        if(avg <0)
                            avg = 0
                        else if(avg>10)
                            avg =10
                        return avg //complaint[2018].length;

                }

                export const aqi_function=(x)=>{
                    const Full_Aqi = {
                        "AQI": [
                            105.62,
                            107.0506958250497,
                            101.6,
                            110.54330708661418
                           
                        ],
                        "status": [
                            "unhealthy for sensitive groups",
                            "unhealthy for sensitive groups",
                            "unhealthy for sensitive groups",
                            "unhealthy for sensitive groups",
                           
                        ]
                    }
                    // var len = Full_Aqi['AQI'].length
                    // var sum = 0  
                    // // if(x<0){
                    // //     x = x*len    
                    // // } 
                    // // else{
                    // //     x = x/len
                    // // }
                    // Full_Aqi["AQI"].forEach((e) => {
                    
                    //     sum +=  e + x
                        
                    // });
                    
                    // var average = sum/len
                    var norm= (x/500)*10
                    if(norm>=10)
                    {
                        norm = 10
                    }
                    return Math.round(norm)
                }
                
              
                
                            


