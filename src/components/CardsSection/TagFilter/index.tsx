import React, { useState } from "react";
import { ItemList, List, TagButton } from "./styles";

type ItemProps = {
  id: number;
  name: string;
};

type TagFilterProps = {
  tagItem: string;
   setTagItem: (itemName: string) => void;
   
};

export const TagFilter = ({ tagItem,setTagItem}: TagFilterProps) => {
  
  
  const itens = [
    { id: 1, name: "Agência" },
    { id: 2, name: "Chatbot" },
    { id: 3, name: "Marketing Digital" },
    { id: 4, name: "Geração de Leads" },
    { id: 5, name: "Mídia Paga" },
    
  ];

  const handleTagItemClick = (itemName: string) => {
    if (itemName === tagItem) {
      setTagItem(''); 
    } else {
      setTagItem(itemName);
    }
  };

  return (
    <List>
      {itens.map((item: ItemProps) => (
        <ItemList key={item.id}><TagButton isActive={item.name === tagItem} onClick={() => handleTagItemClick(item.name)} >{item.name}</TagButton></ItemList>
      ))}
    </List>
  );
};
