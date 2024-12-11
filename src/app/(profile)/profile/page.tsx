'use client'

import { Input, List, Multiselect, Section, Tappable } from '@telegram-apps/telegram-ui'

import { Page } from '@/shared/components/page'
import { Icon24Close } from '@telegram-apps/telegram-ui/dist/icons/24/close'
import { useState } from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { Container } from '@/shared/components/ui/container'
import { UserAvatar } from '@/shared/components/ui/avatar'

export default function InitDataPage() {
  const [value, setValue] = useState('')
  const [gender, setGender] = useState<any>()
  const initDataState = useSignal(initData.state)


  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ]

  return (
    <Page>
      <Container className={'flex flex-col items-center pt-4'}>

        <UserAvatar/>

        <List className={'w-full'}>
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
              header="Your age"
              placeholder="21 y.o. designer from San Francisco"
            />

            <Multiselect
              options={genderOptions}
              value={gender}
              onChange={(selected: any) => setGender(selected)}
              closeDropdownAfterSelect={true}
              header="Show me"
            />

            <Input
              header="Your gender"
              placeholder="21 y.o. designer from San Francisco"
            />

            <Input
              header="Your age"
              placeholder="21 y.o. designer from San Francisco"
            />
          </Section>
        </List>

      </Container>
    </Page>
  )
}
