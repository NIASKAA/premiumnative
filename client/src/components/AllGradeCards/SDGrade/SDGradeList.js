import React from 'react'
import SDGradeCards from './SDGradeCards'

const SDGradeList = ({SDGrades}) => {
    return (
        <>
            {SDGrades.map((SDGrade) => (
                <SDGradeCards SDGrade={SDGrade} key={SDGrade.id} />
            ))}
        </>
    )
}

export default SDGradeList
