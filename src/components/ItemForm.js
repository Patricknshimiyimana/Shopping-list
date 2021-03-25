import React from 'react';

import '../css/todo-form.css';

class ItemForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            important: false,
            daily: false,
        }
    }

    handleChange = (e) => {
        if(e.target.type !== "button"){ // handles text inputs
            this.setState({title: e.target.value});
        }else{
            this.setState({[e.target.name]: !this.state[e.target.name]})
        }
    }

    handleSubmit = (e) => {
        if(this.state.title === ''){
            console.log("Please enter a value");
            return;
        };
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: "",
            important: false,
            daily: false,
        })
    }
    render(){
        const {item} = this.state;
        return(
            <form id="todo-form">
                <label htmlFor="title" id="title-input-container">
                    <input id="title" name="title" type="text" placeholder="Add items..." value={item} onChange={this.handleChange} className="dark:bg-gray-600 w-11/12 rounded content-center text-center md:m-8 md:ml-4 shadow-md h-10"  />
                </label>
                
                <button className='' onClick={this.handleSubmit} disabled={!item} > 
                    <svg className="-ml-20" width="22" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M28 14H18V4C18 2.896 17.104 2 16 2C14.896 2 14 2.896 14 4V14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H14V28C14 29.104 14.896 30 16 30C17.104 30 18 29.104 18 28V18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14Z" fill="#83B8F6"/>
                    </svg>    
                </button>
            </form>
        )
    }
}

export default ItemForm;