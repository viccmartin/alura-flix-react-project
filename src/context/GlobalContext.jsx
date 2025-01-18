import React, { createContext, useState } from 'react';
import { categories } from '../data/categories';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState({});




    const validateForm = () => {
        const validations = {
            title: {
                required: true,
                message: "El título es obligatorio.",
                minLength: 3,
                minLengthMessage: "El título debe tener al menos 3 caracteres."
            },
            url: {
                required: true,
                message: "El enlace al video es obligatorio.",
                isUrl: true,
                urlMessage: "Debe ser un enlace válido (por ejemplo, https://...)."
            },
            category: {
                required: true,
                message: "Debe seleccionar una categoría."
            },
            description: {
                required: true,
                message: "La descripción es obligatoria.",
                minLength: 10,
                minLengthMessage: "La descripción debe tener al menos 10 caracteres."
            },
            image: {
                required: true,
                message: "La imagen es obligatoria.",
                isUrl: true,
                urlMessage: "Debe ser un enlace válido para la imagen (por ejemplo, https://...)."
            },
        };

        const newErrors = {};

        // Recorre el objeto de validaciones
        Object.keys(validations).forEach((field) => {
            const value = eval(field); // Obtiene el valor del estado correspondiente (title, url, etc.)
            const rules = validations[field];

            if (rules.required && !value.trim()) {
                newErrors[field] = rules.message;
            }

            if (rules.minLength && value.trim().length < rules.minLength) {
                newErrors[field] = rules.minLengthMessage;
            }

            if (rules.isUrl && value.trim() && !isValidUrl(value.trim())) {
                newErrors[field] = rules.urlMessage;
            }
        });

        return newErrors;
    };

    // Función para validar si un texto es una URL
    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Detiene el envío si hay errores
        }

        // Si no hay errores, procede a guardar
        const newVideo = {
            title,
            url,
            category,
            description,
            image,
        };

        setVideos((prev) => ({
            ...prev,
            [category]: prev[category] ? [...prev[category], newVideo] : [newVideo],
        }));

        // Limpiar campos y errores
        setTitle('');
        setUrl('');
        setCategory('');
        setDescription('');
        setImage('');
        setErrors({});
    };

    const handleClear = () => {
        setTitle('');
        setUrl('');
        setCategory('');
        setDescription('');
        setImage('');
        setErrors({});
    };

    const handleDelete = (video) => {
        setVideos((prev) => {
            const newVideos = { ...prev };
            newVideos[video.category] = newVideos[video.category].filter(
                (v) => v !== video
            );
            return newVideos;
        });
    }



    const values = {
        videos,
        title,
        url,
        category,
        description,
        image,
        setTitle,
        setUrl,
        setCategory,
        setDescription,
        setImage,
        handleSubmit,
        categories,
        handleClear,
        errors,
        categories,
        handleDelete
    }
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;