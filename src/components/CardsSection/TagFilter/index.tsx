import React from "react";
import { ItemList, List } from "./styles";

type ItemProps = {
  id: number;
  name: string;
};

export const TagFilter = () => {
  const itens = [
    { id: 1, name: "Agência" },
    { id: 2, name: "Chatbot" },
    { id: 3, name: "Marketing Digital" },
    { id: 4, name: "Geração de Leads" },
    { id: 5, name: "Mídia Paga" },
  ];
  return (
    <List>
      {itens.map((item: ItemProps) => (
        <ItemList key={item.id}>{item.name}</ItemList>
      ))}
    </List>
  );
};
