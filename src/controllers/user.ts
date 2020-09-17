import { Request, Response } from 'express'
import { v4 as generateUuid } from 'uuid'
import { User } from '../models/user'

class UserController {
  async list (req: Request, res: Response) {
    const users = Array.from(({ length: 20 }), () => ({ ...new User(), id: generateUuid() }))

    return res.json(users)
  }
}

export default new UserController()
