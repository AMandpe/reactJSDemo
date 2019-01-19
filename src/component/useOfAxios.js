import React, { Component } from 'react'
import axios from 'axios'

class UseAxios extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {          
            this.setState({
                posts: res.data.splice(1, 10)
            })
        })
    }
  render () {
      const { posts } = this.state 
      console.log(posts)
      const postList = posts.length ? (
          posts.map(ps => {
              return (
                  <div className="post card" key={ ps.id }>
                      <div className="card-component">
                          {/* <span className="card-title">{ postList.title }</span> */}
                          <p>{ postList.body }</p>
                      </div>
                  </div>
              )
          })
      ) : (
          <p>You have not posts yet</p>
      )
    return (
      <div className='container'>
        <h4 className='center'> Home</h4>
        { postList }
      </div>
    )
  }
}

export default UseAxios
