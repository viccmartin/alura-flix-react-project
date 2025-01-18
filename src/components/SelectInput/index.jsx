import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';

const SelecContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0 1 calc(50% - 16px);

    label {
        color: var(--White, #F5F5F5);
    }
    select {
        width: 100%;
        padding: 25px 20px;
        border-radius: 10px;
        border: 3px solid var(--Dark-Grey, #262626);
        background: #191919;
        color: var(--Light-Gray, #A5A5A5);
    }
    option {
        color: var(--White, #F5F5F5);
    }
`

const SelectInput = ({ label, value, onChange, error }) => {
    const { categories } = useContext(GlobalContext);

    return (
        <SelecContainer>
            <label>{label}</label>
            <select value={value} onChange={onChange}>
                <option value="">Seleccione una categoría</option>
                {categories.map((option, index) => (
                    <option key={index} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <span className="error">{error}</span>}
        </SelecContainer>
    );
};

export default SelectInput;
