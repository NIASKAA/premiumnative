import React from 'react'
import RE100OtherCards from './RE100OtherCards'

const RE100OtherList = ({re100Others}) => {
    return (
        <>
            {re100Others.map((re100Other) => (
                <RE100OtherCards re100Other={re100Other} key={re100Other.id} />
            ))}
        </>
    )
}

export default RE100OtherList
