import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Container, Button, Text} from 'native-base'

export function CatalogView() {
    return (
        <>
            <Container>
                <Button large full>
                    <Text>High Grades</Text>
                </Button>

                <Button large full>
                    <Text>Real Grades</Text>
                </Button>

                <Button large full>
                    <Text>RE/100 & Other</Text>
                </Button>

                <Button large full>
                    <Text>Master Grades</Text>
                </Button>

                <Button large full>
                    <Text>Perfect Grades</Text>
                </Button>

                <Button large full>
                    <Text>SD Grades</Text>
                </Button>

                <Button large full>
                    <Text>Converges</Text>
                </Button>
            </Container>
        </>
    )
}


