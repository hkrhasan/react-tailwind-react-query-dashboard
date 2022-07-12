import instance, { defaultCatch } from "./instance"

interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

export default class Auth {
  static login(email: string, password: string) {
    return instance.post<AuthResponse>('auth/signin', {email, password})
  }

  static logout() {
    return instance.post<boolean>('auth/logout', {})
  }
}


    
    // return new Promise(resolve => {
    //   instance.post('auth/signin', {email, password})
    //   .then((response) => {
    //     resolve(response)
    //   })
    //   .catch((error) => {
    //     defaultCatch(error, resolve)
    //   })
    // })
