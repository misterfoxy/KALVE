import axios from "axios";
const ROOT_URL = "http://localhost:3090"

export default {
  
  // Saves a user to the database
  saveUser: function(user) {
    console.log(user);
    axios.post(`${ROOT_URL}/signup`, user)
      .then(function(res){
        console.log(res);
        const token = res.data.token;
        localStorage.setItem('jwtToken', token)
        
        })
      .catch(function(err){console.log(err)});
  },

  checkLogin: function(user){
    console.log(user);
    axios.post(`${ROOT_URL}/signin`, user)
      .then(function(res){
        console.log(res);
        })
      .catch(function(err){
        console.log(err);
      })
  }
};
