import React, { Dispatch, SetStateAction } from 'react'
import { removeUser } from '../../redux/slices/users'
import { useAppDispatch } from '../../redux/store'
import { DeleteFromServer } from '../../utils/utils'
import './style.css'

interface ModalDeleteProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    id: number
}

export const ModalDelete: React.FC<ModalDeleteProps> = ({
    active,
    setActive,
    id,
}) => {
    const dispatch = useAppDispatch()

    const onDelete = (id: number) => {
        DeleteFromServer(id)
        dispatch(removeUser(id))
    }

    return active ? (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className="modal--content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal--wrapper--title">
                    <h1 className="modal--title">Удалить пользователя {id}?</h1>
                </div>
                <div className="modal--wrapper-content">
                    <button onClick={() => onDelete(id)}>Удалить</button>
                </div>
            </div>
        </div>
    ) : null
}
