import Head from 'next/head'
import { Button, Text, Heading, Flex, Box, useExample } from '@loiste-ui/react'

export default function Home() {
  const { message } = useExample()

  return (
    <>
      <Head>
        <title>Docs - Turborepo Example</title>
      </Head>

      <main>
        <Flex direction="column">
          <Heading weight="bold" size="4xl">
            Docs
          </Heading>

          <Box as="span">Turborepo Example</Box>
          <Flex direction="column">
            <Button>LOL</Button>
            <Text size="2xl">{message}</Text>
            <Text>LOL</Text>
            <Heading>LOL</Heading>
            <Heading as="h4">LOL</Heading>
          </Flex>
        </Flex>
      </main>
    </>
  )
}
