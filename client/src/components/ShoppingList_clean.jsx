import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../redux/reduxIndex'


function ShoppingList () {


    const dispatch = useDispatch()
    useEffect( () => { dispatch(getItems()) }, [])

    const listItems = useSelector( (state) => state.items)
  
   
    return (
      <h2>Teste</h2>
      
    )
}

export default ShoppingList


