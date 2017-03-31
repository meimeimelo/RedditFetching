import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/styles'
import AppButton from '../buttons/btn'

const ListView = ({ title }) => {
  return(
    <View style={styles.listContainer}>
      <Text style={styles.listText}> {title} </Text>
    </View>
  )
}

export default ListView
