import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';

const initialTeam = [
  {id: uuid(), fname: 'Jay', lname: 'Leach' },
  {id: uuid(), fname: 'Andrew', lname: 'Park' },
  {id: uuid(), fname: 'Shawn', lname: 'Rice' },
  {id: uuid(), fname: 'John', lname: 'Daly' },
  {id: uuid(), fname: 'David', lname: 'Davis' },
  {id: uuid(), fname: 'Wayne', lname: 'Last' },
  {id: uuid(), fname: 'Shawn', lname: 'Elston' }
]

function App() {
const [team, setTeam] = useState(initialTeam);



  return (
    <div className="App">
      <h3>List of Team Members:</h3>
      {
        team.map(team => <div key={team.id}>{team.fname} {team.lname}</div>)
      }
    </div>
  );
}

export default App;
