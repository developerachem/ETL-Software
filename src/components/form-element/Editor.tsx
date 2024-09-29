import JoditEditor from "jodit-react";
import { useMemo, useRef } from "react";

interface EditorProps {
  state: string;
  setState: (state: string) => void;
  title?: string;
  placeholder?: string;
}
function Editor({
  state,
  setState,
  title = "Description",
  placeholder,
}: EditorProps) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: 400,
    }),
    [placeholder]
  );

  return (
    <div className="">
      <p className="font-[font-500]">{title}:</p>
      <JoditEditor
        ref={editor}
        value={state}
        config={config}
        onChange={(newContent) => setState(newContent)}
      />
    </div>
  );
}

export default Editor;
