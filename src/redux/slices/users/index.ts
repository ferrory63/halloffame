import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../../App'

enum status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface IUsersSliceState {
    users: IUser[]
    status: status
}

const initialState: IUsersSliceState = {
    users: [],
    status: status.LOADING,
}

export const fetchUsers = createAsyncThunk<IUser[]>(
    'users/fetchUsers',
    async () => {
        return (await axios.get('http://localhost:3001/persons')).data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<IUser>) {
            state.users = [...state.users, action.payload]
        },
        removeUser(state, action: PayloadAction<number>) {
            state.users = state.users.filter((obj) => obj.id !== action.payload)
        },
        editUser(state, action: PayloadAction<IUser>) {
            const userFind = state.users.find(
                (obj) => obj.id === action.payload.id
            )
            if (userFind) {
                userFind.firstName = action.payload.firstName
                userFind.secondName = action.payload.secondName
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = status.LOADING
            state.users = []
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = status.SUCCESS
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = status.ERROR
            state.users = []
        })
    },
})

export const { addUser, removeUser, editUser } = usersSlice.actions

export default usersSlice.reducer
