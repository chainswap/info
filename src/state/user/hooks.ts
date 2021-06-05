import { useCallback } from 'react'
import { setUser } from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'

export function useUserLogined(): boolean {
  const address = useSelector((state: AppState) => state.user.address)
  return !!address
}

export function useSetUser(): (user: any) => void {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback((user: any) => dispatch(setUser(user)), [dispatch])
}
