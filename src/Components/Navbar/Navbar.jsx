import {  Restaurant } from '@mui/icons-material';
import styled from 'styled-components';


const Container = styled.div`
    background-color:transparent;
    height: 80px;
    display:flex;
    justify-content:center;
    font-weight:700;
    
`

const NavLink = styled.p`
    color:#fff;
    font-size:2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    
    @media screen and (max-width: 400px){
        position:absolute;
        top: 10px;
        left:25px;
    }
`

const NavIcon = styled.div`
    
    display:block;
    position:absolute;
    top:0;
    right:0;
    cursor:pointer;
    color:white;
    

    p{
        transform:translate(-175%, 100%);
        font-weight:bold;
        
    }
    
`







const Navbar = ({toggle}) => {
    return (
        <Container>
            <NavLink>El Palacio de Milangas</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu<Restaurant/></p>
                
                    

            </NavIcon>
        </Container>
    )
}
export default Navbar;

