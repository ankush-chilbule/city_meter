import React,{useContext} from 'react'

export default({myObj})=>{

    
    return(
        // <div className="tables">
    
        // </div>
        <div className="tables">
            <header>
                <h2>
                    Solid Waste Management
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Scelerisque eu ultrices vitae auctor eu augue ut. 
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