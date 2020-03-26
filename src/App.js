import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Form from './Form';

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
const [formValues, setFormValues] = useState({
  fname: '', 
  lname: '',
  email: '',
  position: '',
})
const onInputChange = event => {
  const inputThatChanged = event.target.name
  const newValueForInput = event.target.value
  setFormValues({
    ...formValues,
    [inputThatChanged]: newValueForInput,
  })
}
const onFormSubmit = event => {
  event.preventDefault()
  const newTeam = {
    id: uuid(),
    fname: formValues.fname,
    lname: formValues.lname,
    email: formValues.email,
    position: formValues.position,
  }
  setTeam([...team, newTeam])
}



  return (
    <div className="App">
      <h3>List of Team Members:</h3>
      {
        team.map(team => <div key={team.id}>{team.fname} {team.lname}</div>)
      }
      <Form 
      onInputChange={onInputChange}
      formValues={formValues}
      onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default App;
