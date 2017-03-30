import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles'

export default class HeaderContainer extends Component {
  render(){
    return(
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Header Title
          </Text>
        </View>
      </View>
    )
  }
}
