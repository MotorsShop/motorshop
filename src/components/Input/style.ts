import styled from "styled-components";

interface containerProps {
    width?: string;
    height?: string;
    placeholder: string;
    required?: boolean;
    pattern?: string;
    type: string;
}

export const ContainerInput = styled.input<containerProps>`
     ${({ width }) => (width ? `width: ${width}` : "width: 100%")};
     ${({ height }) => (height ? `height: ${height}` : "height: 48px")};
    border-radius: 5px;
    border: 1px solid #DEE2E6;
    color: #868E96;
    font-size: 16px;
    font-weight: 400;
    padding: 8px;
    margin-bottom: 20px
`