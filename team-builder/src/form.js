import React, { useState } from 'react'





export default function Form(props) {

    const { teamMember, setTeamMember, submit } = props

    const doSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const change = (evt) => {
        const { name, value } = evt.target
        setTeamMember({ ...teamMember, [name]: value })
    }
    return (
        <div>
            <h1>Team Form</h1>
            <form onSubmit={doSubmit}>
                <input
                    name='name'
                    type='text'
                    value={teamMember.name}
                    onChange={change}
                    placeholder="enter name"
                />

                <input
                    name='email'
                    type='email'
                    value={teamMember.email}
                    onChange={change}
                    placeholder="enter email"
                />
                <select
                    name='role'
                    value={teamMember.role}
                    onChange={change}>
                    <option>select role</option>
                    <option>designer</option>
                    <option>manager</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}