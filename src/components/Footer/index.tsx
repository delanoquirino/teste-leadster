"use client";
import { Container, FooterCopy, FooterLogo, LinkSocialMidia, ListSocialMedia, SectionFooter } from "./styles";
import Image from "next/image";
import { DividerBar } from "../DividerBar";

import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import Link from "next/link";

export const Footer = () => {
  return (
    <SectionFooter>
      <FooterLogo>
        <Image src="/logo.png" width={250} height={60} alt="logo leadster" />
        <p>Transformando visitantes em clientes.</p>
      </FooterLogo>
      <Container>
        <div>
          <p>Links Principais</p>
          <ul>
            <li>Home</li>
            <li>Ferramenta</li>
            <li>Preços</li>
            <li>Contato</li>
          </ul>
        </div>
        <div>
          <p>Cases</p>
          <ul>
            <li>Geração de Leads B2B</li>
            <li>Geração de Leads em Software</li>
            <li>Geração de Leads em Imobiliária</li>
            <li>Cases de Sucesso</li>
          </ul>
        </div>
        <div>
          <p>Materais</p>
          <ul>
            <li>Blog</li>
            <li>Parceria com Agências</li>
            <li>Guia Definitivo</li>
            <li>Materiais Gratuitos</li>
          </ul>
        </div>
        <div>
          <p>Siga a Leadster</p>
          <ul>
          <ListSocialMedia>
            <LinkSocialMidia href="https://www.linkedin.com/company/leadster-platform/" target="_blank" ><AiOutlineLinkedin/></LinkSocialMidia>
            <LinkSocialMidia href="https://www.facebook.com/leadsterplatform" target="_blank"><BiLogoFacebook/></LinkSocialMidia>
            <LinkSocialMidia href="https://www.instagram.com/leadster.com.br/" target="_blank"><AiOutlineInstagram/></LinkSocialMidia>
          </ListSocialMedia>
            <li> <span>E-mail:</span> contato@leadster.com.br</li>
            <li> <span>Telefone:</span> (42) 98828-9851</li>
          </ul>
        </div>
      </Container>

      <DividerBar />
    
        <FooterCopy>
          <p>
            Copyright &#169; 2015 - 2022 Todos os direitos reservados <span>Leadster</span></p>
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 <Link href="https://leadster.com.br/termos_de_uso/" target="_blank">Termos de uso</Link>
          </p>
        </FooterCopy>
      
    </SectionFooter>
  );
};
