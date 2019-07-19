import React, { Component, Fragment} from 'react';
import { Button, Input, List } from "antd";
import 'antd/dist/antd.css';
import store from '../store';
import { getInputChangeAction, getAddTodoItem, getDeleteTodoItem } from '../store/actionCreators';

class TodoList extends Component {
    constructor(props){
        super(props);
        
        this.state = store.getState();
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }

     render(){
        return (
            <Fragment>
                <div style={{marginTop: '10px'}}>
                    <Input 
                        value={this.state.inputValue} 
                        onChange={this.handleInputValue} 
                        placeholder='TODO' 
                        style={{width: '300px', marginRight: '10px'}}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
                />
            </Fragment>);
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
