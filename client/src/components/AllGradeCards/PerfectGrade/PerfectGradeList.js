import React from 'react'
import PerfectGradeCards from './PerfectGradeCards'

const PerfectGradeList = ({perfectGrades}) => {
    return (
        <>
            {perfectGrades.map((perfectGrade) => (
                <PerfectGradeCards perfectGrade={perfectGrade} key={perfectGrade.id} />
            ))}
        </>
    )
}

export default PerfectGradeList
