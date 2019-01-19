import React from 'react'

const Contact = (props) => {
  console.log(props)
  setTimeout(() => {
    props.history.push('/about')
  }, 2000)

  return (
    <div className='container'>
      <h4 className='center'> Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iste ex enim dolor dolores cumque consequuntur error nisi sed, excepturi repudiandae quidem ducimus unde sunt similique? Beatae voluptates excepturi nesciunt!</p>
    </div>
  )
}

export default Contact
