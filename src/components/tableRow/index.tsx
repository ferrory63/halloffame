import React, { useState } from 'react'

import { ModalDelete } from '../modalDelete'
import { ModalEdit } from '../modalEdit'
import { Portal } from '../portal'
import './style.css'

interface TableRowProps {
    id: number
    firstName: string
    secondName: string
}

export const TableRow: React.FC<TableRowProps> = ({
    firstName,
    secondName,
    id,
}) => {
    const [deleteShow, setDeleteShow] = useState(false)
    const [editShow, setEditShow] = useState(false)

    return (
        <tr>
            <th>
                <img
                    width={20}
                    height={20}
                    src="/icons/photo.svg"
                    alt="profilepic"
                />
            </th>
            <td>{firstName}</td>
            <td>{secondName}</td>
            <td>
                <div className="buttons_block">
                    <div>
                        <img
                            width={20}
                            height={20}
                            src="/icons/edit.svg"
                            alt="edit"
                            onClick={() => setEditShow(true)}
                        />
                    </div>
                    <div>
                        <img
                            width={20}
                            height={20}
                            src="/icons/delete.svg"
                            alt="delete"
                            onClick={() => setDeleteShow(true)}
                        />
                        <Portal wrapper="del">
                            <ModalDelete
                                active={deleteShow}
                                setActive={setDeleteShow}
                                id={id}
                            />
                        </Portal>
                        <Portal wrapper="edit">
                            <ModalEdit
                                active={editShow}
                                setActive={setEditShow}
                                id={id}
                                firstName={firstName}
                                secondName={secondName}
                            />
                        </Portal>
                    </div>
                </div>
            </td>
        </tr>
    )
}
