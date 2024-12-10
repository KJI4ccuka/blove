'use client'

import { Cell, Image, List, Section } from '@telegram-apps/telegram-ui'

import { Link } from '@/components/Link/Link'
import { Page } from '@/components/Page'

import tonSvg from './_assets/ton.svg'
import { Nav } from '@/components/widgets/nav'

export default function Home() {

  return (
    <Page back={false}>
      <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link href="/ton-connect">
            <Cell
              before={
                <Image
                  src={tonSvg.src}
                  style={{ backgroundColor: '#007AFF' }}
                />
              }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link href="/init-data">
            <Cell subtitle="User data, chat information, technical data">
              Init Data
            </Cell>
          </Link>
        </Section>
      </List>

      <Nav />
    </Page>
  )
}
