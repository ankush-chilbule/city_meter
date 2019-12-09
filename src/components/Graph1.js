import React,{Component,useContext} from 'react'
import {Bar,Line} from 'react-chartjs-2'
import Context from '../config/context'

export default ()=>{
    const {rd,current} = useContext(Context)
    const {meter,graph} = rd
    const myGraph = graph[current]
    const {data,name,description} = meter[current]
    return(
        <div className="graph_wrapper">
            <header>
                <h2>
                   Analysis For {name}
                </h2>
                <p>
               {description}
                </p>
            </header>
            {
                // Object.keys(myGraph).forEach((e)=>{
                //     console.log(e)
                // })
                Object.keys(myGraph).map((e)=>{

                    return(
                        <section>
                            <header>
                                <h4>{myGraph[e].name}</h4>
                            </header>
                            <div className="graph_details">
                            <div className="graph">
                                {/* {JSON.stringify(myGraph[e].data)} */}
                                <Bar
                                    
                                    data={{
                                        labels: ['Aundh-Baner','Kothrud-Bawdhan','Ghole Road','Warje-Karvenagar'],
                                        datasets:myGraph[e].data}}
                                    width={200}
                                    height={200}
                                    options={{
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }]
                                        },
                                        maintainAspectRatio: false
                                    }}
                                    />
                                </div>
                                <div>
                                { myGraph[e].description}
                                </div>
                            </div>

                            {/* {JSON.stringify(myGraph[e])} */}
                        </section>
                    )
                })
            }
        </div>
    )
}