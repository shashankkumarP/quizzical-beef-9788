import {Login_Successful,Signup_Successful,Logout_Successful, Login_Error, Login_Loading}  from "./Authactiontype"


export const singupaction =(form_body)=> (dispatch)=>{
    form_body=JSON.stringify(form_body);
    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST",
        body:form_body,
        // mode:"no-cors",
        headers:{
            "Content-Type": "application/json",

        },
    }).then((r)=>r.json()).then((r)=>{console.log(r);dispatch({type:Signup_Successful,payload:r.token})})
    .catch((err)=>console.log("err",err))


}

export const loginaction = (form_body)=>(dispatch)=>{
  form_body=JSON.stringify(form_body);
   dispatch({type:Login_Loading})
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: form_body,
      // mode:"no-cors",

      headers: {
        "Content-Type": "application/json",
      },
    }).then((r)=>r.json()).then((r)=>{console.log(r);dispatch({type:Login_Successful,payload:r.data})})
    .catch((err)=>{dispatch({type:Login_Error})})
}