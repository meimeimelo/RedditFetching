import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import styles from '../../styles/styles'
import AppButton from '../../components/buttons/btn'

onButtonPress = () => {
  Alert.alert('You clicked the Button!')
}

export default class ButtonContainer extends Component {
  render(){
    return(
      <View>
        <View style={styles.buttonContainer}>
          <AppButton
            btnTitle="Some Button"
            onButtonPress={onButtonPress}
            color="skyblue" />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            btnTitle="Do Something"
            onButtonPress={onButtonPress}
            color="skyblue" />
        </View>
      </View>
    )
  }
}
