import React from 'react'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { Avatar } from '@telegram-apps/telegram-ui'

interface IProps {
  className?: string
}

export const UserAvatar: React.FC<IProps> = ({ className }) => {
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
    <Avatar
      size={96}
      src={photoUrl}
      acronym={getUserName()}
    />
  )
}
