import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle, { ContainerRoutes } from './styles/global'
import Routes from './routes'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <ContainerRoutes>
        <Routes />
      </ContainerRoutes>
      <GlobalStyle />
    </Router>
  )
}

export default App
