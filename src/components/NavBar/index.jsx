import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'
import Container from '../Container'

const StyledNavbar = styled.div`
border-bottom: 2px solid var(--Blue, #2271D1);
background: var(--Dark-Grey, #262626);
box-shadow: 0px 0px 10px 0px rgba(34, 113, 209, 0.70);    
    img {
        width: 30%;
        max-width: 200px;
    }
    > div {
        display: flex;
        gap: 10px;
    }

`
const NavbarContainer = styled(Container)`
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    `
const NavbarButtonsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarContainer>
                <img src="/logo.png" alt="logo aluraflix" />
                <NavbarButtonsContainer>
                    <Button buttonColor="blue">
                        <Link to="/">home</Link>
                    </Button>
                    <Button>
                        <Link to="/new-video">Nuevo Video</Link>
                    </Button>
                </NavbarButtonsContainer>
            </NavbarContainer>
        </StyledNavbar>
    )
}

export default Navbar
