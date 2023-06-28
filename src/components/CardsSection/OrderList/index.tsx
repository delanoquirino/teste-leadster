
import React, { useState } from "react";
import { SOrderList } from "./styles";
import { Select } from 'antd';



export const OrderList = () => {

const [orderListItem, setOrderListItem] = useState('')

  const handleChange = (value: string) => {
    setOrderListItem(value);
    
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
        { value: 'data de publicacao3', label: 'Data de Publicação 2' },
        { value: 'data de publicacao4', label: 'Data de Publicação 3' },
        { value: 'data de publicacao5', label: 'Data de Publicação 4'},
      ]}
    />
    </SOrderList>
  
  );
};
