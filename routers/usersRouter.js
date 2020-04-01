import { UserService } from '../services/userService'

export class UsersRouter {
  constructor(config) {
    if (!config) throw Error('Config not defined')

    this.config = config
    this.userService = config.getUserService()
    if (!this.userService) throw Error('UserService not found')
  }

  build() {
    this.router = express.Router()
    this.router.route('/')
      .get(async (req, res, next) => {
        const users = await this.userService.getUserAsync()
        res.json(users)
      })
    return this.router
  }
}