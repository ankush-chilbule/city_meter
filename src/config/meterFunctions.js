export const swm_function=(x)=>{
            
    /*******Modify code here*********/
                var increase = x ;
                var SWM = [{/*Your data*/}]
    
                var inc = increase/SWM.length
                // console.log("inc: "+ inc)
                // console.log(Math.min(...SWM.Normalized))
                
                min = SWM[0].Normalized
                var min_Norm;
                SWM.forEach(e => {    
                    // document.write("</br>Before: "+e.total_waste_collected_in_tons+"</br>")
                    e.total_waste_collected_in_tons += inc;
                    // document.write("After: " + e.total_waste_collected_in_tons + "</br>")
                });
                
                SWM.forEach(e => {    
                    // document.write(e['Positive/Negative Ratio'] + " before </br>")
                    e['Positive/Negative Ratio'] = ((e.total_waste_collected_in_tons-e.total_waste_generated_in_tons)/e.total_waste_generated_in_tons)*100
                    // document.write(e['Positive/Negative Ratio'] + " after</br>")
    
                });
    
                // document.write(SWM[min_norm]['Positive/Negative Ratio'] + " before </br>")
                // SWM[min_norm]['Positive/Negative Ratio'] = ((SWM[min_norm].total_waste_collected_in_tons-SWM[min_norm].total_waste_generated_in_tons)/SWM[min_norm].total_waste_generated_in_tons)*100
                // document.write(SWM[min_norm]['Positive/Negative Ratio'] + " after</br>")
    
                var min = Math.min(...SWM.map(e => e['Positive/Negative Ratio']))
                var max = Math.max(...SWM.map(e => e['Positive/Negative Ratio']))
                
                // console.log("min: "+min)
                // console.log("max: "+max)
    
                var sum = 0
                SWM.forEach(e => {    
                // document.write("</br>Before: " + e.Normalized + "</br>" )
                e.Normalized = (10-0)/(max-min)*(e['Positive/Negative Ratio']-min)+0
                // document.write("</br>after: " + e.Normalized + "</br>")
                sum += e.Normalized
            });
                
                return sum/SWM.length
            }
    
            export const tree_function = (x)=>{
                tree_count_list = []
                trees.forEach((t)=>{
                    tree_count_list.push(t["Tree Count"])
                })
            
                min_tree = Math.min(...tree_count_list)
                new_trees_without_min=trees.filter((e)=> e["Tree Count"]!=min_tree)
                new_trees_withonly_min=trees.filter((e)=> e["Tree Count"]==min_tree)
            
                new_trees_withonly_min[0]["Tree Count"] =min_tree + x
                new_trees_without_min.push(new_trees_withonly_min[0])
            
                new_trees_without_min.forEach((e)=>{
                    e['Index'] = (e["Tree Count"]-e["Required Trees"])*100/e["Required Trees"]
                })
            
                index_list = []
                    new_trees_without_min.forEach((e)=>{
                    index_list.push(e['Index'])
                })
            
                min_index = Math.min(...index_list)
                max = Math.max(...index_list)
            
                sum_index = index_list.reduce((a,b)=>a+b)
                mean_index = sum_index / index_list.length
                return mean_index/10
            }
            
            export const hospital_function = (x)=>{
                new_wards = []
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
                list = []
                new_wards.forEach((t)=>{
                    list.push(t["Percent"])
                })
                sum = list.reduce((a,b)=>a+b)
                mean = sum / list.length
                return mean
                }
                            


