import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import styles from '../../styles/styles'
import AppButton from '../../components/buttons/btn'

onButtonPress = () => {
  Alert.alert('You clicked the Button!')
}

export default class ButtonContainer extends Component {
  render(){
    const { fetch } = this.props

    return(
      <View style={styles.buttonContainer}>
        <View style={styles.buttonItems}>
          <AppButton
            btnTitle="Reload"
            onButtonPress={fetch}
            color="skyblue" />
        </View>
        <View style={styles.buttonItems}>
          <AppButton
            btnTitle="Clear"
            onButtonPress={onButtonPress}
            color="skyblue" />
        </View>
      </View>
    )
  }
}
