import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { TableComp } from './components/table'
import { fetchUsers } from './redux/slices/users'
import { useAppDispatch, useAppSelector } from './redux/store'

export interface IUser {
    id: number
    firstName: string
    secondName: string
}

function App() {
    const dispatch = useAppDispatch()
    const { users } = useAppSelector((state) => state.users)

    const getUsers = async () => {
        dispatch(fetchUsers())
    }

    useEffect(() => {
        getUsers()
    }, [])

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
