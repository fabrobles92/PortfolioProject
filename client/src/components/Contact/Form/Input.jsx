import { useField } from 'formik'
import './Input.css'

function Input({label, type,  ...props}) {
    const [field, meta] = useField(props)
    // console.log(meta)
  return (
    <div className='field'>
        <label className='label'>{label}</label>
        {type ? <textarea {...field} {...props}/> : <input {...field} {...props}/>}
        {meta.touched && meta.error ? <label className="label error">{meta.error}</label> : null}
    </div>
  )
}

export default Input