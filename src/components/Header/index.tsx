"use client"

import React from 'react'
import { Container, Theader } from './styles'
import Image from 'next/image'

export const Header = () => {
  return (
    <Theader>
        <Container>
            <Image src="/logo.png" width={150} height={30} alt="logo leadster" />
        </Container>
    </Theader>
  )
}
