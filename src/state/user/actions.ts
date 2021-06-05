import { createAction } from '@reduxjs/toolkit'

export const setUser = createAction<{ address: string }>('user/setUser')
