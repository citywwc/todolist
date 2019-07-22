import React, { Component} from 'react';

import TodoListUI from './TodoListUI'

import store from '../store';
import { getTodoList, getInputChangeAction, getAddTodoItem, getDeleteTodoItem } from '../store/actionCreators';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

     render(){
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputValue = {this.handleInputValue}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}

            />);
     }

     componentDidMount(){
        const action = getTodoList();
        store.dispatch(action);
     }

     handleInputValue(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
     }

     handleBtnClick(){
        const action = getAddTodoItem();
        store.dispatch(action);
     }

    handleItemDelete(index){
        const action = getDeleteTodoItem(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }


}

export default TodoList;
