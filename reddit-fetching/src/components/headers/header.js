import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/styles'

export default class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Header Title
        </Text>
      </View>
    )
  }
}
