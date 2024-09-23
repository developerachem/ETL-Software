import { styles } from "../../utils/cn";

interface SelectProps {
  title?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: (e: string) => void;
  required?: boolean;
  className?: string;
  children?: JSX.Element;
}
function Select({
  title = "",
  value,
  onChange,
  required,
  className,
  children,
}: SelectProps) {
  return (
    <label className={styles(`block w-full ${className}`)}>
      {title && <p className="font-[font-500]">{title}:</p>}

      <select
        required={required}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="border border-color500 w-full py-2 px-5 rounded-md outline-none focus:border-primaryColor bg-white"
      >
        <option value="">--Select--</option>
        {children}
      </select>
    </label>
  );
}

export default Select;
