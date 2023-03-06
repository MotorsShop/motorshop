import { ContainerInput } from "./style";

interface IPropsInput {
    width?: string;
    height?: string;
    placeholder: string;
    required?: boolean;
    pattern?: string;
    type: string;
}

export default function Input({ width, height, placeholder, required, pattern, type }: IPropsInput) {
    return (
        <ContainerInput width={width} height={height} placeholder={placeholder} type={type} required={required} pattern={pattern} ></ContainerInput>
    )
}