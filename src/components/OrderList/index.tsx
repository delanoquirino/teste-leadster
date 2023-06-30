
import React, { useState } from "react";
import { SOrderList } from "./styles";
import { Select } from 'antd';

type TagFilterProps = {
 
  setOrderItem: (itemName: string) => void;
   
};

export const OrderList = ({setOrderItem}: TagFilterProps) => {



  const handleChange = (value: string) => {
    setOrderItem(value);
    
  };
  return (
    <SOrderList>
      <span>Ordenar por</span>
      <Select
      defaultValue=""
      style={{ width: 170 }}
      onChange={handleChange}
      options={[
        { value: 'data de publicacao', label: 'Data de Publicação' },
        { value: 'A-Z', label: 'A-Z' },
        { value: 'Z-A', label: 'Z-A' }
      ]}
    />
    </SOrderList>
  
  );
};
