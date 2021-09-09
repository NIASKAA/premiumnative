import React from 'react'
import {Header, Left, Body, Right, Title} from 'native-base';

export function HeaderNavi() {
    return (
        <>
            <Header>
                <Left/>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                <Right />
            </Header>
        </>
    )
}
