import React from 'react'

import ListHorizontal from '../../components/ListHorizontal'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ListHorizontal />
      <ListHorizontal />
    </Container>
  )
}

export default Dashboard
