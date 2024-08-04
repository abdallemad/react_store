
const FormCheckbox = ({label,defalutValue,name,size}) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input type="checkbox" name={name} defaultChecked={defalutValue} className={`checkbox checkbox-primary ${size}`}/ >
    </div>
  )
}

export default FormCheckbox
