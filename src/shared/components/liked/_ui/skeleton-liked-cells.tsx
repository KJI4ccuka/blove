import React from 'react'
import { Skeleton } from '@telegram-apps/telegram-ui'

interface IProps {
  isLoad: boolean
}

export const SkeletonLikedCells: React.FC<IProps> = ({ isLoad }) => {
  return (
    <>
      <Skeleton
        className={'rounded-[20px] overflow-hidden -z-[1] h-56 min-w-44'}
        visible={isLoad}
      >
        <div
          className={'absolute bottom-12 left-4 z-50 w-32 animate-pulse h-3.5 bg-black/50 rounded-xl'}
        />

        <div
          className={'absolute bottom-7 left-4 z-50 w-20 animate-pulse h-3 bg-black/50 rounded-xl'}
        />
      </Skeleton>
    </>
  )
}
