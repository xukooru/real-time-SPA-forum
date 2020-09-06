class Token {

    isValid(token){
        const payload = this.payload(token);
        if(payload){
            return !!(payload.iss === "http://novaforum.mv/api/auth/login" || "http://novaforum.mv/api/auth/signup")
        }
        return false
    }

    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
      //  console.log(this.decode(payload))
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()
