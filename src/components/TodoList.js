import React, { Component, Fragment} from 'react';
import { Button, Input } from "antd";
import 'antd/dist/antd.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list: []
        };
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

     render(){
        return (
            <Fragment>
                <div>
                    <Input value={this.state.inputValue} onChange={this.handleInputValue} placeholder='TODO'/>
                    <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
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
                    key = { item }
                    content = { item }
                    index = { index }
                    deleteItem = {this.handleItemDelete}
                  />

            )
           })
        )
     }

     handleInputValue(e){
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
