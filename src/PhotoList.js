import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PhotoDetailContainer extends Component {
  constructor() {
    super()
    this.state = {
      photo: {}
    }
  }
  componentDidMount() {

  fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
    method: 'get',
  })
  .then(response => response.json())
  .then(photos) => {
      this.setState({photos:photos})
  })
}

  render() {
    const { photo } = this.state
    console.log(photo)
    let content
    if (!photo || !photo.id) {
      content = <Loading />
    } else {
      content = <PhotoDetail photo={photo} />
    }
    return content
  }
}


export default PhotoList