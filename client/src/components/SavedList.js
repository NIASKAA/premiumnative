import React, {useState, useEffect} from 'react'
import {SafeAreaView, RefreshControl, ScrollView} from 'react-native'
import {useQuery} from "@apollo/client"
import {List, Text, Separator, Content} from 'native-base'
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
    const {loading, data, refetch} = useQuery(GET_SAVE_CONVERGE)
    const {loading: loadHigh, data: highData, refetch: refetchHigh} = useQuery(GET_SAVE_HIGHGRADE)
    const {loading: loadReal, data: realData, refetch: refetchReal} = useQuery(GET_SAVE_REALGRADE)
    const {loading: loadMaster, data: masterData, refetch: refetchMaster} = useQuery(GET_SAVE_MASTERGRADE)
    const {loading: loadPerfect, data: perfectData, refetch: refetchPerfect} = useQuery(GET_SAVE_PERFECTGRADE)
    const {loading: loadSD, data: sdData, refetch: refetchSD} = useQuery(GET_SAVE_SDGRADE)
    const {loading: loadOther, data: otherData, refetch: refetchOther} = useQuery(GET_SAVE_OTHER)
    const [loadConverge, setLoadConverge] = useState(null)
    const [loadHighGrade, setLoadHighGrade] = useState(null)
    const [loadRealGrade, setLoadRealGrade] = useState(null)
    const [loadMasterGrade, setLoadMasterGrade] = useState(null)
    const [loadPerfectGrade, setLoadPerfectGrade] = useState(null)
    const [loadSDGrade, setLoadSDGrade] = useState(null)
    const [loadOtherGrade, setLoadOtherGrade] = useState(null)
    const [refreshing, setRefreshing] = React.useState(false)

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        if(!loadHigh && highData) {
            setLoadHighGrade(highData.getUserHighGrade.gotHighGrades)
        } else {
            return
        }
        refetchHigh();
    }, [loadHigh, highData])

    useEffect(() => {
        if(!loading && data) {
            setLoadConverge(data.getUserConverge.gotConverges)
        } else {
            return
        }
        console.log(data)
        refetch();
    }, [loading, data])

    useEffect(() => {
        if(!loadReal && realData) {
            setLoadRealGrade(realData.getUserRealGrade.gotRealGrades)
        } else {
            return
        }
        refetchReal();
    }, [loadReal, realData])

    useEffect(() => {
        if(!loadMaster && masterData) {
            setLoadMasterGrade(masterData.getUserMasterGrade.gotMasterGrades)
        } else {
            return
        }
        refetchMaster();
    }, [loadMaster, masterData])

    useEffect(() => {
        if(!loadPerfect && perfectData) {
            setLoadPerfectGrade(perfectData.getUserPerfectGrade.gotPerfectGrades)
        } else {
            return
        }
        refetchPerfect();
    }, [loadPerfect, perfectData])

    useEffect(() => {
        if(!loadSDGrade && sdData) {
            setLoadSDGrade(sdData.getUserSDGrade.gotSDGrades)
        } else {
            return
        }
        refetchSD();
    }, [loadSD, sdData])

    useEffect(() => {
        if(!loadOther && otherData) {
            setLoadOtherGrade(otherData.getUserOther.gotRE100s)
        } else {
            return
        }
        refetchOther();
    }, [loadOther, otherData])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <Content>
                    <List>
                        <Separator bordered>
                            <Text>High Grades</Text>
                        </Separator>
                        {loadHighGrade && !loadHigh && <HighGradeListText highGrades={loadHighGrade}/>}
                        <Separator bordered>
                            <Text>Real Grades</Text>
                        </Separator>
                        {loadRealGrade && !loadReal && <RealGradeListText realGrades={loadRealGrade}/>} 
                        <Separator bordered>
                            <Text>RE/100 & Other</Text>
                        </Separator>
                        {loadOtherGrade && !loadOther && <RE100OtherListText re100Others={loadOtherGrade}/>}
                        <Separator bordered>
                            <Text>Master Grades</Text>
                        </Separator>
                        {loadMasterGrade && !loadMaster && <MasterGradeListText masterGrades={loadMasterGrade}/>}
                        <Separator bordered>
                            <Text>Perfect Grades</Text>
                        </Separator>
                        {loadPerfectGrade && !loadPerfect && <PerfectGradeListText perfectGrades={loadPerfectGrade}/>}
                        <Separator bordered>
                            <Text>SD Grades</Text>
                        </Separator>
                        {loadSDGrade && !loadSD && <SDGradeListText SDGrades={loadSDGrade}/>}
                        <Separator bordered>
                            <Text>Converges</Text>
                        </Separator>
                        {loadConverge && !loading && <ConvergeListText converges={loadConverge}/>}
                    </List>
                </Content>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SavedList
