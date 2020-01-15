import axios from "axios"

export default {
   // user routing
   userLogin: function(loginData){
       return axios.post("/api/users/login", loginData)
   },
   userLogout: function() {
       return axios.post("/api/users/logout")
   },
   userSignup: function(newUser){
       return axios.post("/api/users", newUser)
   }
}