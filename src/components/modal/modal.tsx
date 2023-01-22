import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import './style.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../redux/store'
import { PostToServer } from '../../utils/utils'
import { addUser, fetchUsers } from '../../redux/slices/users'

interface ModalProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

export interface IFormData {
    firstName: string
    secondName: string
}

export const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
    const dispatch = useAppDispatch()

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormData>()

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        PostToServer(data).then(() => dispatch(fetchUsers()))
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
                    <h1 className="modal--title">Добавление пользователя</h1>
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
                                placeholder="Имя"
                                type="text"
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
