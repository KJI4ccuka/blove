'use client'

import { Page } from '@/shared/components/page'
import { Container } from '@/shared/components/ui/container'
import { Button, Placeholder, Steps } from '@telegram-apps/telegram-ui'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { useRouter } from 'next/navigation'

export default function Registration() {
  const initDataState = useSignal(initData.state)
  const router = useRouter()

  const handleClick = () => {
    router.push('/home')
  }

  return (
    <Page back={false}>
      <Container>

        <div className={''}>
          <Placeholder
            action={
            <Button onClick={() => handleClick()} size="l" stretched>{`Let's start`}</Button>
          }
            header='Welcome'
            description={`@${initDataState?.user?.username}`}
          >
            <img
              alt="Telegram sticker"
              className="blt0jZBzpxuR4oDhJc8s"
              src="https://xelene.me/telegram.gif"
            />
          </Placeholder>
        </div>

        <Steps
          count={12}
          progress={5}
        />
      </Container>
    </Page>
  )
}
