import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
  constructor () {
		super();
		this.state = {
			userId: "",
		};
	}
	/* Life cycles */
	componentWillMount(){
  {/* fetch function all*/}
  
	}
	componentDidMount(){
  {/* function all*/}

	}
    render() {
        return (
         <div className="main container-sg-in">
            <div className="left">
                <h1>Login</h1>
                <p><i>To your Account</i></p>
                  <p className="or"><i>or</i></p>
                      <div className="sg-in-form">
                      <input type="text" className="input-lg user-nm" placeholder="Username"/>
                      <input type="password" className="input-lg pass-nm"  placeholder="Password"/>
                      <button onClick={ this.login } className="btn-sg-in">Login</button>
                      <p className="forgot">Forgot Password?</p>
                      </div>
            </div>
              <div className="right">
                  <h1>Sign Insss</h1>
                  <p><i>with one of your social</i></p>
                  <p><i>profiles</i></p>
                  <div className="social">
                      <button className="twitter"><i className="fa fa-twitter"></i></button>
                      <button className="facebook"><i className="fa fa-facebook"></i></button>
                      <button className="google"><i className="fa fa-google-plus"></i></button>
                      <p className="dont"><i>Don't have an account?</i></p>
                      <p><u>Register</u></p>
                  </div>
              </div>
          </div>
        );
    }

    login () { 
        var token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        axios.post('/sign-in',{
            username: $('.user-nm').val(),
            password: $('.pass-nm').val()
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error.response.data)
        });
    }
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
