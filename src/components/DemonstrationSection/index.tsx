"use client";

import React from "react";
import { ButtonDemonstration, Container, ContainerImage, Content, Rating, SDemonstrationSection, SImage, Text, TextCard, TextRating } from "./styles";
import Image from "next/image";
import { DividerBar } from "../DividerBar";

export const DemonstrationSection = () => {
  return (
    <SDemonstrationSection>
      <Container>
        <ContainerImage>
          <SImage
            src="/comparativo.png"
            width={800}
            height={600}
            alt="imagem mostrando os resultados da estratégia Leadster "
          />
        </ContainerImage>
        
        <Content>
          <Text>
            <h1>
              Pronto para triplicar sua <span>Geração de Leads?</span>
            </h1>
            <p>Criação e ativação em 4 minutos.</p>
          </Text>
          <DividerBar />
          <ButtonDemonstration>
            <button>Ver Demonstração</button>
            <div>
              <Image
                src="/selo_RD.png"
                width={150}
                height={50}
                alt="imagem mostrando os resultados da estratégia Leadster "
              />
            </div>
          </ButtonDemonstration>
          <Rating>
            <TextCard>
              <Image
                src="/no-card-dark.webp"
                width={20}
                height={20}
                alt="imagem mostrando os resultados da estratégia Leadster "
              />
              Não é nessecário Cartão de Crédito
            </TextCard>
            <TextRating>
              <Image
                src="/rating.webp"
                width={90}
                height={15}
                alt="imagem mostrando os resultados da estratégia Leadster "
              />
              4.9/5 média de satisfação
            </TextRating>
          </Rating>
        </Content>
      </Container>
    </SDemonstrationSection>
  );
};
