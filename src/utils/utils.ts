import axios from 'axios'
import { IUser } from '../App'
import { IFormData } from '../components/modal/modal'

export const PostToServer = async (dataForm: IFormData) => {
    const { data } = await axios.post('http://localhost:3001/persons', dataForm)
    return data
}

export const DeleteFromServer = async (id: number) => {
    await axios.delete(`http://localhost:3001/persons/${id}`)
}

export const EditOnServer = async (dataForm: IUser) => {
    await axios.put(`http://localhost:3001/persons/${dataForm.id}`, dataForm)
}

export function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
}
