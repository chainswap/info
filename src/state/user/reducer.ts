import { createReducer } from '@reduxjs/toolkit'
import { setUser } from './actions'

export interface UserState {
  readonly address: string | null
}

const initialState: UserState = {
  address: null,
}

export default createReducer(initialState, (builder) =>
  builder.addCase(setUser, (state, action) => {
    state.address = action.payload.address
  })
)
