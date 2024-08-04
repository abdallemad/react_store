import { SubmitBtn, FormInput } from "../components"
import { Link,Form, redirect,useNavigate } from "react-router-dom"
import customFetch from "../utils/custom";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
export const action =(store)=> 
    async({request})=>{
      console.log(store);
      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());
      try {
        const response = await customFetch.post('/auth/local',data);
        store.dispatch(loginUser(response.data));
        // console.log(response);
        toast.success('login successful');
        return redirect('/');
      } catch (error) {
        const errorMassage = error?.response?.data?.error?.massage || 'please check your cradintion';
        toast.error(errorMassage);
        return null
      }
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const loginDemoUser = async()=>{
    try {
      const response = await customFetch.post('/auth/local',{
        identifier:'test@test.com',
        password:'secret'
      });
        dispatch(loginUser(response.data));
        // console.log(response);
        toast.success('login successful');
        navigate('/')
    } catch (error) {
      const errorMassage = error?.response?.data?.error?.massage || 'some thing went wrong please try later';
      toast.error(errorMassage);
    }
  }
  return (
    <section className="grid min-h-[100dvh] place-items-center ">
      <Form
        method="post"
        className="card w-96 px-8 py-6 bg-base-100 shadow-lg  gap-y-4"
      >
        <h4 className="text-3xl text-center font-bold mb-2">Login</h4>
        <FormInput type={'email'} defaultValue={''} name={'identifier'} label={'Email'} />
        <FormInput type={'password'} defaultValue={''} name={'password'} label={'Password'} />
        <div className="mt-3 ">
          <SubmitBtn text={'login'} />
        </div>
        <button className="btn btn-secondary uppercase" type="button" onClick={loginDemoUser}>
          guest user
        </button>
        <p className=" text-center">
          Not a member yet?<button className="btn btn-link"><Link to={'/register'}>Register</Link></button>
        </p>
      </Form>
    </section>
  )
}

export default Login
