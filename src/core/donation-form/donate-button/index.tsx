import * as React from 'react'

import styles from './styles.scss'

interface DonateButtonProps {
  onClick?: () => void
}

export const DonateButton: React.FC<DonateButtonProps> = ({
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Give now
    </button>
  )
}
