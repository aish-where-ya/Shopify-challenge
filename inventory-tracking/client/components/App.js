import '../css/App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import getData from '../helpers/getData';
import Add from './Add';
import Update from './Update';
import Delete from'./Delete';

const App = () => {
  const [data,setData] = useState([]);

  const fetchData = () => {
    getData.getData().then((data)=>{
      if (data==undefined){
        data = {'inventory':[]}
      }
      console.log(data['inventory'])
      setData(data['inventory'])});
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      <Add onAdd={fetchData}/>
      <table>
        <thead>
          <tr><th></th><th className='button-col'>Name</th><th className='button-col'>Type</th><th className='button-col'>Cost</th><th className='button-col'>Update</th><th className='button-col'>Delete</th></tr>
        </thead>
        <tbody>
          {
            data.map(function(exp){
              return  <tr key={exp._id}><td className='counterCell'></td><td className='button-col'>{exp.name}</td><td className='button-col'>{exp.type}</td><td className='button-col'>{exp.cost}</td><td className='button-col'><Update invItem={exp} onUpdate={fetchData} /></td><td className='button-col'><Delete invItemId={exp._id} onDelete={fetchData}/></td></tr>
            })
          }
          </tbody>
      </table>
    </div>
  );
}

export default App;
