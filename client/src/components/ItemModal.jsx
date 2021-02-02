import React, {Component, useState} from 'react'
import { Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  } from '../redux/reduxIndex'

function ItemModal(){

    const [modal, setModal] = useState(false)
    const [itemAdd, setItemAdd] = useState()


    const toggleModal = () => setModal(!modal);
    
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
                    <Form >
                        <FormGroup>
                            <Label for='item' >Item</Label> 
                            <Input 
                            type='text'
                            name='name'
                            id='item'
                            placeholder='Digit the item'
                            onChange={ (e) => {
                                setItemAdd( e.target.name)
                            }}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal