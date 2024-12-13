import React, { useState } from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { Avatar, FileInput } from '@telegram-apps/telegram-ui'
import { cn } from '@/shared/components/ui/utils'

interface IProps {
  className?: string
}

export const UserAvatar: React.FC<IProps> = ({ className }) => {
  const [editAvatar, setEditAvatar] = useState(false)
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

  return (
    <div onClick={() => setEditAvatar(!editAvatar)} className={cn('flex flex-col items-center relative cursor-pointer rounded-full', className)}>
      <Avatar
        size={96}
        src={photoUrl}
        acronym={getUserName()}
      />

      {editAvatar &&
        <div className={'absolute bottom-0 h-10 backdrop-blur overflow-y-hidden rounded-b-full bg-black/20 px-2.5'}>

          <FileInput
            label=""
            multiple={false}
            onChange={function noRefCheck() {}}
          />
        </div>
      }


    </div>
  )
}
