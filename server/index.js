import { Config } from './config/config'
import { Server } from './servers/server'
import { UsersRouter } from './routers/usersRouter'
import { UserService } from './services/userService'

const config = new Config()
  .setPort(process.env.PORT || 5000)
  .addTransient('UserService', UserService)

new Server(config)
  .addRouter('/api/users', new UsersRouter(config))
  .start()

