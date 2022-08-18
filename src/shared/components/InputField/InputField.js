import './input-field.css'

function InputField({ type, register, hint, error }) {
    return (
        <div className='input-field'>
            {
                type == 'textarea'
                    ? <textarea className='custom-input' rows={3} {...register} placeholder={hint} />
                    : <input className='custom-input' type={type} {...register} placeholder={hint} />
            }
            {
                error
                    ? <p className='error-message'>{error}</p>
                    : null
            }

        </div>
    )
}

export default InputField;