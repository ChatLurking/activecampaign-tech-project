import * as React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

interface ChatBubbleProps {
  amountLeft: number
  isFullyFunded?: boolean
  newDonation?: boolean
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  amountLeft,
  isFullyFunded,
  newDonation,
}) => {
  const formatedNumber = React.useMemo(
    () => new Intl.NumberFormat(navigator.language || 'en').format(amountLeft),
    [amountLeft]
  )

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.newDonation]: newDonation,
      })}
    >
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
