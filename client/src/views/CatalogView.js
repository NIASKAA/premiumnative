import React from 'react'
import {TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../components/Footer'
import {Container, Text, Header, Content, Title} from 'native-base'

const CatalogView = () => {
    return (
        <>
            <Container>
                <Header hasSegment>
                    <Title>Catalog</Title>
                </Header>

                <Content>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>High Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>RE/100 & Other</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>Real Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>Master Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>Perfect Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>SD Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.highGrades}
                            source={{uri: ''}}
                        />
                            <Text style={{color: 'black'}}>Converges</Text>
                    </TouchableOpacity>
                </Content>
            </Container>

            <BottomNavigation/>
        </>
    )
}

const styles= StyleSheet.create({
    highGrades: {
        width: '100%',
        height: '10%'
    }
})
export default CatalogView;

