import React, { useEffect } from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {useDispatch, useSelector} from 'react-redux'
import { getItems, deleteItems } from '../redux/reduxIndex'



function ShoppingList () {

const dispatch = useDispatch()
useEffect( () => { dispatch(getItems) },[])
 
const items = useSelector( (state) => state.item)
console.log(items.items)
/*     function handleDelete(id){
        const newlist = items.filter( item => item.id !== id)
        setItems(newlist)
    } */
   
    return (
        <Container>

            <ListGroup>
                <TransitionGroup className='shopping-list' >
                    {items.items.map(({id, name}) => {
                        return (
                            <CSSTransition key={id} timeout={500} classNames='fade' >
                                <ListGroupItem>
                                    <Button
                                        style={{marginRight: '1rem'}} 
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={ () => {dispatch(deleteItems(id))}}                                                                 
                                    >&times;</Button>
                                    {name}
                                    </ListGroupItem>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default ShoppingList


