import React,{Component} from 'react'
import {Bar,Line} from 'react-chartjs-2'

class graph extends Component{


  colors=["#FF5964","#51A3A3","#8FB339","#F34213","#E0CA3C","#6B717E"]
     myData = this.props.myObj.map((e)=>{
         let myList=[]
            myList.push(Object.keys(e).map((key)=>{
                return {
                    'label':key,
                    'data':e[key]
                }
            }))

            
            return myList;
    })
  
    constructor(props){
        super(props)
        this.myList1 = []
        this.props.myObj.forEach((obj)=>{
            Object.keys(obj).forEach((key)=>{
                this.myList1.push({
                    'label':key,
                    'data':obj[key]
                })
            })
        })


    }

     
    render(){
      const myList2 = []
        this.props.myObj.forEach((obj)=>{
        Object.keys(obj).forEach((key)=>{
            myList2.push({
                'label':key,
                'data':obj[key]
            })
        })
      })
        return(
            <div>
            <Line
          data={{
            labels: ['Aundh-Baner','Kothrud-Bawdhan','Warje-Karvenagar','Tilak Road	'],
            datasets: myList2
          }}
          width={200}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
          {
            JSON.stringify(myList2)
          }
        </div>
        )
    }
}

export default graph