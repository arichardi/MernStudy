import React, { useState} from 'react'
import { Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addItems } from '../redux/reduxIndex'
import { v4 as uuid } from 'uuid'
import {  } from '../redux/reduxIndex'

function ItemModal(){

    const [modal, setModal] = useState(false)
    const [itemAdd, setItemAdd] = useState('')

    const dispatch = useDispatch()

    const toggleModal = () => setModal(!modal);

    const onChange = (e) => {
        setItemAdd(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name: itemAdd
        }
        //add item via dispatch
        dispatch(addItems(newItem))
        //close the modal
        toggleModal();

    }
    
    return (
        <div>
            <Button
                color='dark'
                style={ { marginBottom: '2rem',}}
                onClick = {toggleModal}
            >Add Item</Button>

            <Modal
                isOpen={modal}
                toggle={toggleModal}
            >
                <ModalHeader toggle={toggleModal} >Add to List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit} >
                        <FormGroup>
                            <Label for='item' >Item</Label> 
                            <Input 
                            type='text'
                            name='name'
                            id='item'
                            placeholder='Digit the item'
                            onChange={onChange}
                            />
                        </FormGroup>
                    <Button color='primary' style={{marginRight: '1rem'}}>Add to the list</Button>
                    <Button color='secondary' onClick={toggleModal}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal