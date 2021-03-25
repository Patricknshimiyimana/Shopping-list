import React from 'react';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notesOpen: false,
            notesInputFocus: false,
            notesInput: this.props.details.notes
        }
    }

    handleDelete = () => {
        this.props.deleteTodo(this.props.details.id);
        
    }

    handleToggleComplete = () => {
        this.props.toggleCompleteTodo(this.props.details.id);
    }

    toggleNotes = () => {
        this.setState(state => ({
            notesOpen: !state.notesOpen
        }))
    }

    handleChange = (e) => {
        this.setState({
            notesInput: e.target.value
        })
    }

    handleNotesClick = (e) => {

        const notesInput = e.target.parentElement.children[1];
        this.setState({notesInputFocus: true}, () => {
            notesInput.focus();
            // Puts cursor on the end of input
            notesInput.setSelectionRange(notesInput.value.length, notesInput.value.length);
        });
    }

    handleBlur = () => {
        this.setState({notesInputFocus: false});
        this.props.updateNotes(this.props.details.id, this.state.notesInput);
    }

    render(){
        const {title, important, daily, completed} = this.props.details;
        return(
            
            <div className="dark:bg-gray-600 md:w-6/12 rounded p-2 md:ml-32  mb-2 shadow-md h-10 text-gray-700 dark:text-gray-300 flex justify-between" style={{fontWeight: important ? "bolder" : "normal"}}>
                <button onClick={this.handleToggleComplete}
                    className={completed ? "fas fa-check checkbox-checked" : " fas fa-check checkbox"}
                >
                    {/* <input onClick={this.handleToggleComplete} type="checkbox" class="w-6 h-8 -mt-1 mr-32 rounded-sm" /> */}
                </button>
                <span className="todo-title">{title}{daily ? <i className="fas fa-calendar-alt daily-mark"></i> : null}</span>
                <button onClick={this.handleDelete} className='border-none' >
                <svg width="20" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M6.19998 3.50001L3.49998 6.20001C2.79998 6.90001 2.79998 8.10001 3.49998 8.90001L12.7 18.1L3.49998 27.3C2.79998 28 2.79998 29.2 3.49998 30L6.09998 32.6C6.79998 33.3 7.99998 33.3 8.79998 32.6L18 23.4L27.2 32.6C27.9 33.3 29.1 33.3 29.9 32.6L32.5 30C33.2 29.3 33.2 28.1 32.5 27.3L23.3 18L32.5 8.80001C33.2 8.10001 33.2 6.90001 32.5 6.10001L29.9 3.50001C29.2 2.80001 28 2.80001 27.2 3.50001L18 12.7L8.79998 3.50001C8.09998 2.80001 6.89998 2.80001 6.19998 3.50001Z" fill="#83B8F6"/>
             </svg> 
             </button>
                
            </div>
        )
    }
}

export default TodoItem;