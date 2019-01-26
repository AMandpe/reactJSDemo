import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import flag from '../flag.png'

class UseAxios extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log('useOfAxios', this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {          
            this.setState({
                posts: res.data.splice(1, 10)
            })
        })
    }
  render () {
      const { posts } = this.state 
      const postList = posts.length ? (
          posts.map(ps => {
              return (
                  <div className="post card" key={ ps.id }>
                      <img src={ flag } alt="flag" /> 
                      <div className="card-component">
                          <Link to={ '/' + ps.id }>
                            <span className="card-title red-text">{ ps.title }</span>
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

export default UseAxios
