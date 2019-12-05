import React,{Component,useContext} from 'react'
import ReactDOM from 'react-dom'
import Table from '../components/Table'
import Graph from '../components/Graph'
import Graph1 from '../components/Graph1'
import Context from '../config/context'
import { objectTypeAnnotation } from '@babel/types';

class visualize extends Component{

    constructor(props){
        super(props);
         this.toggle = React.createRef()
 
    }
    handleScroll =()=>{
        console.log("hello"+window.pageYOffset)
        if (700 > this.toggle.current.offsetTop) {
            this.toggle.current.classList.add("sticky");
          } else {
            this.toggle.current.classList.remove("sticky");
          }
    
     }
    componentDidMount(){
        // console.log(csvToJson.getJsonFromCsv('./data/City-positive-data.csv'))
        window.onscroll = this.handleScroll;
        window.addEventListener('scroll', ()=>{
            console.log("hello"+window.pageYOffset)
            if (window.pageYOffset > this.toggle.current.offsetTop) {
                this.toggle.current.classList.add("sticky");
              } else {
                this.toggle.current.classList.remove("sticky");
              }
        
         },true);      
        console.log(this.toggle)
        console.log(window)
 
    }
    
    render(){
        return(
            <Context.Consumer>
                {
                    value=>{

                        const {isGraph,toggleGraph,toggleTable,graph,current} = value
                        const currGraph = graph[current]
                       
                        return(
                            <section className="visualize" >
            <div id="toggle" className="toggle" ref={this.toggle} onScroll={this.handleScroll}>
            <button onClick={toggleGraph} className={isGraph?"active":""}>
                    Show Graphs
                  </button> 
            <button className={isGraph?"":"active"} onClick={toggleTable}>
                   
                        Tables  
                    </button>
                    </div>
                    <div className="wrapper">
              {
                  isGraph?<Graph1
                  myObj={currGraph}
                  />:<Table myObj={this.props.myObj}/>
              }
                    </div>
                  
          
          
        </section>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default visualize;