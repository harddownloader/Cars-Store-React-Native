import React from 'react'
import {View, Text, Image, } from 'react-native'


export const Product = () => {
    const styles = {
        productImage: {
            width: '300px'
        }
    }
    return(
        <View>
            <Image
                style={styles.productImage}
                // source={{
                // //   uri: 'https://www.teslarati.com/wp-content/uploads/2019/08/tesla-model-3-top-10.jpg',
                
                // }}
                source={require('../../assets/img/tesla-model-3-top-10.jpg')}
            />
            <Text>Product</Text>
        </View>
    )
}