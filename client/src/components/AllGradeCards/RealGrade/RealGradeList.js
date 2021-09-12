import React from 'react'
import RealGradeCards from './RealGradeCards'

const RealGradeList = ({realGrades}) => {
    return (
        <>
            {realGrades.map((realGrade) => (
                <RealGradeCards realGrade={realGrade} key={realGrade.id} />
            ))}
        </>
    )
}

export default RealGradeList
