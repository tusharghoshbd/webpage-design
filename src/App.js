import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:"",
            formValidationMsg : {
                email: '',
                password:''
            },
            formValidation: false
        }
    }

    onClickHandler = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState( { [name]: value}, ()=>{
            if(name == 'email'){
                let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                this.setState({ 
                    formValidationMsg: { 
                        ...this.state.formValidationMsg,
                        email : emailValid ? '' : 'Email is invalid'
                    } 
                }, ()=>{this.validateForm()});
            }
            if(name == 'password'){
                this.setState({ 
                    formValidationMsg: { 
                        ...this.state.formValidationMsg,
                        password : value.length >= 6 ? '' : 'Password is too short'
                    } 
                }, ()=>{this.validateForm()});
            }
        } )
    }

    validateForm = () => {
        if(this.state.email != '' && this.state.password !== ''){
            if(this.state.formValidationMsg.email == '' && this.state.formValidationMsg.password == ''){
                this.setState({formValidation : true});
            }
            else{
                this.setState({formValidation : false});
            }
        }
        else{
            this.setState({formValidation : false});
        }
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
                            <div className={  this.state.formValidationMsg.email == '' ? 'form-group': 'form-group has-feedback has-error' }>
                                <label htmlFor="email"> Email </label>
                                <input type="text" onChange={ e => this.onClickHandler(e) } name="email" value={ this.state.email } className="form-control" id="email" />
                                <div className="help-block">
                                    {this.state.formValidationMsg.email}
                                </div>
                            </div>
                            <div className={ this.state.formValidationMsg.password == '' ? 'form-group ': 'form-group has-feedback has-error' }>
                                <label htmlFor="password"> Password</label>
                                <input type="password" name="password" onChange={(e)=>{this.onClickHandler(e)}} value={this.state.password} className="form-control" id="password" />
                                <div className="help-block">
                                    {this.state.formValidationMsg.password}
                                </div>
                            </div>
                            
                            <button type="submit" disabled={!this.state.formValidation}  className="btn btn-default"> Login </button>
                        </form>
                    </div>
                
                </div>
            </div>
        );
    }

    
}

