import React from 'react'
import {TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../components/Footer'
import {Container, Text, Header, Content, Title} from 'native-base'

const CatalogView = () => {
    const navigation = useNavigation()
    return (
        <>
            <Container>
                <Header hasSegment>
                    <Title>Catalog</Title>
                </Header>

                <Content>
                    <TouchableOpacity onPress={() => {navigation.navigate('HighGrades')}}>
                        <Image 
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/hguc-gundam-tr-1-hazenthley-rah-ii_7_asnq0w_ftvyib_djhqyj.jpg'}}
                            style={styles.grades}/>
                            <Text style={styles.text}>High Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('RealGrades')}}>
                        <ImageBackground
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/rg-wings-of-the-sky-effect_1_wd2mdo_gvhjin_ftnrhz.jpg'}}
                        />
                            <Text style={styles.text}>Real Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('RE100Others')}}>
                        <ImageBackground
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/re-100-vigna-ghina-ii-jupiter-battle-ver_1_cah08v_y2cwge_tpfoqy.jpg'}}
                        />
                            <Text style={styles.text}>RE/100 & Other</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('MasterGrades')}}>
                        <ImageBackground
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/mg-maneuver-eclipse-gundam_4_xyhwsi_cwvdw2_idl0g8.jpg'}}
                        />
                            <Text style={styles.text}>Master Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('PerfectGrades')}}>
                        <ImageBackground
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319185/96022e48-f9c7-4086-82ab-a49db6aefa97_raaizt.jpg'}}
                        />
                            <Text style={styles.text}>Perfect Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319185/sd-legend-bb-musha-godmaru-final-battle-ver_1_kdktoq_uh32e8.jpg'}}
                        />
                            <Text style={styles.text}>SD Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.grades}
                            source={{uri: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631319186/dfd_y53xi7_zid8om.jpg'}}
                        />
                            <Text style={styles.convergeText}>Converges</Text>
                    </TouchableOpacity>
                </Content>
            </Container>

            <BottomNavigation/>
        </>
    )
}

const styles= StyleSheet.create({
    grades: {
        width: '100%',
        height: 200
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontFamily: "Bangers-Regular",
        fontWeight: 'bold'
    },
    convergeText: {
        position: 'absolute',
        color: 'black',
        fontFamily: "Bangers-Regular",
        fontWeight: 'bold'
    }
})
export default CatalogView;
