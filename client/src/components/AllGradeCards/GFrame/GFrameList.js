import React from 'react'
import GFrameCards from './GFrameCards'

const GFrameList = ({GFrames}) => {
    return (
        <>
            {GFrames.map((GFrame) => (
                <GFrameCards GFrame={GFrame} key={GFrame.id} />
            ))}
        </>
    )
}

export default GFrameList
