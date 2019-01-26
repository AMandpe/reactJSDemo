import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flag from '../flag.png'
import { connect } from 'react-redux'

class stateWithRedux extends Component {
  render () {
      console.log('v', this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(ps => {
        return (
          <div className='post card' key={ps.id}>
            <img src={flag} alt='flag' />
            <div className='card-component'>
              <Link to={'/' + ps.id}>
                <span className='card-title red-text'>{ ps.title }</span>
              </Link>
              <p>{ ps.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <p>You have not posts yet</p>
    )
    return (
      <div className='container useOfAxios'>
        <h4 className='center'> Home</h4>
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post
  }
}

export default connect(mapStateToProps)(stateWithRedux)
