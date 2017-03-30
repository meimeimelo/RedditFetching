import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styles from '../styles/styles'
import HeaderContainer from './HeaderContainer/headerContainer'
import ButtonContainer from './ButtonContainer/buttonContainer'
import ListContainer from './ListContainer/listContainer'

class AppContainer extends Component {

  componentDidMount(){
    this.props.fetchPostsWithRedux()
  }

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

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect((mapStateToProps),{ fetchPostsWithRedux })(AppContainer)
