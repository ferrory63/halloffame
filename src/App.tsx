import React, { useEffect, useState } from 'react'
import './App.css'
import { Modal } from './components/modal/modal'
import { Portal } from './components/portal'
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
    const [active, setActive] = useState(false)
    const { users } = useAppSelector((state) => state.users)

    const getUsers = async () => {
        dispatch(fetchUsers())
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div className="wrapper">
                <button onClick={() => setActive(true)}>
                    Добавить пользователя
                </button>
                <TableComp users={users} />
                <Portal wrapper="add">
                    <Modal active={active} setActive={setActive} />
                </Portal>
            </div>
        </>
    )
}

export default App
