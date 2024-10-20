import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
        margin: "100px"
    }}>
        <h1>Welcome to your Contact List!</h1>
        <p>Go to
            <Button>
                <Link to="/contacts"> Contacts </Link>
            </Button> 
            to check your contact list.</p>

    </div>
  )
}

export default Home;