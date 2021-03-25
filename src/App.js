import React from 'react';
import Typing from 'react-typing-animation';

//components
import Header from './components/Header';
import ItemContainer from './components/ItemContainer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userLoggedIn: false, // user logged in state, controlled at header, where sign up, login buttons are at
    }
  }

  updateAuthStatus = (value) => {
    this.setState({userLoggedIn: value})
  }
  
  render(){
    return (
      <div className="w-screen h-screen text-center dark:bg-gray-700 dark:text-gray-300">
         <Header title="Shopping list" updateAuthStatus={this.updateAuthStatus} userLoggedIn={this.state.userLoggedIn}/>
        {this.state.userLoggedIn ? <ItemContainer /> : <h2 className=""> <Typing>
           <span className="text-gray-700 dark:text-gray-300 font-bold text-7xl md:text-8xl">   Welcome to Your shopping list, Sign in to continue </span>
          <Typing.Backspace  />
        </Typing> 
        <div className="flex justify-center">
  <svg className="" width="155" height="215" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1667 48.75C18.6675 48.75 15.865 51.174 15.865 54.1667C15.865 57.1594 18.6675 59.5833 22.1667 59.5833C25.6658 59.5833 28.5 57.1594 28.5 54.1667C28.5 51.174 25.6658 48.75 22.1667 48.75ZM3.16666 5.41666V10.8333H9.49999L20.8842 31.376L16.6092 38.0114C16.1183 38.7969 15.8333 39.6771 15.8333 40.625C15.8333 43.6177 18.6675 46.0417 22.1667 46.0417H60.1667V40.625H23.5125C23.0692 40.625 22.7208 40.3271 22.7208 39.9479C22.7208 39.826 22.7525 39.7177 22.8158 39.6229L25.65 35.2083H49.2417C51.6167 35.2083 53.6908 34.0844 54.7833 32.4187L66.1042 14.8417C66.3575 14.4625 66.5 14.0156 66.5 13.5417C66.5 12.0385 65.075 10.8333 63.3333 10.8333H16.5142L13.5058 5.41666H3.16666ZM53.8333 48.75C50.3342 48.75 47.5317 51.174 47.5317 54.1667C47.5317 57.1594 50.3342 59.5833 53.8333 59.5833C57.3325 59.5833 60.1667 57.1594 60.1667 54.1667C60.1667 51.174 57.3325 48.75 53.8333 48.75Z" fill="#83B8F6"/>
           </svg>

           <svg className="" width="155" height="215" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1667 48.75C18.6675 48.75 15.865 51.174 15.865 54.1667C15.865 57.1594 18.6675 59.5833 22.1667 59.5833C25.6658 59.5833 28.5 57.1594 28.5 54.1667C28.5 51.174 25.6658 48.75 22.1667 48.75ZM3.16666 5.41666V10.8333H9.49999L20.8842 31.376L16.6092 38.0114C16.1183 38.7969 15.8333 39.6771 15.8333 40.625C15.8333 43.6177 18.6675 46.0417 22.1667 46.0417H60.1667V40.625H23.5125C23.0692 40.625 22.7208 40.3271 22.7208 39.9479C22.7208 39.826 22.7525 39.7177 22.8158 39.6229L25.65 35.2083H49.2417C51.6167 35.2083 53.6908 34.0844 54.7833 32.4187L66.1042 14.8417C66.3575 14.4625 66.5 14.0156 66.5 13.5417C66.5 12.0385 65.075 10.8333 63.3333 10.8333H16.5142L13.5058 5.41666H3.16666ZM53.8333 48.75C50.3342 48.75 47.5317 51.174 47.5317 54.1667C47.5317 57.1594 50.3342 59.5833 53.8333 59.5833C57.3325 59.5833 60.1667 57.1594 60.1667 54.1667C60.1667 51.174 57.3325 48.75 53.8333 48.75Z" fill="#83B8F6"/>
           </svg>
  </div> </h2>}
      
      
      </div>
    );
  }
  
}

export default App;
