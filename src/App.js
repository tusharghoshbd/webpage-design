import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:""
        }
    }

    onClickHandler = (e)=>{
        this.setState( { [e.target.name]: e.target.value} )
    }
    onLoginSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div>
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
                        <form  onSubmit={this.onLoginSubmit}>
                            <div className="form-group  has-error has-feedback">
                                <label htmlFor="email"> Email </label>
                                <input type="text" onChange={ e => this.onClickHandler(e) } name="email" value={ this.state.email } className="form-control" id="email" />
                                <div className="help-block">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"> Password</label>
                                <input type="password" name="password" onChange={(e)=>{this.onClickHandler(e)}} value={this.state.password} className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-default"> Login </button>
                        </form>
                    </div>
                
                </div>
            </div>
        );
    }

    
}

