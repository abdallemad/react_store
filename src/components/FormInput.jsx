
const FormInput = ({label,name,type,defaultValue,size}) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input 
        type={type} 
        defaultValue={defaultValue} 
        className={'input input-bordered'+` ${size}`} 
        name={name} 
      />
  </label>
  )
}

export default FormInput
