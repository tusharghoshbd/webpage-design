import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (

    <div >
        <div className="sidenav">
            <div className="main-text">
                <h2>Application<br/> Login Page</h2>
                <p>Login or register from here to access.</p>
            </div>
        </div>
        <div className="main">
            <div className="profile">
                <img className="profile-image" src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket"  />
            </div>
            <div  className="login-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="email"> Email</label>
                        <input type="text" name="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-default"> Login </button>
                </form>
            </div>
           
        </div>
        
        
    </div>
  );
}

export default App;
