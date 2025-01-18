import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import Card from './Card';

const CardsSection = styled.section`
    margin: 50px 0;

`
const CategoryHeader = styled.h2`
    display: inline-block;
    margin: 0 0 20px;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${props => props.$color};
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    `
const CardGrid = styled.div`
// el card grid tiene que se de una sola linea que se deslize
display: flex ;
flex-wrap: nowrap;
overflow-x: auto;
gap: 20px;
padding-bottom: 20px;
`



const Cards = () => {
    const { videos, categories } = useContext(GlobalContext);

    return <>
        {categories
            .filter((category) => {
                // Verifica si la categoría tiene al menos un video
                const categoryVideos = videos[category.name] || [];
                return categoryVideos.length > 0;
            })
            .map((category) => {
                const categoryVideos = videos[category.name];
                return (
                    <CardsSection key={category.id}>
                        <CategoryHeader $color={category.color}>
                            {category.name}
                        </CategoryHeader>
                        <CardGrid>
                            {categoryVideos.map((video, index) => (
                                <Card key={index} video={video} color={category.color} />
                            ))}
                        </CardGrid>
                    </CardsSection>
                );
            })}

    </>
}

export default Cards