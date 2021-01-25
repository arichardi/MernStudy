import React from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuid } from 'uuid'


function ShoppingList () {

    const [items, setItems] = React.useState([
        {id: uuid(), name:'eggs'},
        {id: uuid(), name:'milk'},
        {id: uuid(), name:'steak'},
        {id: uuid(), name:'water'}
    ])
 
    function handleDelete(id){
        const newlist = items.filter( item => item.id !== id)
        setItems(newlist)
    }
   
    return (
        <Container>
            <Button 
            color='dark'
            style={{marginBottom: '2rem'}}
            onClick={ () => {
                const name = prompt('Enter Item')
                if(name){
                    setItems([...items, {id:uuid(), name: name}]);
                }
            }}
            >Add Item</Button>

            <ListGroup>
                <TransitionGroup className='shopping-list' >
                    {items.map(({id, name}) => {
                        return (
                            <CSSTransition key={id} timeout={500} classNames='fade' >
                                <ListGroupItem>
                                    <Button
                                        style={{marginRight: '1rem'}} 
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={() => handleDelete(id)}                                                                 
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


