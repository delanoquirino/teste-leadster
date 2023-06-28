import React from "react";
import { Description, ItemCard, SCards, StyledImage, Thumbnail, VideoCard } from "./styles";
import { CardsItens } from "@/data";

type CardProps = {
  id: number;
  name: string;
};

export const Cards = ({ tagItem  }: { tagItem: string, }) => {
  
  const CardsItensFilter = CardsItens.filter(CardItem => CardItem.name.includes(tagItem))

  return (
    <SCards>
      {CardsItensFilter
      
      .map((CardItem: CardProps) => (
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
