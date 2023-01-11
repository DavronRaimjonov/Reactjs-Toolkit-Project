import "./ui.scss";
const Input = ({ label, type, value, setValue }) => {
  return (
    <div className="input">
      <input
        value={value.name}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
