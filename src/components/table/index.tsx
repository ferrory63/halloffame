import React from 'react'
import { IUsers } from '../../App'
import { TableRow } from '../tableRow'

interface TableCompProps {
    users: IUsers[]
}

export const TableComp: React.FC<TableCompProps> = ({ users }) => {
    return (
        <table className="table">
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
