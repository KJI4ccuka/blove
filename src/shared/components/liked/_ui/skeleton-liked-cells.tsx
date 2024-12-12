import React from 'react'
import { Skeleton } from '@telegram-apps/telegram-ui'

interface IProps {
  isLoad: boolean
  children: React.ReactNode
}

export const SkeletonLikedCells: React.FC<IProps> = ({ children, isLoad }) => {
  return (
    <>
      <Skeleton
        className={'rounded-[20px] overflow-hidden'}
        visible={isLoad}
      >
        {children}
      </Skeleton>
    </>
  )
}
