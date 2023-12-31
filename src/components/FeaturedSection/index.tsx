"use client";

import React from "react";
import { Container, Content, TfeaturedSection } from "./styles";
import Image from "next/image";
import { DividerBar } from "../DividerBar";

export const FeaturedSection = () => {
  return (
    <TfeaturedSection>
      <Container>
        <Content>
          <p>webinars exclusivos</p>

          <h2>Menos Conversinha</h2>
          <h1>
            Mais Conversã
            <span>
            o <Image
                src="/asset-header.png"
                width={20}
                height={20}
                alt="logo leadster"
                style={{ width: '100%', height: 'auto' }}
              ></Image>
            </span>
                        
          </h1>
          <DividerBar/>
        </Content>
       
        <p>
          Conheça as estratégias que <span>mudaram o jogo</span> e como
          aplicá-las no seu negócio
        </p>
      </Container>
    </TfeaturedSection>
  );
};
