import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Content, Spinner, Item, Icon, Input, Header, Title, Left, Right, Body} from 'native-base'
import {useQuery} from '@apollo/client'
import {GET_ALL_ENSEMBLE} from '../../utils/queries'
import {GET_ENSEMBLE} from '../../utils/state/actions'
import {EnsembleList} from '../../components/AllGradeCards'

const EnsembleView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadEnsemble, setLoadEnsemble] = useState(true)
    const {loading, data} = useQuery(GET_ALL_ENSEMBLE)
    let {getEnsemble} = state
    const [AllEnsemble, setAllEnsemble] = useState(() => [])

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_ENSEMBLE, payload: data.getEnsemble})
            if(getEnsemble.length === 0) {
                setAllEnsemble(data.getEnsemble)
            } else {
                setAllEnsemble(getEnsemble)
            }
        }
        console.log(data)
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadEnsemble(false);
        }, 3000)
    }, [loadEnsemble]);

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getEnsemble.length <=1) {
            dispatch({type: GET_ENSEMBLE, payload: data.getEnsemble})
            setAllEnsemble(state.getEnsemble)
        } else {
            setAllEnsemble.filter((ensemble) => 
                ensemble.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>
    
    return (
        <>
            <Header searchBar rounded>
              <Left/>
                <Body>
                  <Title>Converges</Title>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" 
                      value={searchGunpla}
                      onChangeText={(text) => {
                        setSearchGunpla(text);
                        searchHandler(searchGunpla);
                      }}
                    />
                  </Item>
                </Body>
              <Right />
            </Header>
            <Content style={styles.content}>
                <View style={styles.view}>
                    {loadEnsemble && <Spinner color="#a9a9a9" style={styles.spinner} />}
                    {!loadEnsemble && !loading && <EnsembleList ensembles={AllEnsemble} />}
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
    },
    view: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spinner: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '55%'
    }
  })

export default EnsembleView
