import React from 'react'
import { LoginBlock } from '../components/LoginBlock/LoginBlock'
import { Footer } from '../widgets/Auth/Footer/Footer'
import { Main } from '../widgets/Auth/Main/Main'

const Login = () => {
  return (
    <>
      <Main>
        <LoginBlock />
      </Main>
      <Footer>
        
      </Footer>
    </>
  )
}

export default Login