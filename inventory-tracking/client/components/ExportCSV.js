import React, {useState, useRef} from 'react';
import { CSVLink } from 'react-csv';
import {Button} from 'react-bootstrap';

const ExportCSV = (props) => {
    const csvlink = useRef(null);
    const headers = [
        { label: "UID", key:"_id"},
        { label: "Name", key: "name" },
        { label: "Type", key: "type" },
        { label: "Cost", key: "cost" },
        { label: "Created At", key: "createdAt"}
    ];
    const onClick = () =>{
        csvlink.current.link.click();
    }

    return(
        <div>
            <Button variant="info" size="small" onClick={onClick}>
                <span className="glyphicon glyphicon-download-alt"></span>
                <CSVLink 
                data= {props.csvdata}
                headers= {headers}
                filename= 'ProductData.csv' 
                className= "hidden" 
                ref={csvlink}/>
            </Button>
        </div>
    )
}

export default ExportCSV;