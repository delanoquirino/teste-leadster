"use client"

import React from 'react'
import { Container, Filters, SPagination, TCardsSection } from './styles'
import { TagFilter } from './TagFilter'
import { OrderList } from './OrderList'
import { DividerBar } from '../DividerBar'
import { Cards } from './Cards'

export const CardsSection = () => {
  
  return (
    <TCardsSection>
      <Container>
        <Filters>
          <TagFilter/>
          <OrderList/>
        </Filters>
        <DividerBar/>
        <Cards/>
        <DividerBar/>
        <SPagination defaultCurrent={1} total={50} />
      </Container>
    </TCardsSection>
  )
}
