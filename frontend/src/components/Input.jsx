const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md py-3 px-2 outline-none text-slate-900 border border-slate-400 text-sm bg-white focus:border-slate-900"
  />
);

export default Input;
