import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const Checkbox = ({
  text,
  defaultValue,
  onChange,
}: {
  text: string;
  defaultValue: Boolean;
  onChange: Function;
}) => {
  const [checked, setChecked] = useState(defaultValue ? defaultValue : false);
  useEffect(() => {
    onChange({
      target: {
        value: checked,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setChecked(!checked)}
      >
        <div
          className={`w-[14px] h-[14px] rounded-sm border border-[hsl(var(--primary-600))] ${
            checked ? "bg-[hsl(var(--primary-600))]" : ""
          } ml-[1.5px] mt-[1.5px]`}
        >
          <Check className="w-[12px] h-[12px] stroke-white" />
        </div>
        <span>{text}</span>
      </div>
    </>
  );
};

export default Checkbox;
