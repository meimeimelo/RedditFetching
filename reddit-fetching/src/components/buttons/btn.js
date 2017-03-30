import React, { Component } from 'react'
import { View, Button } from 'react-native'
import styles from '../../styles/styles'

const AppButton = ({ btnTitle, onButtonPress, color }) => {
  return(
    <Button
      style={styles.buttonContainer}
      title={btnTitle}
      onPress={onButtonPress}
      color={color} />
  )
}

export default AppButton
