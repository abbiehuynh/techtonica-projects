import React from 'react';
import '../App.css';

const Profile = () => {
  return (
    // to do: create users table and use data to show information here
    <div id="profile-card">
      <div id="profile-container1">
        <img src='/src/assets/oliver-pfp.jpg' style={{height: '400px'}} id="pfp"></img>
        <div id="bio">
          <h1> Oliver </h1>
          <h2> he/him </h2>
          <p>status: sleeping, of course! </p>
        </div>
      </div>

      <div id="profile-container2">
        <div id="my-posts">
          My Posts
          <div >

          </div>
        </div>

        <div id="my-comments">
          My Comments
        </div>
      </div>


    </div>
  )
}

export default Profile