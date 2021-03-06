import axios from 'axios'


export const loginCustomer = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post(
            "https://avtur-ankasa-ticketing.herokuapp.com/v1/users/login", dataForm
        );
      const user = result.data.data
      // console.log(result.data.data.token);
      const token = result.data.data.token
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        alert("Login Success");
        

       dispatch({
         type: "USER_LOGIN_SUCCESS",
         token: token.data,
         payload: user,
       });
        navigate('/home')

    } catch (error) {
        console.log(error);
        alert("Password dan email salah");
    }
}
// export const registerUser = (dataForm, navigate) => async (dispatch) => {
//     try {
//       dispatch({ type: "USER_REGISTER_PENDING" });
//       const result = await axios.post(
//         `https://avtur-ankasa-ticketing.herokuapp.com/v1/users/register`,
//         dataForm
//       );
//       const user = result.data.data;
      
//       localStorage.setItem("token", user.token);
//       localStorage.setItem("refreshToken", user.refreshToken);
//       dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
//       navigate("/login");
//       alert("Anda berhasil daftar")
//     } catch (error) {
//       console.log(error);
//       alert("User sudah terdaftar")
//     }
//   };
  
  export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

  export const getUserDetail = (id) => {
    return (dispatch) => {
      axios
      .get("https://avtur-ankasa-ticketing.herokuapp.com/v1/profile/"+id)
      .then(function(response){
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error){
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
    }
  }