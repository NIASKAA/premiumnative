import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Content, Spinner} from 'native-base'
import {useQuery} from '@apollo/client'

const EnsembleView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    
    return (
        <>
            
        </>
    )
}

export default EnsembleView
