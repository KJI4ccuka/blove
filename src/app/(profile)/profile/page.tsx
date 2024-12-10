'use client'

import { Avatar, Input, List, Tappable } from '@telegram-apps/telegram-ui'

import { Page } from '@/shared/components/page'
import { Icon24Close } from '@telegram-apps/telegram-ui/dist/icons/24/close'
import { useState } from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'

export default function InitDataPage() {
  const [value, setValue] = useState('')
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

  console.log(initDataState)

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

  return (
    <Page>
        <List className={'gradient-radial gradient-conic flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List><List className={'flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List><List className={'flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List><List className={'flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List><List className={'flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List><List className={'flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List><List className={'flex justify-center items-center'}>
          <Avatar
            size={96}
            src={photoUrl}
            acronym={getUserName()}
          />

          <Input
            header="Your name"
            placeholder={initDataState?.user?.username}
            value={value} onChange={e => setValue(e.target.value)}
            after={
              <Tappable Component="div" onClick={() => setValue('')}>
                {value &&  <Icon24Close />}
              </Tappable>
            }
          />
        </List>
    </Page>
  )
}
