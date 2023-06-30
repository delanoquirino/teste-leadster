import React, { useState } from "react";
import { Description, ItemCard, SCards, SPagination, StyledImage, Thumbnail } from "./styles";
import { CardsItens } from "@/data";
import { Modal } from "@/components/Modal";
import { DividerBar } from "@/components/DividerBar";

type CardProps = {
  id: number;
  name: string;
  url: string;
};

export const Cards = ({ tagItem, orderItem  }: { tagItem: string, orderItem: string } ) => {
  const[openModal, setOpenModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CardProps>({ id: 0, name: "", url: "" }); 
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

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

  // Cálculo para obter os índices dos cards da página atual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = CardsItensFilter.slice(indexOfFirstCard, indexOfLastCard);

  // Função para alterar a página atual
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
    
    <SCards>
      {currentCards
      
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
    <DividerBar/>
      <SPagination defaultCurrent={1} total={20}  
        pageSize={cardsPerPage}
        onChange={handleChangePage} />
    </>
  );
};
