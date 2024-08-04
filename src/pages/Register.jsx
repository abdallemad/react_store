import { SubmitBtn,FormInput } from "../components"
import { Link,Form } from "react-router-dom"

export const action = async (data)=>{
  console.log(data);
}

const Register = () => {
  return (
    <section className="grid min-h-[100dvh] place-items-center">
      <Form method="post" className="card w-96 px-8 py-6 bg-base-100 shadow-lg gapy-y-4">
        <h4 className="text-3xl text-center font-bold mb-3">Register</h4>
        <FormInput type={'text'} defaultValue={'john'} label={'User Name'} name={'username'} />
        <FormInput type={'email'} defaultValue={'test@test.com'} label={'Email'} name={'email'} />
        <FormInput type={'password'} defaultValue={'secret'} label={'Password'} name={'password'} />
        <div className="mt-6">
          <SubmitBtn text={'Register'} />
        </div>
        <p className="mt-4 text-center">Already member<Link to={'/login'} className="btn btn-link">login</Link></p>
      </Form>
    </section>
  )
}

export default Register
