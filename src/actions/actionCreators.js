import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const changeInputValue = (e) => ({
    type: CHANGE_INPUT_VALUE,
    value: e.target.value
})

export const handleClick = () => ({
    type: ADD_ITEM
})

export const handleItemDelete = (index) => ({
    type: DELETE_ITEM,
    index
})