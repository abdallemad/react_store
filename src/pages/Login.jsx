import { SubmitBtn, FormInput } from "../components"
import { Link,Form } from "react-router-dom"

export const action = async(data)=>{
  console.log(data);
}

const Login = () => {
  return (
    <section className="grid min-h-[100dvh] place-items-center ">
      <Form
        method="post"
        className="card w-96 px-8 py-6 bg-base-100 shadow-lg  gap-y-4"
      >
        <h4 className="text-3xl text-center font-bold mb-2">Login</h4>
        <FormInput type={'email'} defaultValue={'text@text.com'} name={'identifier'} label={'Email'} />
        <FormInput type={'password'} defaultValue={'secret'} name={'Password'} label={'Password'} />
        <div className="mt-3 ">
          <SubmitBtn text={'login'} />
        </div>
        <button className="btn btn-secondary uppercase" type="button">
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
