import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import './style.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../redux/store'
import { EditOnServer, PostToServer } from '../../utils/utils'
import { addUser, editUser, fetchUsers } from '../../redux/slices/users'
import { IUser } from '../../App'

interface ModalEditProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    firstName: string
    secondName: string
    id: number
}

export interface IFormData {
    firstName: string
    secondName: string
}

export const ModalEdit: React.FC<ModalEditProps> = ({
    active,
    setActive,
    firstName,
    secondName,
    id,
}) => {
    const [name, setName] = useState(firstName)
    const [sName, setSName] = useState(secondName)

    const dispatch = useAppDispatch()

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUser>()

    const onSubmit: SubmitHandler<IUser> = (data) => {
        const editInfo: IUser = {
            firstName: data.firstName,
            secondName: data.secondName,
            id: id,
        }
        dispatch(editUser(editInfo))
        EditOnServer(editInfo)
        setActive(!active)
    }

    return active ? (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => {
                setActive(false)
            }}
        >
            <div
                className="modal--content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal--wrapper--title">
                    <h1 className="modal--title">Изменить пользователя ?</h1>
                </div>
                <div className="modal--wrapper-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="modal--wrapper-content">
                            <h2
                                style={{
                                    color: 'white',
                                    fontWeight: 5,
                                    fontSize: 18,
                                }}
                            >
                                Имя
                            </h2>
                            <input
                                className="modal--input"
                                placeholder="Имя"
                                type="text"
                                defaultValue={firstName}
                                {...register('firstName', {
                                    required: true,
                                })}
                            />
                        </label>

                        <label>
                            <h2
                                style={{
                                    color: 'white',
                                    fontWeight: 5,
                                    fontSize: 18,
                                }}
                            >
                                Фамилия
                            </h2>
                            <input
                                className="modal--input"
                                placeholder="Фамилия"
                                type="text"
                                defaultValue={secondName}
                                {...register('secondName', {
                                    required: true,
                                })}
                            />
                        </label>

                        <input className="modal--submit" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    ) : null
}
