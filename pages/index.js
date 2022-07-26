import { Box } from '@chakra-ui/react'
import MainContainer from '../components/layouts/main'

export default function Home() {
  return (
    <MainContainer maxW='container.md'>
      <Box h='100vh'>
        <p>Hello</p>
      </Box>
    </MainContainer>
  )
}
