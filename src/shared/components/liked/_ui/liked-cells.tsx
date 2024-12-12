import React from 'react'
import { Card } from '@telegram-apps/telegram-ui'
import { CardChip } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip'
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell'
import { cn } from '@/shared/components/ui/utils'

interface IProps {
  className?: string
}

export const LikedCells: React.FC<IProps> = ({ className }) => {
  const isOnline = true
  return (
    <div className={cn(className, 'grid grid-cols-2 gap-2 px-2 mt-6')}>
      <Card type="ambient">
        <>
          <CardChip readOnly>
            {isOnline ? 'Online' : 'Offline'}
          </CardChip>

          <img
            alt="Dog"
            src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              display: 'block',
              height: 220,
              objectFit: 'cover',
              width: 200
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
      <Card type="ambient">
        <>
          <CardChip readOnly>
            {isOnline ? 'Online' : 'Offline'}
          </CardChip>

          <img
            alt="Dog"
            src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              display: 'block',
              height: 220,
              objectFit: 'cover',
              width: 200
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
      </Card> <Card type="ambient">
        <>
          <CardChip readOnly>
            {isOnline ? 'Online' : 'Offline'}
          </CardChip>

          <img
            alt="Dog"
            src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              display: 'block',
              height: 220,
              objectFit: 'cover',
              width: 200
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
      <Card type="ambient">
        <>
          <CardChip readOnly>
            {isOnline ? 'Online' : 'Offline'}
          </CardChip>

          <img
            alt="Dog"
            src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              display: 'block',
              height: 220,
              objectFit: 'cover',
              width: 200
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
    </div>
  )
}
