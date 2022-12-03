import React from 'react'
import './App.css'
import { TableComp } from './components/table'

export interface IUsers {
    id: number
    firstName: string
    secondName: string
}

function App() {
    const users: IUsers[] = [{ firstName: 'john', secondName: 'doe', id: 1 }]

    return (
        <div className="App">
            <div className="App">
                <div className="wrapper">
                    <TableComp users={users} />
                </div>
            </div>
        </div>
    )
}

export default App
