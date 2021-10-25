import React, {useEffect} from 'react'
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../components/Footer'
import {Text, Header, Content, Title} from 'native-base'

const CatalogView = () => {
    const navigation = useNavigation()

    return (
        <>
            <Header hasSegment>
                <Title>Catalog</Title>
            </Header>

            <Content>
                <TouchableOpacity onPress={() => {navigation.navigate('HighGrades')}}>
                    <View style={styles.view}>
                        <Image 
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/hguc-gundam-tr-1-hazenthley-rah-ii_7_asnq0w_ftvyib_djhqyj.jpg'}}
                            style={styles.grades}/>
                            <Text style={styles.text}>High Grades</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('RealGrades')}}>
                    <View style={styles.view}>
                        <Image
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/rg-wings-of-the-sky-effect_1_wd2mdo_gvhjin_ftnrhz.jpg'}}/>
                            <Text style={styles.text}>Real Grades</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('RE100Others')}}>
                    <View style={styles.view}>
                        <Image
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/re-100-vigna-ghina-ii-jupiter-battle-ver_1_cah08v_y2cwge_tpfoqy.jpg'}}/>
                            <Text style={styles.text}>RE/100 & Other</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('MasterGrades')}}>
                    <View style={styles.view}>
                        <Image
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/mg-maneuver-eclipse-gundam_4_xyhwsi_cwvdw2_idl0g8.jpg'}}/>
                            <Text style={styles.text}>Master Grades</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('PerfectGrades')}}>
                    <View style={styles.view}>
                        <Image
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319185/96022e48-f9c7-4086-82ab-a49db6aefa97_raaizt.jpg'}}
                        />
                            <Text style={styles.text}>Perfect Grades</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('SDGrades')}}>
                    <View style={styles.view}>
                        <Image
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631770231/sd-legend-bb-musha-victory-gundam-super-steel-ver_1_rbqn7m_hvkgbu.jpg'}}/>
                            <Text style={styles.text}>SD Grades</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Converges')}}>
                    <View style={styles.view}>
                        <Image
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/dfd_y53xi7_zid8om.jpg'}}
                        />
                            <Text style={styles.convergeText}>Converges</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Ensemble')}}>
                    <View style={styles.view}>
                        <Image 
                            style={styles.grades}
                            source={{url: ''}}
                        />
                            <Text style={styles.convergeText}>Ensembles</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('GFrame')}}>
                    <View style={styles.view}>
                        <Image 
                            style={styles.grades}
                            source={{url: ''}}
                        />
                            <Text style={styles.convergeText}>G-Frames</Text>
                    </View>
                </TouchableOpacity>
            </Content>

            <BottomNavigation/>
        </>
    )
}

const styles= StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    grades: {
        width: '100%',
        height: 200,
        opacity: 0.7,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontFamily: "Bangers-Regular",
        fontWeight: 'bold',
        fontSize: 40,
        borderColor: 'white',
        textAlign: 'center',
        borderWidth: 2,
    },
    convergeText: {
        position: 'absolute',
        color: 'black',
        fontFamily: "Bangers-Regular",
        fontWeight: 'bold',
        fontSize: 40,
        borderColor: 'black',
        textAlign: 'center',
        borderWidth: 2,
    }
})
export default CatalogView;

