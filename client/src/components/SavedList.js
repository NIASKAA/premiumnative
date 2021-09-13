import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client"
import {List, Text, Separator} from 'native-base'
import {
    GET_SAVE_CONVERGE, 
    GET_SAVE_HIGHGRADE, 
    GET_SAVE_REALGRADE, 
    GET_SAVE_MASTERGRADE, 
    GET_SAVE_PERFECTGRADE, 
    GET_SAVE_SDGRADE, 
    GET_SAVE_OTHER} from '../utils/queries'
import {HighGradeListText, RealGradeListText, RE100OtherListText, MasterGradeListText, PerfectGradeListText, SDGradeListText, ConvergeListText} from './SavedListText'

const SavedList = () => {
    const {loading, data} = useQuery(GET_SAVE_CONVERGE)
    const {loading: loadHigh, data: highData} = useQuery(GET_SAVE_HIGHGRADE)
    const {loading: loadReal, data: realData} = useQuery(GET_SAVE_REALGRADE)
    const {loading: loadMaster, data: masterData} = useQuery(GET_SAVE_MASTERGRADE)
    const {loading: loadPerfect, data: perfectData} = useQuery(GET_SAVE_PERFECTGRADE)
    const {loading: loadSD, data: sdData} = useQuery(GET_SAVE_SDGRADE)
    const {loading: loadOther, data: otherData} = useQuery(GET_SAVE_OTHER)
    const [loadConverge, setLoadConverge] = useState(undefined)
    const [loadHighGrade, setLoadHighGrade] = useState(undefined)
    const [loadRealGrade, setLoadRealGrade] = useState(undefined)
    const [loadMasterGrade, setLoadMasterGrade] = useState(undefined)
    const [loadPerfectGrade, setLoadPerfectGrade] = useState(undefined)
    const [loadSDGrade, setLoadSDGrade] = useState(undefined)
    const [loadOtherGrade, setLoadOtherGrade] = useState(undefined)

    useEffect(() => {
        if(!loadHigh && highData) {
            setLoadHighGrade(highData.getUserHighGrade.gotHighGrades)
        }
    }, [loadHigh, highData])

    useEffect(() => {
        if(!loading && data) {
            setLoadConverge(data.getUserConverge.gotConverges)
        }
    }, [loading, data])

    useEffect(() => {
        if(!loadReal && realData) {
            setLoadRealGrade(realData.getUserRealGrade.gotRealGrades)
        }
    }, [loadReal, realData])

    useEffect(() => {
        if(!loadMaster && masterData) {
            setLoadMasterGrade(masterData.getUserMasterGrade.gotMasterGrades)
        }
    }, [loadMaster, masterData])

    useEffect(() => {
        if(!loadPerfect && perfectData) {
            setLoadPerfectGrade(perfectData.getUserPerfectGrade.gotPerfectGrades)
        }
    }, [loadPerfect, perfectData])

    useEffect(() => {
        if(!loadSDGrade && sdData) {
            setLoadSDGrade(sdData.getUserSDGrade.gotSDGrades)
        }
    }, [loadSD, sdData])

    useEffect(() => {
        if(!loadOther && otherData) {
            setLoadOtherGrade(otherData.getUserOther.gotRE100s)
        }
    }, [loadOther, otherData])

    useEffect(() => {
        if(!loading && data) {
            setLoadConverge(data.getUserConverge.gotConverges)
        }
    }, [loading, data])

    return (
        <>
            <List>
                <Separator bordered>
                    <Text>High Grades</Text>
                </Separator>
                {loadHighGrade && !loadHigh && <HighGradeListText highGrades={loadHighGrade}/>}
                <Separator bordered>
                    <Text>RG</Text>
                </Separator>
                {loadRealGrade && !loadReal && <RealGradeListText realGrades={loadRealGrade}/>} 
                <Separator bordered>
                    <Text>RE/100 & Other</Text>
                </Separator>
                {loadOtherGrade && !loadOther && <RE100OtherListText re100Others={loadOtherGrade}/>}
                <Separator bordered>
                    <Text>MG</Text>
                </Separator>
                {loadMasterGrade && !loadMaster && <MasterGradeListText masterGrades={loadMasterGrade}/>}
                <Separator bordered>
                    <Text>PG</Text>
                </Separator>
                {loadPerfectGrade && !loadPerfect && <PerfectGradeListText perfectGrades={loadPerfectGrade}/>}
                <Separator bordered>
                    <Text>SD</Text>
                </Separator>
                {loadSDGrade && !loadSD && <SDGradeListText SDGrades={loadSDGrade}/>}
                <Separator bordered>
                    <Text>Converge</Text>
                </Separator>
                {loadConverge && !loading && <ConvergeListText converges={loadConverge}/>}
            </List>
        </>
    )
}

export default SavedList
