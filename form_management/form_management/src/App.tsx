import { useState } from "react";

type formType = {
    name: string;
    age: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const App = () =>{


  const [form,setForm]=useState<formType>({name:"",age:"",email:"",password:"",confirmPassword:""});

  const handleSubmit = (event:React.SubmitEvent)=>{
    event.preventDefault();
    console.log(form);
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name == "name"){
      event.target.value=event.target.value.toLowerCase().replace(" ","_");
    }
    setForm(prevState=>({...prevState,[event.target.name]:event.target.value}))
  }


    return <div className="flex justify-center items-center mt-15">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-100 ">
          <input onChange={handleChange} type="text" name="name" placeholder="Enter your name" className="p-2 outline-0 border border-indigo-400 rounded-md" />
          <input onChange={handleChange}  type="text" name="age" id="" placeholder="Enter your Age" className="p-2 outline-0 border border-indigo-400 rounded-md" />
          <input onChange={handleChange}  type="text" name="email" id="" placeholder="Enter your email" className="p-2 outline-0 border border-indigo-400 rounded-md"/>
          <input onChange={handleChange}  type="password" name="password" placeholder="Enter your password" className="p-2 outline-0 border border-indigo-400 rounded-md"/>
          <input onChange={handleChange}  type="password" name="confirmPassword" id="" placeholder="Confirm Password" className="p-2 outline-0 border border-indigo-400 rounded-md" />
          <button type="submit" className="p-2 outline-0 text-white bg-emerald-500 font-semibold rounded-md cursor-pointer">Register</button>
      </form>
    </div>

}