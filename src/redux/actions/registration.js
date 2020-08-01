import jwt_decode from 'jwt-decode'; 
const GET_USER_LOGIN = 'GET_USER_LOGIN'
const REGISTER_USER = 'REGISTER_USER'

 
const getUserLogin = (payload) =>{
    return {type:GET_USER_LOGIN,payload}
}

const registerUser = (payload) =>{
    return {type:REGISTER_USER,payload}
}

const userLogin = (formData,History) => async (dispatch) =>{
    const url = 'https://sansthor.herokuapp.com/user/login';
    const options = {
        method:"POST",
        body: JSON.stringify(formData),
        headers:{
            'Content-type':'application/json'
        }

    };

    const response = await fetch(url, options);
    const result = await response.json();
    const token = await jwt_decode(result.result)
    
    localStorage.setItem('token', result.result)
    dispatch(getUserLogin(token));


}

const register = (formData, history) => async (dispatch) =>{
    const url = 'https://sansthor.herokuapp.com/user/register'
    const options = {
        method:'POST',
        body:JSON.stringify(formData),
        headers:{
            'Content-type':'application/json'
        }
    }

    const response = await fetch(url,options)
    const result = await response.json();
    console.log(result);
    dispatch(registerUser(result))
}

export {getUserLogin, GET_USER_LOGIN, userLogin, REGISTER_USER, register, registerUser}