import React,{useContext} from 'react'
import Context from '../config/context'
export default({myObj})=>{

    const {rd,current} = useContext(Context)
    const {meter} = rd
    const {data,name,description} = meter[current]
    
    return(
        // <div className="tables">
    
        // </div>
        <div className="tables">
           
            <header>
                <h2>
                   {name}
                </h2>
                <p>
               {description}
                </p>
            </header>
           <section>
               {myObj? <div>
            <h3>
            Average Table
            </h3>
            <p>
                
             </p>
         <table border="1|0">
             <tr>
                {
                    Object.keys(myObj[0]).map((key)=>{
                        return(
                            <th>
                                {key}
                            </th>
                        )
                    })
                }
            </tr>
            {
                myObj.map((obj)=>{
                    return(
                        <tr>
                            {
                                Object.keys(obj).map((key)=>{
                                    return(
                                        <td>
                                        {obj[key]}
                                    </td>
                                    )
                                })
                            }
                        </tr>
                        )
                    
                })
            }
        </table>
            </div>
           :null}
           </section>
        </div>

    )
}