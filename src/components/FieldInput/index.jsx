import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    flex: 0 1 calc(50% - 16px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    label {
        color: var(--White, #F5F5F5);
    }
    
    input {
        width: 100%;
        padding: 25px 20px;
        border-radius: 10px;
        border: 3px solid var(--Dark-Grey, #262626);
        background: #191919;
        color: var(--White, #F5F5F5);

        &::placeholder {
            color: var(--Light-Gray, #A5A5A5);
            text-transform: lowercase;
        }
    }
    .error {
        font-weight: bold;
        color: red;
        font-size: 12px;
        position: absolute;
        bottom: -20px;
    }
`

const FieldInput = ({ type, label, value, placeholder, onChange, error }) => {
    return (
        <InputContainer>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
            {error && <span className="error">{error}</span>}
        </InputContainer>
    );
};

export default FieldInput;
