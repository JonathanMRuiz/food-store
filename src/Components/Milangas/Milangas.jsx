import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Container = styled.div`
    
    background: 
    linear-gradient(to right, rgba(0,0,0, 0.7), 
    rgba(0,0,0, 0.1)), 
    url("https://astelus.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg")center;
    height:100vh;
    background-position:center;
    background-size:cover;
    `


const MilangasContent =styled.div`
    height:calc(100vh-80px);
    max-height:100%;
    width:100vw;
    padding: 0rem calc((100vw - 1300px)/2)
`
const MilangasItems =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    height:100vh;
    max-height:100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height:1;
    font-weight:bold;

    @media screen and (max-width: 650px){
        width: 100%;

    }

`
const MilangasH1 =styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow:3px 5px #e9ba23;
    letter-spacing: 3px;
    
`
const MilangasP =styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;

`
const MilangasButton = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border:none;
    background: #e31837;
    color:#fff;
    transition: 0.2s ease-out;

    &:hover{
        background: #ffc500;
        transition:0.2 ease-out;
        cursor: pointer;
        
    }
`



const Milangas = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <Container>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <MilangasContent>
                <MilangasItems>
                    <MilangasH1>Las mejores milanesas de Argentina</MilangasH1>
                    <MilangasP>listas en 10 minutos</MilangasP>
                    <MilangasButton>Ordene aqui</MilangasButton>
                </MilangasItems>
            </MilangasContent>
        </Container>
    )
}

export default Milangas;
