import Head from 'next/head'
import {
  Button,
  Text,
  Heading,
  Flex,
  Box,
  Container,
  useExample,
} from '@loiste-ui/react'

export default function Home() {
  const { message } = useExample()

  return (
    <>
      <Head>
        <title>Docs - Turborepo Example</title>
      </Head>

      <main>
        <Container>
          <Flex className="items-center">
            <Heading weight="bold" size="4xl">
              Docs
            </Heading>
            <Box as="span">Turborepo Example</Box>
          </Flex>
          <Flex direction="column">
            <Button>LOL</Button>
            <Text size="4xl">{message}</Text>
          </Flex>
        </Container>
      </main>
    </>
  )
}
