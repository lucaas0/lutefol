import { LabelProps } from "@/misc";

const Label = (props: LabelProps) => {
    const { text, ...rest } = props;
    return (
        <label className='text-white text-base font-bold capitalize' {...rest}>
            {text}
        </label>
    );
};

export default Label;