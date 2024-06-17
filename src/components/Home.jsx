import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Choose Form A or B</h1>
      <Link to="/formA"><button>Form A</button></Link>
      <Link to="/formB"><button>Form B</button></Link>
      <Link to="/formB"><button>Refresh</button></Link>
    </div>
  );
}

export default Home;
