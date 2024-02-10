import { InputProps } from "@/misc";
import '../assets/styles/input.css';

const Input = (props: InputProps) => {
    const { type,
        placeholder,
        value,
        hasError,
        onInputChange,
        ...rest
    } = props;

    return (
        <input
            type={type}
            className={`input text-base w-full bg-transparent p-3 ${hasError ? 'input-error' : ''}`}
            placeholder={placeholder}
            value={value}
            {...rest}
            onChange={(e) => onInputChange(e)}
        />
    )

};

export default Input;
