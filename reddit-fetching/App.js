import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Text, View } from 'react-native'
import styles from './src/styles/styles'
import AppContainer from './src/containers'
import reducer from './src/reducers'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}
