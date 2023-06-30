import React from "react";
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
    { id: 1, name: "Empresa" },
    { id: 2, name: "Chat" },
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
        <ItemList key={item.id}><TagButton isactive={item.name === tagItem ? "true" : "false"} onClick={() => handleTagItemClick(item.name)} >{item.name}</TagButton></ItemList>
      ))}
    </List>
  );
};
