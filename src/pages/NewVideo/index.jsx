import styled from "styled-components"
import Container from "../../components/Container"
import FormNewVideo from "../../components/FormNewVideo"

const HeroNewVideo = styled.div`
    margin: 80px 0;
    text-align: center;
    color: var(--White, #F5F5F5);
    text-transform: uppercase;

    h1 {
        font-size: 60px;
        font-weight: 900;
        margin-bottom: 20px;
    }
    p {
        font-size: 20px;
    }
`


const NewVideo = () => {
    return (
        <>
            <Container>
                <HeroNewVideo>
                    <h1>nuevo video</h1>
                    <p>Complete el formulario para crear una nueva tarjeta de video</p>
                </HeroNewVideo>
                <FormNewVideo />
            </Container>
        </>
    )
}

export default NewVideo