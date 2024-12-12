import { Avatar, AvatarStack } from '@telegram-apps/telegram-ui'
import React from 'react'
import { cn } from '@/shared/components/ui/utils'

type Likers = {
  avatarUrl: string
}

interface IProps {
  className?: string
}

export const LikedAvatarsStack: React.FC<IProps> = ({ className }) => {

  const usersWhoLiked: Likers[] = [
    { avatarUrl: 'https://media.istockphoto.com/id/1326417862/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%81%D0%BC%D0%B5%D0%B5%D1%82%D1%81%D1%8F-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=S5kj1xMVROvdovQaZ2zkL5ydZM0M32V7lBpe86VVuNQ=' },
    { avatarUrl: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { avatarUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]

  return (
    <div className={cn(className, 'mt-2')}>
      <AvatarStack>
        {usersWhoLiked.map((link, key) => (
          <Avatar
            key={key}
            size={48}
            src={link.avatarUrl}
          />
        ))}
      </AvatarStack>
    </div>
  )
}
