import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list: []
        };
        this.handleIinputValue = this.handleIinputValue.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

     render(){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleIinputValue} placeholder='TODO'/>
                    <button onClick={this.handleBtnClick}>Submit</button>
                </div>
                <ul>
                   {this.getTodoItem()}
                </ul>
            </Fragment>);
     }

     getTodoItem() {
        return(
            this.state.list.map((item, index) => {
                return (
                        <TodoItem
                            content = { item }
                            index = { index }
                            deleteItem = {this.hanleItemDelete}
                        />

            )
           })
        )
     }

     handleIinputValue(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
     }

     handleBtnClick(e){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
     }

    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }


}

export default TodoList;
