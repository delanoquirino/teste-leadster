"use client";

import React from "react";
import { Container, Content, DividingBar, TfeaturedSection } from "./styles";
import Image from "next/image";

export const FeaturedSection = () => {
  return (
    <TfeaturedSection>
      <Container>
        <Content>
          <p>webinars exclusivos</p>

          <h2>Menos Conversinha</h2>
          <h1>
            Mais Conversão
            <span>
              <Image
                src="/asset-header.png"
                width={30}
                height={20}
                alt="logo leadster"
              ></Image>
            </span>
          </h1>
          
        </Content>
        <DividingBar></DividingBar>
        <p>
          Conheça as estratégias que <span>mudaram o jogo</span> e como
          aplicá-las no seu negócio
        </p>
      </Container>
    </TfeaturedSection>
  );
};
