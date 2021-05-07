import { createAction } from '@reduxjs/toolkit'

export enum ApplicationModal {
  WALLET,
  // SETTINGS,
  // SELF_CLAIM,
  // ADDRESS_CLAIM,
  // CLAIM_POPUP,
  // MENU,
  // DELEGATE,
  // VOTE
}

export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')
