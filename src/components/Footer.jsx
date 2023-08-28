import styled from "styled-components";
import { ContenidoParcial } from "./Estilos";

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.oscuro};
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme.primero};
`;
const LinkExterno = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primero};
    font-weight: 700;
`;

const FooterContenido = styled(ContenidoParcial)`
    text-align: center;
    color: ${({ theme }) => theme.texto};
`;

export function Foot() {
    return (
        <Footer>
            <FooterContenido>
                Desarrollado por <LinkExterno
                 href="https://github.com/Walter185" target="_blank">Walter Liendo    
                 </LinkExterno>
                 &nbsp; &copy;2022
            </FooterContenido>
        </Footer>
    );
}