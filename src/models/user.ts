import faker from 'faker'

class User {
  public userName: string
  public email: string
  public password: string
  public avatar: string

  constructor () {
    this.userName = faker.internet.userName()
    this.email = faker.internet.email()
    this.password = faker.internet.password()
    this.avatar = faker.internet.avatar()
  }
}

export { User }
