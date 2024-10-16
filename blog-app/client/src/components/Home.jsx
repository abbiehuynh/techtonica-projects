import React from 'react';
import ListPosts from './ListPosts';

const Home = () => {
  return (
    <div>
    <h1 style={{ textAlign: 'center', paddingTop: '20px'}}> Welcome to PetPost</h1>
    <ListPosts />
    </div>
  )
}

export default Home