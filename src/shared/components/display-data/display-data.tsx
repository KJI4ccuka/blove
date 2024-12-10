import { isRGB } from '@telegram-apps/sdk-react'
import { Cell, Checkbox, Section } from '@telegram-apps/telegram-ui'
import type { FC, ReactNode } from 'react'
import { Link } from '@/shared/components/ui/link/link'

import './styles.css'

export type DisplayDataRow =
  & { title: string }
  & (
  | { type: 'link'; value?: string }
  | { value: ReactNode }
  )

export interface DisplayDataProps {
  header?: ReactNode
  footer?: ReactNode
  rows: DisplayDataRow[]
}

export const DisplayData: FC<DisplayDataProps> = ({ header, rows }) => (
  <Section header={header}>
    {rows.map((item, idx) => {
      let valueNode: ReactNode

      if (item.value === undefined) {
        valueNode = <i>empty</i>
      } else {
        if ('type' in item) {
          valueNode = <Link href={item.value}>Open</Link>
        } else if (typeof item.value === 'string') {
          valueNode = isRGB(item.value)
            ? item.value
            : item.value
        } else if (typeof item.value === 'boolean') {
          valueNode = <Checkbox checked={item.value} disabled />
        } else {
          valueNode = item.value
        }
      }

      return (
        <Cell
          className="display-data__line"
          subhead={item.title}
          readOnly
          multiline={true}
          key={idx}
        >
          <span className="display-data__line-value">
            {valueNode}
          </span>
        </Cell>
      )
    })}
  </Section>
)