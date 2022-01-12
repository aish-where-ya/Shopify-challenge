import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import deleteData from '../helpers/deleteData'
const Delete = (props) => {
    const [_id, setId] = useState(props.invItemId);
    const onClick = (e) => {
        let newData = {
            "_id" : _id,
        }
        Promise.resolve(deleteData.deleteData(newData)).then(function(response){
            props.onDelete();
        });  
    }
    return (
        <Button variant="danger" size="small" onClick={onClick}>
            <span className="glyphicon glyphicon-remove"></span>
        </Button>
    )
}
export default Delete;