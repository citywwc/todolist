import React, { Fragment } from 'react';
import { Button, Input, List } from "antd";
import 'antd/dist/antd.css';

const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{marginTop: '10px'}}>
                <Input 
                    value={props.inputValue}
                    list = {props.list} 
                    onChange={props.handleInputValue} 
                    placeholder='TODO' 
                    style={{width: '300px', marginRight: '10px'}}
                />
                <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>}
            />
        </Fragment>
    );
}

export default TodoListUI;