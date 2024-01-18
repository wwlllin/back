import { Router } from 'express'
import { create, login, logout, extend, getProfile, editCart, getCart } from '../controllers/users.js'
import * as auth from '../middlewares/auth.js'

const router = Router()

router.post('/', create)
router.post('/login', auth.login, login)
router.delete('/logout', auth.jwt, logout) // ((登出用delete 經過jwt 再到logout))
router.patch('/extend', auth.jwt, extend) // ((舊換新用patch 經過jwt 再到extend))
router.get('/me', auth.jwt, getProfile) // ((取自己的資料用get 經過jwt 再到getProfile))
router.patch('/cart', auth.jwt, editCart)
router.get('/cart', auth.jwt, getCart)

export default router
