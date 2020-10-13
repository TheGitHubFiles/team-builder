import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form.js'

const initialValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [team, setTeam] = useState([])
  const [teamMember, setTeamMember] = useState(initialValues)

  const submit = (evt) => {

    setTeam([...team, teamMember])
    setTeamMember(initialValues)
  }
  return (
    <>
      <Form submit={submit} teamMember={teamMember} setTeamMember={setTeamMember}></Form>
      {team.map((person) => {
        return (
          <div className='person'>
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.role}</p>
          </div>
        )
      })}
    </>
  );
}

export default App;
