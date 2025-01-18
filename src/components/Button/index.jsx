import styled from "styled-components"

const StyledButton = styled.button`
    border: 4px solid ${props => props.$buttonColor === 'blue' ? 'var(--Blue, #2271D1)' : '#F5F5F5'};
    background: rgba(0, 0, 0, 0.90);
    box-shadow: 0px 0px 10px 0px ${props => props.$buttonColor === 'blue' ? 'var(--Blue, #2271D1)' : '#F5F5F5'} inset;
    border-radius: 10px;
    color: ${props => props.$buttonColor === 'blue' ? 'var(--Blue, #2271D1)' : '#F5F5F5'};
    padding: 20px 30px;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    max-width: 200px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 20px;
    &:hover {
        background: ${props => props.$buttonColor === 'blue' ? 'var(--Blue, #2271D1)' : '#F5F5F5'};
        color: rgba(0, 0, 0, 0.90);
    }

`

const Button = ({ children, buttonColor, type, onClick }) => {
    return <StyledButton type={type} $buttonColor={buttonColor} onClick={onClick}>
        {children}
    </StyledButton>
}

export default Button
