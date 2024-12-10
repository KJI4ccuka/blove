'use client'

import { Input, List, Tappable } from '@telegram-apps/telegram-ui'

import { Page } from '@/shared/components/page'
import { Icon24Close } from '@telegram-apps/telegram-ui/dist/icons/24/close'
import { useState } from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'


export default function InitDataPage() {
  const [value, setValue] = useState('')
  const initDataState = useSignal(initData.state)
  
  return (
    <Page>
      <List>
        <List>
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
      </List>
    </Page>
  )
}
