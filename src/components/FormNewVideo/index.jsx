import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '../Button';
import FieldInput from '../FieldInput';
import SelectInput from '../SelectInput';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

`;

const FormContent = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 10px;
`;

const FormNewVideo = () => {
    const {
        handleSubmit,
        title,
        setTitle,
        url,
        setUrl,
        category,
        setCategory,
        description,
        setDescription,
        image,
        setImage,
        handleClear,
        errors
    } = useContext(GlobalContext);




    return (
        <StyledForm onSubmit={handleSubmit}>

            <FormContent>
                <FieldInput
                    label="Título"
                    type="text"
                    placeholder="Ingrese el Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={errors.title}
                />
                <SelectInput
                    label="Categoría"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    error={errors.category}
                />
            </FormContent>

            <FormContent>
                <FieldInput
                    label="Imagen"
                    type="text"
                    placeholder="Ingrese una imagen"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    error={errors.image}
                />
                <FieldInput
                    label="URL"
                    type="text"
                    placeholder="Ingrese el enlace al video"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    error={errors.url}
                />
            </FormContent>

            <FieldInput
                label="Descripción"
                type="textarea"
                placeholder="¿De qué se trata este vídeo?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={errors.description}
            />

            <ButtonContainer>
                <Button type="submit" >
                    Guardar
                </Button>
                <Button type="button" onClick={handleClear} buttonColor="blue">
                    Limpiar
                </Button>
            </ButtonContainer>
        </StyledForm>
    );
};

export default FormNewVideo;
