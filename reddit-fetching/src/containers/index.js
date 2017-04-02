import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import styles from '../styles/styles'
import HeaderContainer from './HeaderContainer/headerContainer'
import ButtonContainer from './ButtonContainer/buttonContainer'
import ListContainer from './ListContainer/listContainer'
import { fetchPostsWithRedux } from '../actions'

class AppContainer extends Component {

  componentDidMount(){
    this.props.fetchData()
  }

  render() {
    return(
      <View>
        <HeaderContainer />
        <ScrollView style={styles.scrollView}>
          <ButtonContainer fetch={this.props.fetchData} />
          <ListContainer posts = {this.props.posts}/>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: () => fetchPostsWithRedux(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
