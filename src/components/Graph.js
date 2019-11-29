import React,{Component} from 'react'
import {Bar} from 'react-chartjs-2'

class graph extends Component{

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
     data = {
        labels: ['Aundh-Baner','Kothrud-Bawdhan','Warje-Karvenagar','Tilak Road	'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81]
          }
        ]
      };
    render(){
        return(
            <div>
            <Bar
          data={this.data}
          width={200}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
        {
            JSON.stringify(this.myData)
        }
        </div>
        )
    }
}

export default graph