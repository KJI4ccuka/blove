import React from 'react'
import { SegmentedControl } from '@telegram-apps/telegram-ui'
import {
  SegmentedControlItem
} from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem'
import { cn } from '@/shared/components/ui/utils'

interface IProps {
  className?: string
}

export const LikedTabs: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cn(className, 'w-full px-2 mt-4')}>
      <SegmentedControl className={''}>
        <SegmentedControlItem
          onClick={function noRefCheck(){}}
          selected
        >
          Likers
        </SegmentedControlItem>
        <SegmentedControlItem
          onClick={function noRefCheck(){}}
        >
          Matched
        </SegmentedControlItem>
        <SegmentedControlItem
          onClick={function noRefCheck(){}}
        >
          Liked
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  )
}
