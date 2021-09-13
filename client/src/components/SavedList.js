import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client"
import {List, ListItem, Text} from 'native-base'
import {
    GET_SAVE_CONVERGE, 
    GET_SAVE_HIGHGRADE, 
    GET_SAVE_REALGRADE, 
    GET_SAVE_MASTERGRADE, 
    GET_SAVE_PERFECTGRADE, 
    GET_SAVE_SDGRADE, 
    GET_SAVE_OTHER} from '../utils/queries'
import HighGradeListText from './SavedListText'

const SavedList = () => {
    const {loading: loadHigh, data: highData} = useQuery(GET_SAVE_HIGHGRADE)
    const [loadHighGrade, setLoadHighGrade] = useState(undefined)

    useEffect(() => {
        if(!loadHigh && highData) {
            setLoadHighGrade(highData.getUserHighGrade.gotHighGrades)
        }
    }, [loadHigh, highData])

    return (
        <>
            <List>
                <ListItem itemDivider>
                    <Text>HG</Text>
                </ListItem>
                <ListItem>
                    {loadHighGrade && !loadHigh && <HighGradeListText highGrades={loadHighGrade}/>}
                </ListItem>
                <ListItem itemDivider>
                    <Text>RG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>RE/100 & Other</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>MG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>PG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>SD</Text>
                </ListItem>
                <ListItem>
                    <Text>Test</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Converge</Text>
                </ListItem>
                <ListItem>
                    <Text>Test</Text>
                </ListItem>
            </List>
        </>
    )
}

export default SavedList
