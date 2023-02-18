import { View, Text, ScrollView, StyleSheet, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import NavBar from './NavBar'

const App = () => {
  const [isTheme, setIstheme] = useState('light')
  return (
    <SafeAreaView>
      <NavBar isTheme={isTheme} setIsTheme={setIstheme} />
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 15
  },
  logo: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Muli',
    fontSize: 22
  },
  btn: {
    flexDirection: 'row',
    gap: 15
  }
})

export default App
