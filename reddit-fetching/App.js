import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './src/styles/styles'
import AppContainer from './src/containers'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}
