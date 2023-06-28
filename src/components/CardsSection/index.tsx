"use client"

import React, { useState } from 'react'
import { Container, Filters, SPagination, TCardsSection } from './styles'
import { TagFilter } from './TagFilter'
import { OrderList } from './OrderList'
import { DividerBar } from '../DividerBar'
import { Cards } from './Cards'

export const CardsSection = () => {
  const [tagItem, setTagItem] = useState("");
  return (
    <TCardsSection>
      <Container>
        <Filters>
          <TagFilter tagItem={tagItem} setTagItem={setTagItem} />
          <OrderList/>
        </Filters>
        <DividerBar/>
        <Cards tagItem={tagItem} />
        <DividerBar/>
        <SPagination defaultCurrent={1} total={50} />
      </Container>
    </TCardsSection>
  )
}
