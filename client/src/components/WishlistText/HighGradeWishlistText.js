import React from 'react'
import {TouchableHighlight, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'
import {DELETE_HIGHGRADE_WISHLIST} from '../../utils/mutations'


const HighGradeWishlistText = ({highGrades}) => {
    const navigation = useNavigation();
    const [deleteHighGradeWishlist] = useMutation(DELETE_HIGHGRADE_WISHLIST)

    const deleteItem = (id) => {
         try {
             deleteHighGradeWishlist({
                 variables: {
                     highGradeID: id
                 }
             })
         } catch (error) {
             console.log(error)
         } 
    }
    
    return (
        <>
            {highGrades.map((highGrade) => (
                <ListItem highGrade={highGrade} key={highGrade.id}>
                    <TouchableHighlight onPress={() => navigation.navigate('MoreInfoView', highGrade)}>
                        <View>
                            <Text>{highGrade.gunplaName}</Text>
                        </View>
                    </TouchableHighlight>
                </ListItem>
            ))}
        </>
    )
}

export default HighGradeWishlistText
