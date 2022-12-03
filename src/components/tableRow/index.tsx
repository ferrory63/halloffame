import React from 'react'

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
                <div>
                    <div>
                        <img
                            width={20}
                            height={20}
                            src="/icons/edit.svg"
                            alt="edit"
                        />
                    </div>
                    <div>
                        <img
                            width={20}
                            height={20}
                            src="/icons/delete.svg"
                            alt="delete"
                        />
                    </div>
                </div>
            </td>
        </tr>
    )
}
