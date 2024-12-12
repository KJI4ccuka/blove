import React, { useEffect, useState } from 'react'
import { Card } from '@telegram-apps/telegram-ui'
import { CardChip } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip'
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell'
import { cn } from '@/shared/components/ui/utils'
import { SkeletonLikedCells } from '@/shared/components/liked/_ui/skeleton-liked-cells'

interface IProps {
  className?: string
}


type Likers = {
  avatarUrl: string
}

const usersWhoLiked: Likers[] = [
  { avatarUrl: 'https://media.istockphoto.com/id/1326417862/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%81%D0%BC%D0%B5%D0%B5%D1%82%D1%81%D1%8F-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=S5kj1xMVROvdovQaZ2zkL5ydZM0M32V7lBpe86VVuNQ=' },
  { avatarUrl: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { avatarUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
]

export const LikedCells: React.FC<IProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(true)

  const isOnline = true

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={cn(className, 'grid grid-cols-2 gap-3 px-2 mt-3 pb-24')}>
      {isLoading ?
        new Array(4).fill(null).map((_, key) => (
          <SkeletonLikedCells key={key} isLoad={isLoading} />
        ))

        : usersWhoLiked.map((item, key) => (
          <Card key={key} type="ambient">
            <>
              <CardChip readOnly>
                <span className={'text-sm'}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </CardChip>

              <img
                alt={item.avatarUrl}
                src={item.avatarUrl}
                style={{
                  display: 'block',
                  height: 224,
                  objectFit: 'cover',
                  width: 208
                }}
              />
              <CardCell
                className={'transition-colors hover:bg-white/0 hover:blur hover:scale-105'}
                readOnly
                subtitle="United states"
              >
                New York
              </CardCell>
            </>
          </Card>
        ))}
    </div>
  )
}
