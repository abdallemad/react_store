
const FormSelect = ({id,name,label,options, defaultValue,size}) => {
  return (
    <label className="form-control w-full max-w-xs">
        <div className="label">
        <label htmlFor={id} className="label-text capitalize">{label}</label>
      </div>
      <select defaultValue={defaultValue} className={`select select-bordered ${size || 'select-sm'}`} name={name} id={id}>
        {
          options?.map(option=>{
            return <option key={option} value={option}>
              {option}
            </option>
          })
        }
      </select>
    </label>
  )
}

export default FormSelect
