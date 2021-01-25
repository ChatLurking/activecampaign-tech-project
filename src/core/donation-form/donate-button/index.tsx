import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

interface DonateButtonProps {
  onClick?: () => void
  hasError?: boolean
}

export const DonateButton: React.FC<DonateButtonProps> = ({
  onClick,
  hasError,
}) => {
  return (
    <button
      className={classnames(styles.button, { [styles.error]: hasError })}
      onClick={onClick}
    >
      Give now
    </button>
  )
}
