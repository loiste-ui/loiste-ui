import Head from 'next/head'
import { Button, Text, Heading, useExample } from '@loiste-ui/react'

export default function Home() {
  const { message } = useExample()

  return (
    <div>
      <Head>
        <title>Docs - Turborepo Example</title>
      </Head>

      <main>
        <h1>
          Docs
          <span>Turborepo Example</span>
        </h1>
        <div>
          <Button>LOL</Button>
          <Text size="2xl">{message}</Text>
          <Text>LOL</Text>
          <Heading>LOL</Heading>
          <Heading as="h4">LOL</Heading>
        </div>
      </main>
    </div>
  )
}
