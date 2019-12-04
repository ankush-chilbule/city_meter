import React from 'react'

export default ({title,tagLine})=>{

    return(
        <section className="title">
            <h3 className="text_reversed">
                {title} : {tagLine}
            </h3>
        </section>

    )
}