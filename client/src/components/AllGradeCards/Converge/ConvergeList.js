import React from 'react'
import ConvergeCards from './ConvergeCards'

const ConvergeList = ({converges}) => {
    return (
        <>
            {converges.map((converge) => (
                <ConvergeCards converge={converge} key={converge.id}/>
            ))}
        </>
    )
}

export default ConvergeList
