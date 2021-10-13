import { Close } from '@mui/icons-material';
import styled from 'styled-components';


const Container = styled.aside`
    position:fixed;
    z-index:999;
    width: 350px;
    height:100%;
    background:#ffc500;
    display:grid;
    align-items:center;
    top:0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen}) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width:400px){
        width: 100%;
    }
`
const Icon = styled.div`
    position:absolute;
    top: 1.2rem;
    right: 1.5rem;
    background:transparent;
    border:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
const SidebarMenu =styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(3, 80px);
    text-align:center;

    @media screen and(max-width: 480px){
        grid-template-rows:repeat(3, 60px);
    }

`
const SidebarLink =styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2 ease-in-out;
    color:#000;
    cursor:pointer;

    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`
const SideBtn =styled.div`
    display:flex;
    justify-content:center;
`
const SidebarRoute =styled.p`
    background:#e31837;
    white-space:nowrap;
    padding: 16px 64px;
    color:#fff;
    outline: none;
    border:none;
    cursor:pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #010606;
        background:#fff;
        transition: 0.2s ease-in-out;
    }

`

const Sidebar = ({isOpen, toggle}) => {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Close/>
            </Icon>
            <SidebarMenu>
                <SidebarLink>Milanesas</SidebarLink>
                <SidebarLink>Postres</SidebarLink>
                <SidebarLink>Menu completo</SidebarLink>
            </SidebarMenu>
            <SideBtn>
                <SidebarRoute>Ordena aqui</SidebarRoute>
            </SideBtn>
        </Container>
    )
}

export default Sidebar;
