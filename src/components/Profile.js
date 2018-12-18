import React from 'react'
import { Link } from 'react-router-dom'


const Profile = () => (
  <div className="page-center">
    <img src="/images/default.jpg" />
    <h1>
      <a href="/messages">See messages</a>
      <Link to="/messages">see messages</Link>
    </h1>
  </div>
)

export default Profile
