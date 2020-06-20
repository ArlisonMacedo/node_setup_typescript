import { User } from '@models/User'

export class UserControlller {
  teste () {
    const user = new User()
    user.name = 'Arlison'
    return user.name
  }
}
