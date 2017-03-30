import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles'
import Header from '../../components/headers/header'

export default class HeaderContainer extends Component {
  render(){
    return(
      <View style={styles.headerContainer}>
        <Header title="Header Title"/>
      </View>
    )
  }
}
