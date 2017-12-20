import axios from "axios";
const ROOT_URL = "http://localhost:3090"

export default {
  
  // Saves a user to the database
  saveUser: function(user) {
    console.log(user);
    axios.post(`${ROOT_URL}/signup`, user).then(function(response){console.log(response)}).catch(function(err){console.log(err)});
  }
};
