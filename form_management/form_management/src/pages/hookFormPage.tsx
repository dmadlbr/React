import { useForm } from "react-hook-form"
import type { HookFormType } from "../types/hookFormType";


const DisplayError = ({message}:{message:string | undefined}) =>{
    return <div>
        {message && <span className="text-red-600">{message}</span>}
    </div>
}

export const HookForm = () => {

    const {register,handleSubmit,formState:{errors},getValues} = useForm<HookFormType>();

    // console.log(errors);
    const onSubmit = (data:HookFormType) =>{
        console.log(data);
    }

    return <div className="flex justify-center items-center mt-15">
       
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full max-w-100 mb-30 ">
            <h3 className="text-center font-semibold text-violet-300 ">REACT HOOK FORM</h3>
            <input {...register("name", {required:"Name is required"})} type="text" placeholder="Enter your name" className="p-2 outline-0 border border-pink-400 rounded-md" />
            {/* {
                errors.name?.message && <span className="text-red-600">{errors.name.message}</span>
            } */}

            <DisplayError message={errors.name?.message}></DisplayError>

            <input {...register("age" , {required:"Age is required"})} type="text" placeholder="Enter your Age" className="p-2 outline-0 border border-pink-400 rounded-md" />
            {/* {
                errors.age?.message && <span className="text-red-600">{errors.age.message}</span>
            } */}

            <DisplayError message={errors.age?.message}></DisplayError>

            <input {...register("email" , {required:"Email is required" , pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message: "Invalid email"}})} type="text" placeholder="Enter your email" className="p-2 outline-0 border border-pink-400 rounded-md"/>
            {/* {
                errors.email?.message && <span className="text-red-600">{errors.email.message}</span>
            } */}
            <DisplayError message={errors.email?.message}></DisplayError>

            
            <input {...register("phone" , {required:"Phone number is required", pattern:{value: /^[0-9]{10}$/, message: "Invalid phone number"}})} type="text" placeholder="Enter your Phone Number" className="p-2 outline-0 border border-pink-400 rounded-md"/>
            {/* {
                errors.email?.message && <span className="text-red-600">{errors.email.message}</span>
            } */}
            <DisplayError message={errors.phone?.message}></DisplayError>

            <input {...register("password" , {required:"Password is required"})} type="password" placeholder="Enter your password" className="p-2 outline-0 border border-pink-400 rounded-md"/>
            {/* {
                errors.password?.message && <span className="text-red-600">{errors.password.message}</span>
            } */}
            <DisplayError message={errors.password?.message}></DisplayError>

            <input {...register("confirm_password" , {required:"Password is required", validate:(value)=>{
                return value === getValues("password") || "Password does not match"
            }
            })} type="password" placeholder="Confirm Password" className="p-2 outline-0 border border-pink-400 rounded-md" />
            
            {/* {
                errors.confirm_password?.message && <span className="text-red-600">{errors.confirm_password.message}</span>
            } */}

            <DisplayError message={errors.confirm_password?.message}></DisplayError>

            <button type="submit" className="p-2 outline-0 text-white bg-purple-300 font-semibold rounded-md cursor-pointer">Register</button>
            
        </form>
    </div>

}