import * as React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

interface DonateInputProps {
  value: string
  handleValueChange: (arg0: string) => void
  hasError?: boolean
}

export const DonateInput: React.FC<DonateInputProps> = ({
  value,
  handleValueChange,
  hasError,
}) => {
  const onValueChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.currentTarget.value
        ? Math.abs(
            parseInt(event.currentTarget.value.split('.')[0], 10)
          ).toString()
        : ''

      handleValueChange(value)
    },
    [handleValueChange]
  )

  return (
    <div className={styles.wrapper}>
      <span className={styles.dollarSign}>$</span>
      <input
        className={classnames(styles.donateInput, { [styles.error]: hasError })}
        aria-label='Donate USD'
        type='number'
        onChange={onValueChange}
        value={value}
        min='5'
        step='1'
        aria-invalid={hasError}
      />
    </div>
  )
}
