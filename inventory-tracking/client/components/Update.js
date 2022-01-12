import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import updateData from '../helpers/updateData'
const Update = (props) => {
    const [_id, setId] = useState(props.invItem._id);
    const [name, setName] = useState(props.invItem.name);
    const [type, setType] = useState(props.invItem.type);
    const [cost, setCost] = useState(props.invItem.cost);
    const [messageFromServer, setMessageFromServer] = useState("");
    const [modalIsOpen, setModelIsOpen] = useState(false);
    const openModal = () => {
        setModelIsOpen(true);
    }
    const closeModal = () => {
        setModelIsOpen(false);
        setMessageFromServer("");
        props.onUpdate();
    }
    
    const onClick = (e) => {
        let newData = {
            "_id" : _id,
            "name" : name,
            "type" : type,
            "cost" : cost 
        }
        Promise.resolve(updateData.updateData(newData)).then(function(response){
            setMessageFromServer(response.message);
        });
    }
    const handleTextChange = (e) =>{
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        if (e.target.name == "type") {
            setType(e.target.value)
        }
        if (e.target.name=="cost"){
            setCost(e.target.value)
        }
    }
    if(messageFromServer == ''){
        return (
            <div>
            <Button variant="warning" size="small" onClick={openModal}><span className="glyphicon glyphicon-edit"></span></Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Add Item"
                className="Modal">
                <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
                    <Button variant="danger" size="mini" onClick={closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
                </Link><br/>
                <fieldset>
                    <label htmlFor="name">Name:</label><input type="text" id="nam   e" name="name" value={name} onChange={handleTextChange}></input>
                    <label htmlFor="type">Type:</label><input type="text" id="type" name="type" value={type} onChange={handleTextChange}></input>
                    <label htmlFor="cost">Cost:</label><input type="number" id="cost" name="cost" value={cost} onChange={handleTextChange}></input>
                </fieldset>
                <div className='button-center'>
                    <br/>
                    <Button variant="success" size="small" onClick={onClick}>Update</Button>
                </div>
            </Modal>
            </div>
        )
    }
    else{
        return (
            <div>
            <Button variant="success" size="small" onClick={openModal}><span className="glyphicon glyphicon-plus"></span></Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Add Item"
                className="Modal">
                <div className='button-center'>
                <h3>{messageFromServer}</h3>
                <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
                    <Button variant="success" size="mini" onClick={closeModal}>Close the Dialog</Button>
                </Link>
            </div>
            </Modal>
            </div>
        )
    }
}

export default Update;