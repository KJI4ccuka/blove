import React from 'react'

import { Spinner } from '@telegram-apps/telegram-ui'

interface IProps {
  className?: string
}

export const LoadSpinner: React.FC<IProps> = ({ className }) => {
  return (
    <>
      <Spinner size="s" />
    </>
  )
}
