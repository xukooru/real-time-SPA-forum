import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    login(data){
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLog(res))
            .catch(error => console.log(respose.data))
    }

    responseAfterLog(res){
        const access_token = res.data.access_token
        const username = res.data.user
        if (Token.isValid(access_token)){
            AppStorage.store(username,access_token)
            window.location = '/forum'
        }
    }

    hasToken(){
        const storeToken = AppStorage.getToken();

        if(storeToken){
          return  Token.isValid(storeToken)
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        AppStorage.clear()
        window.location = '/forum'
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if (this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User();
