import React, { useState } from "react";
import { Description, ItemCard, SCards, StyledImage, Thumbnail } from "./styles";
import { CardsItens } from "@/data";
import { Modal } from "@/components/Modal";

type CardProps = {
  id: number;
  name: string;
  url: string
};

export const Cards = ({ tagItem, orderItem  }: { tagItem: string, orderItem: string } ) => {
  const[openModal, setOpenModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CardProps>(); 


  const lowerCaseTagItem = tagItem.toLowerCase();
  let CardsItensFilter = CardsItens.filter(CardItem =>
    CardItem.name.toLowerCase().includes(lowerCaseTagItem)
  );
    
  if (orderItem === "data de publicacao") {
    CardsItensFilter = CardsItensFilter.sort((a, b) =>
    a.id - b.id
    );
  } else if (orderItem === "A-Z") {
    CardsItensFilter = CardsItensFilter.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (orderItem === "Z-A") {
    CardsItensFilter = CardsItensFilter.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  const handleCardClick = (card: CardProps) => {
    setSelectedCard(card);
    setOpenModal(true);
    
  };

  return (
    <SCards>
      {CardsItensFilter
      
      .map((CardItem: CardProps) => (
        <ItemCard key={CardItem.id}>
          <button onClick={() => handleCardClick(CardItem)}>
            <div>
              <Thumbnail>
                <StyledImage src="/thumbnail.png" width={500}
                 height={500} alt="Thumbnail" />
              </Thumbnail>
            
            </div>
            <Description>
              <p>{CardItem.name}</p>
            </Description>
          </button>
        </ItemCard>
      ))}
      <Modal isOpen={openModal} card={selectedCard} setOpenModal={() => setOpenModal(!openModal)} />
    </SCards>
  );
};
