import express from 'express'
import { login, signUp } from '../controllers/signupController.js'
import { validateExistingUser, validateNewUser } from '../middleware/AuthenticationMiddleware.js'

export const userRouter = express.Router()

userRouter.route('/login')
.post(validateExistingUser,login)


userRouter.route('/signup')
.post(validateNewUser,signUp)





