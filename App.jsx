import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from './NavBar'



const App = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "black",
      }}>
      <View>
        <Text style={{ color: "white" }}>App</Text>
      </View>
      {/* <Hello /> */}
      <NavBar />
    </ScrollView>
  )
}

export default App
