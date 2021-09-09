import React from 'react'
import {Footer, FooterTab, Button, Text} from 'native-base'

export function Navigation() {
    return (
        <>
            <Footer>
                <FooterTab>
                    <Button>
                        <Text>Catalog</Text>
                    </Button>
                    <Button>
                        <Text>User</Text>
                    </Button>
                    <Button>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </>
    )
}