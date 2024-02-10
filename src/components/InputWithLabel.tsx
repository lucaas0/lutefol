import Input from "./Input";
import Label from "./Label";
import { InputProps, LabelProps } from "@/misc";

interface InputWithLabelProps {
    inputProps: InputProps;
    labelProps: LabelProps;
}

const InputWithLabel = (props: InputWithLabelProps) => {
    const { inputProps, labelProps } = props;
    return (
        <div className="flex flex-col gap-2">
            <Label {...labelProps} />
            <Input {...inputProps} />
        </div>
    )
}

export default InputWithLabel;
