import React from 'react'
import HighGradeCards from './HighGradeCards'

const HighGradeList = ({highGrades}) => {
    return (
        <>
            {highGrades.map((highGrade) => (
                <HighGradeCards highGrade={highGrade} key={highGrade.id}/>
            ))}
        </>
    )
}

export default HighGradeList
