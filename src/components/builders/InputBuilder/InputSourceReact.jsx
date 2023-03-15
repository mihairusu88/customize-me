import "./Input.css"
    
const Input = ({ className, ...props }) => {
  return (
    <input
      className="cme-input"
      placeholder="Input Component"
      {...props}
    />
  );
};
    
export default Input;
