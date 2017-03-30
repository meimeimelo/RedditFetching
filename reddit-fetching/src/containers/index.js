import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/styles'
import HeaderContainer from './HeaderContainer/headerContainer'
import ButtonContainer from './ButtonContainer/buttonContainer'
import ListContainer from './ListContainer/listContainer'

export default class AppContainer extends Component {
  render() {
    return(
      <View>
        <HeaderContainer />
        <ButtonContainer />
        <ListContainer />
      </View>
    )
  }
}
