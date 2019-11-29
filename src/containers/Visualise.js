import React,{useContext} from 'react'
import Table from '../components/Table'
import Graph from '../components/Graph'
import Context from '../config/context'
import { objectTypeAnnotation } from '@babel/types';

export default ({myObj})=>{
    const {isGraph,toggleGraph,toggleTable,graph,current} = useContext(Context)
    const currGraph = graph[current]
    return(
        <section className="visualize" >
            <div className="toggle">
            <button onClick={toggleGraph} className={isGraph?"active":""}>
                    Show Graphs
                  </button> 
            <button className={isGraph?"":"active"} onClick={toggleTable}>
                   
                        Tables  
                    </button>
                    </div>
                    <div className="wrapper">
              {
                  isGraph?<Graph
                  myObj={currGraph}
                  />:<Table myObj={myObj}/>
              }
                    </div>
                  
          
          
        </section>
    )
}