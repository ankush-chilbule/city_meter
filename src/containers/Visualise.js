import React from 'react'

export default ({myObj})=>{
    return(
        <section className="visualize" >
        {
            JSON.stringify(myObj)
        }
        </section>
    )
}