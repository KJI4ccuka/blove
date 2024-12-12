'use client'

import { Page } from '@/shared/components/page'
import { Container } from '@/shared/components/ui/container'
import { Text, Title } from '@telegram-apps/telegram-ui'
import { LikedAvatarsStack, LikedCells } from '@/shared/components/liked'

export default function Home() {

  return (
    <Page>
      <Container className={'flex h-screen flex-col items-center mt-6 mb-24'}>

        <Title weight={'2'}>
          Your favorites
        </Title>
        <Text weight="3">
          People who liked you
        </Text>

        <LikedAvatarsStack />

        <LikedCells />

      </Container>
    </Page>
  )
}
