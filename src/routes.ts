import { Router } from 'express'
import UserController from './controllers/user'

const routes = Router()

routes.get('/users', UserController.list)

export default routes
