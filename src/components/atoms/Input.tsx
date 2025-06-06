type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => (
    <input
        className="border rounded p-2 w-full"
        {...props}
    />
);

export default Input;
