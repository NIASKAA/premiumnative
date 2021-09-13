import React from 'react'
import {StyleSheet} from 'react-native'
import {Text, Content, H3} from 'native-base'

const FAQView = () => {
    return (
        <Content>
            <H3 style={styles.title}>What are Premium-Bandai's Gunpla?</H3>

            <Text style={styles.paragraph}>
                Premium-Bandai's Gunpla are exclusive Gunplas that can only be ordered online through the 
                official Premium-Bandai website that is dedicated for your region.
            </Text>

            <H3 style={styles.title}>What does this app do?</H3>

            <Text style={styles.paragraph}>
                This app was made solely for anyone to keep track of their inventory of Premium-Bandai. As a
                Gunpla Collector myself, I find it harder to check for specific exclusives so I made this for everyone
                to use. You can save the Gunpla you already owned or you can put it in your wishlist. Mobile App version
                coming soon!
            </Text>

            <H3 style={styles.title}>About Gundam Expos and Gundam Base Limiteds...</H3>

            <Text style={styles.paragraph}>
                You might wonder why those aren't included in the list. Well, those aren't Premium-Bandai's exclusives.
                The problem is that those kind of exclusives are only available when you buy in store. (Not including secondhand)
                There are a few exceptions to the few Gunpla's that were made available to Premium-Bandai, those are included.
            </Text>

            <H3 style={styles.title}>Hey, you missed a few Gunplas in your website! </H3>

            <Text style={styles.paragraph}>
                Sorry in advance if I do ever miss a few Gunplas. Please do email me about it and I will surely add it.
            </Text>
        </Content>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 10
    },
    paragraph: {
        margin: 10
    }
})

export default FAQView
