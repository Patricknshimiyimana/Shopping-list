import React from 'react';
import Toggle from './toggle';

//AUTH
import {auth} from '../service/firebase';

//CSS
import '../css/header.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            hideForm: true,
            formMode: '',
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user){
                // this.setState({ userLoggedIn: true})
                this.updateAuthStatus(true);
            }else{
                // this.setState({ userLoggedIn: false});
                this.updateAuthStatus(false);
            }
        });
    }

    updateAuthStatus = (value) => {
        this.props.updateAuthStatus(value);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        if(this.state.formMode === "Sign Up"){
            this.signUp();
        }else if(this.state.formMode === "Log In"){
            this.signIn();
        }
        this.setState({
            email: '',
            password: '',
            hideForm: true,
            formMode: ''
        })
        
    }

    signUp = () => {
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCred => {
            console.log("Sign Up Successful");
        });
    }

    signIn = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => console.log("Log In Successful"));
    }

    logOut = () => {
        auth.signOut()
        .then(() => console.log("Logged Out"));
    }

    openForm = (mode) => {
        if(mode === "signUp"){
            this.setState({
                hideForm: false,
                formMode: "Sign Up"
            })
        }else if(mode === "logIn"){
            this.setState({
                hideForm: false,
                formMode: "Log In"
            })
        }else if(mode === "logOut"){
            this.logOut();
        }
    }


    render(){
        const currentUser = auth.currentUser;
        const authLinks = this.props.userLoggedIn ? 
            [<li key="user" className="navbar-button fas fa-user " id="navbar-user-info">
                <div>
                    <span>Signed in as:</span>
                    <span>{currentUser.email}</span>
                </div>
            </li>,
            <li key="logOut" className="navbar-button dark:text-gray-300 " onClick={() => this.openForm("logOut")}>Log Out</li>] 
            : 
            [<li key="signUp" className="navbar-button " onClick={() => this.openForm("signUp")}><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 md:px-4 border border-blue-500 hover:border-transparent rounded"> SIGN UP </button></li>,
            <li key="signIn" className="navbar-button " onClick={() => this.openForm("logIn")}><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 md:px-4 border border-blue-500 hover:border-transparent rounded"> SIGN IN </button> </li>];

        return(
            <header className="flex justify-between text-gray-700 bg-gray-200 dark:bg-gray-900 body-font">
                
               <a
            href="javascript.void(0)"
            className="flex md:justify-center items-center w-40 mb-4 font-bold text-gray-700 dark:text-gray-200 title-font md:mb-0"
          >
           <svg width="45" height="35" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1667 48.75C18.6675 48.75 15.865 51.174 15.865 54.1667C15.865 57.1594 18.6675 59.5833 22.1667 59.5833C25.6658 59.5833 28.5 57.1594 28.5 54.1667C28.5 51.174 25.6658 48.75 22.1667 48.75ZM3.16666 5.41666V10.8333H9.49999L20.8842 31.376L16.6092 38.0114C16.1183 38.7969 15.8333 39.6771 15.8333 40.625C15.8333 43.6177 18.6675 46.0417 22.1667 46.0417H60.1667V40.625H23.5125C23.0692 40.625 22.7208 40.3271 22.7208 39.9479C22.7208 39.826 22.7525 39.7177 22.8158 39.6229L25.65 35.2083H49.2417C51.6167 35.2083 53.6908 34.0844 54.7833 32.4187L66.1042 14.8417C66.3575 14.4625 66.5 14.0156 66.5 13.5417C66.5 12.0385 65.075 10.8333 63.3333 10.8333H16.5142L13.5058 5.41666H3.16666ZM53.8333 48.75C50.3342 48.75 47.5317 51.174 47.5317 54.1667C47.5317 57.1594 50.3342 59.5833 53.8333 59.5833C57.3325 59.5833 60.1667 57.1594 60.1667 54.1667C60.1667 51.174 57.3325 48.75 53.8333 48.75Z" fill="#83B8F6"/>
           </svg>

              Shopping
          </a>

          <div className="justify-center md:mr-20 mt-2 ">
          <Toggle />
        </div>

                <nav id="navbar">
                    <ul id="navbar-list">
                        {authLinks}
                    </ul>
                </nav>
                <div id="auth-form-container"  style={{display: this.state.hideForm ? "none" : "block"}}>
                    <div id="auth-form">
                        <i className="fas fa-times" id="close-auth-form" onClick={() => this.setState({hideForm: true, formMode: ''})}></i>
                        <h1 id="auth-form-title">{this.state.formMode}</h1>
                            
                            <input 
                                placeholder="Email" 
                                value={this.state.email} 
                                type="email" name="email" 
                                // className="auth-form-input"
                                onChange={this.handleChange} 
                                className="bg-gray-600 w-9/12 md:w-6/12 rounded content-center text-center m-4 md:ml-4 shadow-md h-10"  />
                           
                             <input  
                                placeholder="Password" 
                                value={this.state.password} 
                                type="password" name="password" 
                                // className="auth-form-input"
                                onChange={this.handleChange} 
                                className="bg-gray-600 w-9/12 md:w-6/12 rounded content-center text-center m-4 md:ml-4 shadow-md h-10"  />
                            <button onClick={this.handleSubmit} id="auth-form-button" className="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-24 border border-blue-500 hover:border-transparent rounded"> {this.state.formMode} </button>
                    </div>
                </div>
               
            </header>
        )
    }
}

export default Header;