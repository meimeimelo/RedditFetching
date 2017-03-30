import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import styles from '../../styles/styles'
import AppButton from '../../components/buttons/btn'

onButtonPress = () => {
  Alert.alert('Button is clicked!')
}

export default class ButtonContainer extends Component {
  render(){
    return(
      <View>
        <View style={styles.buttonContainer}>
          <AppButton
            btnTitle="button1"
            onButtonPress={onButtonPress}
            color="skyblue" />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            btnTitle="button1"
            onButtonPress={onButtonPress}
            color="skyblue" />
        </View>
      </View>
    )
  }
}
