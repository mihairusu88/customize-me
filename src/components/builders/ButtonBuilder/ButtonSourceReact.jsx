import "./Button.css"
    
const Button = ({ className, ...props }) => {
  return (
    <button
      className="cme-button"
      {...props}
    >
      {props.children}
    </button>
  );
};
    
export default Button;
