import styled from "styled-components"


const StyledIconButton = styled.button`
    display: flex;
    justify-content: center;    
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    color: var(--White, #F5F5F5);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`

const IconButton = ({ children, buttonColor, type, onClick }) => {
    return <StyledIconButton type={type} $buttonColor={buttonColor} onClick={onClick}>
        {children}
    </StyledIconButton>
}

export default IconButton