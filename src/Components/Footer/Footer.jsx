import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import styled from 'styled-components';


const Container = styled.footer`
    background-color:#0d0909;
`
const FooterWrap = styled.div`
    padding:16 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1300px;
    margin:0 auto;
`
const SocialMedia = styled.section`
    max-width:1300px;
    width:100%;
`
const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin:16px auto 0 auto;

    @media screen and (max-width:820px){
        flex-direction:column
    }
`
const SocialLogo = styled.div`
    color:#fff;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight:bold;

`
const SocialIcon = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;

`
const SocialIconLink = styled.div`
    color:#fff;
    font-size:24px;
    cursor:pointer;
`

const Footer = () => {
    return (
        <Container>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>El palacio de las milangas</SocialLogo>

                        <SocialIcon >
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener ">
                                <Facebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <Instagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <Twitter/>
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </Container>
    )
}

export default Footer
