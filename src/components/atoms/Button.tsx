type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        {...props}
    >
        {children}
    </button>
);

export default Button;
