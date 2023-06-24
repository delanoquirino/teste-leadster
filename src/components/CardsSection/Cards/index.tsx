import React from "react";
import { Description, ItemCard, SCards, StyledImage, Thumbnail, VideoCard } from "./styles";


type CardProps = {
  id: number;
  name: string;
};

export const Cards = () => {
  const CardItens = [
    { id: 1, name: "Geração de Leads" },
    { id: 2, name: "Agências" },
    { id: 3, name: "Marketing Digital" },
    { id: 4, name: "Chatbot" },
    { id: 5, name: "Mídia Paga" },
    { id: 6, name: "Geração de Leads" },
    { id: 7, name: "Agências" },
    { id: 8, name: "Marketing Digital" },
    { id: 9, name: "Chatbot" },
  ];
  return (
    <SCards>
      {CardItens.map((CardItem: CardProps) => (
        <ItemCard key={CardItem.id}>
          <div>
            <Thumbnail>
              <StyledImage src="/thumbnail.png" width={500}
      height={500} alt="Thumbnail" />
            </Thumbnail>
            
          </div>
          <Description>
            <p>{CardItem.name}</p>
          </Description>
        </ItemCard>
      ))}
    </SCards>
  );
};
