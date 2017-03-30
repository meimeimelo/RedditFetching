import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop: 20,
    height: 50,
    backgroundColor: 'skyblue',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  buttonContainer: {
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'skyblue'
  },
})

export default styles
