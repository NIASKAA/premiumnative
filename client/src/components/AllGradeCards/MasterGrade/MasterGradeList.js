import React from 'react'
import MasterGradeCards from './MasterGradeCards'

const MasterGradeList = ({masterGrades}) => {
    return (
        <>
            {masterGrades.map((masterGrade) => (
                <MasterGradeCards masterGrade={masterGrade} key={masterGrade.id} />
            ))}
        </>
    )
}

export default MasterGradeList
