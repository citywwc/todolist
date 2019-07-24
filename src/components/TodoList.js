import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { changeInputValue, handleClick, handleItemDelete } from '../actions/actionCreators'

const TodoList = (props) => {
    const {inputValue, list, changeInputValue, handleClick, handleItemDelete} = props;
    return (
        <Fragment>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick = {handleClick}>提交</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item,index) => {
                            return <li key={index} onClick={()=> {handleItemDelete(index)}}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeInputValue: e => dispatch(changeInputValue(e)),
    handleClick: () => dispatch(handleClick()),
    handleItemDelete: (index) => dispatch(handleItemDelete(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);