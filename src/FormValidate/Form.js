import React, { useState } from "react" ;
import "../FormValidate/form.css"

const Form = () => {
    const[formData , setFormData] = useState ({
        username : "",
        email : "" ,
        password : "",
        confirmpassword : ""
    })
    const[error , setError] = useState({})

    const handleChange = (e) => {
        const {name , value} = e.target
        setFormData({
            ...formData , [name] : value
           
        })
        console.log(formData);

    }

   const handleSubmit = (e) => {
      e.preventDefault()

      const validateError = {}
      if(!formData.username.trim()) {
        validateError.username = "User name  is required " 
      }
      if(!formData.email.trim()) {
        validateError.email = " email is required"
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        validateError.email = "email is not valid "
      }
      if(!formData.password.trim()) {
        validateError.password = " password is required"
      }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formData.password)) {
        validateError.password = "please enter valid password and should be atleast 6 char"
      }
      if(!formData.confirmpassword === formData.password) {
        validateError.confirmpassword = "password not matched"
      }

      
    if(Object.keys(validateError).length === 0) {
        alert("Form Submitted successfully")
    }

      setError(validateError);
     


    
   
   }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username :</label>
            <input 
             type="text"
             name="username"
             onChange={handleChange}
             placeholder="Enter your name "
             autoComplete="off" /> 
           <span>{error.username}</span>
             </div>
             <div>
                <label>Email:</label>
                <input 
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email" />
                  <span>{error.email}</span>
             </div>
             <div>
                <label>password:</label>
                <input 
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password" />
                <span>{error.password}</span>
             </div>
             <div>
                <label>confirmpassword:</label>
                <input 
                type="password"
                name="confirmpassword"
                onChange={handleChange}
                placeholder="*****" />
                <span>{error.confirmpassword}</span>
             </div>
             <button type="submit"> Submit</button>
        </form>
        </>
    )
}
export default Form;