'use client'

import {
  Cell,
  Headline,
  IconButton,
  IconContainer,
  Input,
  List,
  Multiselect,
  Section,
  Subheadline,
  Tappable
} from '@telegram-apps/telegram-ui'

import { Page } from '@/shared/components/page'
import { Icon24Close } from '@telegram-apps/telegram-ui/dist/icons/24/close'
import { useState } from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { Container } from '@/shared/components/ui/container'
import { UserAvatar } from '@/shared/components/ui/avatar'
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices'
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat'
import { Icon24Notifications } from '@telegram-apps/telegram-ui/dist/icons/24/notifications'
import { Icon28Lock } from '@/shared/icons/icons'

export default function InitDataPage() {
  const [value, setValue] = useState('')
  const [gender, setGender] = useState<any>()
  const initDataState = useSignal(initData.state)

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ]

  return (
    <Page>
      <Container className={'flex flex-col items-center mt-6 mb-24 relative'}>

        <UserAvatar className={'mb-2'} />

        <Headline
          weight="2"
        >
          {`${initDataState?.user?.firstName}  ${initDataState?.user?.lastName}`}
        </Headline>
        <Subheadline
          level="2"
          weight="3"
        >
          19 old
        </Subheadline>

        <div className={'absolute right-3 -top-3'}>
          <IconButton
            className={'rounded-full'}
            mode="bezeled"
            size="s"
          >
            <Icon24Notifications />
          </IconButton>
        </div>

        <List className={'w-full'}>
          <Section

            header="Profile settings"
          >
            <Cell before={<IconContainer><Icon28Chat /></IconContainer>}>
              Chat Settings
            </Cell>
            <Cell before={<IconContainer><Icon28Devices /></IconContainer>}>
              Data and Storage
            </Cell>
            <Cell before={<IconContainer><Icon28Lock /></IconContainer>}>
              Privacy and Security
            </Cell>
          </Section>

          <Section
            header="Personal Information"
          >
            <Input
              header="Your name"
              placeholder={initDataState?.user?.username}
              value={value} onChange={e => setValue(e.target.value)}
              after={
                <Tappable Component="div" onClick={() => setValue('')}>
                  {value && <Icon24Close />}
                </Tappable>
              }
            />
            <Input
              header="Last name"
              placeholder="21 y.o. designer from San Francisco"
            />

            <Multiselect
              options={genderOptions}
              value={gender}
              onChange={(selected: any) => setGender(selected)}
              closeDropdownAfterSelect={true}
              header="Show me"
            />
          </Section>
        </List>
      </Container>
    </Page>
  )
}
