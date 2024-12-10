'use client'

import { Avatar, Input, List, Multiselect, Section, Tappable } from '@telegram-apps/telegram-ui'

import { Page } from '@/shared/components/page'
import { Icon24Close } from '@telegram-apps/telegram-ui/dist/icons/24/close'
import { useState } from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { Container } from '@/shared/components/ui/container'

export default function InitDataPage() {
  const [value, setValue] = useState('')
  const [gender, setGender] = useState()
  const initDataState = useSignal(initData.state)

  if (!initDataState?.user?.username) {
    return
  }

  const {
    username,
    photoUrl,
    firstName,
    lastName
  } = initDataState.user

  const getUserName = function() {
    let userAcronym = ''

    if (firstName) {
      userAcronym = firstName
    }

    if (lastName) {
      userAcronym = userAcronym + lastName
    }

    if (!userAcronym && username) {
      userAcronym = username
    }

    return userAcronym.toUpperCase()
  }

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ]

  return (
    <Page>
      <Container className={'flex flex-col items-center pt-4'}>

        <Avatar
          size={96}
          src={photoUrl}
          acronym={getUserName()}
        />

        <List className={'w-full'}>
          <Section
            footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
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
              value={genderOptions}
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
