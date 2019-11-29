import React from 'react'

export default({myObj})=>{

    return(
        <div className="tables">
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
        </div>

    )
}