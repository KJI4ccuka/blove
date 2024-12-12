'use client'

import { Page } from '@/shared/components/page'
import { Container } from '@/shared/components/ui/container'
import { Avatar, AvatarStack, Button, FixedLayout, Text, Title } from '@telegram-apps/telegram-ui'
import { LikedCells } from '@/shared/components/liked/_ui/liked-cells'


export default function Home() {

  return (
    <Page>
      <Container className={'flex h-screen flex-col items-center pt-10 '}>

        <Title weight={'2'}>
          Your favorites
        </Title>

        <Text weight="3">
          People who liked you
        </Text>

        <AvatarStack>
          <Avatar
            size={48}
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            size={48}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            size={48}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            size={48}
            src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </AvatarStack>

        <LikedCells />

        <FixedLayout vertical="bottom" style={{
          padding: 16,
          marginBottom: 75
        }}>
          <Button size="l" stretched>
            Get more likes
          </Button>
        </FixedLayout>
      </Container>
    </Page>
  )
}
