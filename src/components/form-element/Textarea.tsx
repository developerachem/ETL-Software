interface TextareaProps {
  title?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange: (e: string) => void;
  rows?: number;
}
function Textarea({
  title = "",
  placeholder,
  value,
  onChange,
  required,
  rows = 5,
}: TextareaProps) {
  return (
    <label>
      {title && <p className="font-[font-500]">{title}:</p>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-color500 w-full py-2 px-5 rounded-md outline-none focus:border-primaryColor"
        placeholder={placeholder || "Enter " + title}
        required={required}
        rows={rows}
      />
    </label>
  );
}

export default Textarea;
