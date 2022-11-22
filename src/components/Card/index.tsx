import React, { ReactNode } from 'react'

const Card = ({w, h, bgColor, children}:{w?:string, h?:string, bgColor?:string, children:ReactNode}) => {
    return (
        <div style={{width:w, height:h, backgroundColor:bgColor, boxShadow:'0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1)'}}>
            {children}
        </div>
    )
}

export default Card