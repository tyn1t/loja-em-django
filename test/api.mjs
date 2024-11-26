import axios from "axios";



export const  login = async (email, password) =>{
  try {
    const response = await axios.post(`http://localhost:8000/acoout/api/v1/login/`, {
      "email": email,
      "password": password
    }, {
      auth: {
        username: email,
        password: password
      }
    });
      return response.data[access];
  } catch (error) {
    console.error("Login failed:", error.response ? error.response.data : error.message);
  }
}

// let email = "and@gmail.com";
// let password = "#124578and#";

// const access = login(email, password);

// console.log(access.data)
// console.log(access)