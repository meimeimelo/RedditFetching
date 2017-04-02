import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop: 20,
    height: 50,
    backgroundColor: 'lightskyblue',
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
  listContainer: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  listText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  scrollView: {
    height: 500,
  },
})

export default styles
