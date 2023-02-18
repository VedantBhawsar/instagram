import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import Icon from 'react-native-vector-icons/Foundation';



const NavBar = (props) => {
    const { isTheme, setIsTheme } = props
    console.log(props)

    // const [isTheme, setIstheme] = useState('light')

    return (
        <View style={styles.darkContainer}>
            {/* <Hello /> */}
            <Text style={styles.logo}>Ig-Clone</Text>
            <View style={styles.btns}>
                <View style={styles.btn}>
                    <Text style={{ color: 'white' }}>L</Text>
                </View>
                <View style={styles.btn}>
                    <Icon name="heart" size={25} color="white"
                    />
                </View>
                <View style={styles.btn}>
                    <Text style={{ color: 'white' }}>L</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    darkContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '25%',
        fontFamily: 'Sacramento-Regular',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    logo: {
        color: 'white',
        fontWeight: '700',
        fontFamily: 'Muli',
        fontSize: 24,
        alignItems: 'center',

    },
    btns: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 10
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        borderRadius: 4
    }
})

export default NavBar