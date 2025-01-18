import { useContext } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../../../context/GlobalContext";
import IconButton from "../IconButton";


const StyledCard = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  border-radius: 20px;
  border: none;
  background: ${({ $color }) =>
    `linear-gradient(135deg, ${$color}, ${$color})`}; /* Usa interpolación correcta */
  box-shadow: 0px 0px 5px 0px ${props => props.$color};
  overflow: hidden;
  position: relative;

  a {
    display: block;
    height: 200px;
    overflow: hidden;
    border-bottom: 2px solid ${({ $color }) => $color};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
`;

const CardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  background: #000;
  border-top: 2px solid ${({ $color }) => $color};
`;


const Card = ({ video, color }) => {
  const { handleDelete, handleEdit } = useContext(GlobalContext)
  const { title, image, url } = video

  return (
    <StyledCard $bgImage={image} $color={color}>
      <Link to={url} >
        <img src={image} alt={title} />
      </Link>
      <CardButtons>
        <IconButton onClick={() => handleDelete(video)}>
          <FaRegTrashAlt />
          Eliminar
        </IconButton>
        <IconButton onClick={() => handleEdit(video)}>
          <FaEdit />
          Editar
        </IconButton>
      </CardButtons>
    </StyledCard>
  )
}

export default Card