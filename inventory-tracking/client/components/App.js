import '../css/App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add'

const App = () => {
  const [data,setData] = useState("");
  return (
    <div>
      <Add/>
      <table>
        <thead>
          <tr><th></th><th className='desc-col'>ID</th><th className='button-col'>Name</th><th className='button-col'>Type</th><th className='button-col'>Cost</th></tr>
        </thead>
        <tbody>
          {/* {
            data.map(function(exp){
              return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.id}</td><td className='button-col'>{exp.name}</td><td className='button-col'>{exp.type}</td><td className='button-col'>{exp.cost}</td></tr>
            })
          } */}
          </tbody>
      </table>
    </div>
  );
}

export default App;
