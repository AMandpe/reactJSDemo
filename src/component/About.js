import React from 'react'
import Rainbow from '../HOC/Random'

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iste ex enim dolor dolores cumque consequuntur error nisi sed, excepturi repudiandae quidem ducimus unde sunt similique? Beatae voluptates excepturi nesciunt!</p>
    </div>
  )
}

export default Rainbow(About)
