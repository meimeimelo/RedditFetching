import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles'
import ListView from '../../components/lists/list'

export default class ListContainer extends Component {
  render() {
    const { posts } = this.props

    return(
      <View>
        { posts ? posts.map((post, index) => <ListView key={index} title={post.data.title} />) : <ListView title={'Loading...'}/> }
      </View>
    )
  }
}
