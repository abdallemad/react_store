import { SubmitBtn,FormInput } from "../components"
import { Link,Form, redirect } from "react-router-dom"
import customFetch from "../utils/custom";
import { toast } from "react-toastify";
export const action = async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  try {
    const response = await customFetch.post('/auth/local/register',data);
    toast.success('account created.');
    console.log(response)
    return redirect('/login');
  } catch (error) {
    const errorMassage = error?.response?.data?.error?.massage || 'please double check';
    toast.error(errorMassage)
    return null
  }
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
