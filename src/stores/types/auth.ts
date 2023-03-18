type user = {
  isLoggedIn: boolean
  email: string | null
}

export interface IAuth {
  user: user
}
