import { styles } from "../../utils/cn";

interface InputProps {
  title?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}
function Input({
  title = "",
  placeholder,
  type = "text",
  value,
  onChange,
  required,
  className,
}: InputProps) {
  return (
    <label className={styles(`block w-full ${className}`)}>
      {title && <p className="font-[font-500]">{title}:</p>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-color500 w-full py-2 px-5 rounded-md outline-none focus:border-primaryColor"
        placeholder={placeholder || "Enter " + title}
        required={required}
      />
    </label>
  );
}

export default Input;
