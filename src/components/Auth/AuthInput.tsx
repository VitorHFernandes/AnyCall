interface iAuthInput {
  label: string,
  value: any,
  type?: 'text' | 'email' | 'password',
  required?: boolean,
  whenNotToRender?: boolean,
  changeValue: (newValue: any) => void
} 



const AuthInput = ({ label, value, type, required, whenNotToRender, changeValue }: iAuthInput ) => {
  return whenNotToRender ? null : (
    <div className="flex flex-col mt-4">
      <label>{ label }</label>
      <input 
        type={type ?? 'text'}
        value={value}
        onChange={e => changeValue?.(e.target.value)}
        required={required}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none
        `}
      />
    </div>
  )
}

export default AuthInput