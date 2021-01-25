import * as React from 'react'
import styles from './styles.scss'

interface ChatBubbleProps {
  amountLeft: number
  isFullyFunded?: boolean
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  amountLeft,
  isFullyFunded,
}) => {
  const formatedNumber = React.useMemo(
    () => new Intl.NumberFormat('en').format(amountLeft),
    [amountLeft]
  )

  return (
    <div className={styles.wrapper}>
      <p className={styles.chatText}>
        {!isFullyFunded ? (
          <span>
            <sup className={styles.superscript}>$</sup>
            <strong>{formatedNumber}</strong> still needed to fund this project.
          </span>
        ) : (
          <span>Project successfully funded!</span>
        )}
      </p>
    </div>
  )
}
