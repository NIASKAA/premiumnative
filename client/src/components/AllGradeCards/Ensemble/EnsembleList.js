import React from 'react'
import EnsembleCard from './EnsembleCard'

const EnsembleList = ({ensembles}) => {

    return (
        <>
            {ensembles.map((ensemble) =>  (
                <EnsembleCard ensemble={ensemble} key={ensemble.id} />
            ))}
        </>
    )
}

export default EnsembleList
