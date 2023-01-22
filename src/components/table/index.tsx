import React from 'react'
import { IUser } from '../../App'
import { TableRow } from '../tableRow'
import './style.css'

interface TableCompProps {
    users: IUser[]
}

export const TableComp: React.FC<TableCompProps> = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((obj) => {
                    return (
                        <TableRow
                            key={obj.id}
                            id={obj.id}
                            firstName={obj.firstName}
                            secondName={obj.secondName}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}
