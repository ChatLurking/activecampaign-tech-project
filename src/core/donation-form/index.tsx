import * as React from 'react'
import { DonateButton } from './donate-button'
import { DonateInput } from './donate-input'
import { ProgressBar } from './progress-bar'
import styles from './styles.scss'
// used to see if error will happen on form submit
const coinFlip = () => {
  if (Math.random() > 0.5) {
    return false
  }
  return true
}

const TARGET_VALUE = 1000

export const DonationForm: React.FC = () => {
  const [totalValue, setTotalValue] = React.useState(0)
  const [totalDonators, setTotalDonators] = React.useState(0)
  const [donateValue, setDonateValue] = React.useState('50')
  const handleValueChange = React.useCallback((value: string) => {
    setDonateValue(value)
  }, [])

  const [hasError, setHasError] = React.useState(false)
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const hasError = coinFlip()
      setHasError(hasError)
      if (!hasError) {
        setTotalValue(value => value + parseInt(donateValue, 10))
        setTotalDonators(donators => donators + 1)
      }
    },
    [donateValue]
  )

  // little hack to reset the state without needing to click the button again
  React.useEffect(() => {
    let timeout: any
    if (hasError) {
      timeout = setTimeout(() => setHasError(false), 1000)
    }
    return () => timeout && clearTimeout(timeout)
  }, [hasError])

  const chatBubbleProps = React.useMemo(
    () => ({
      amountLeft: TARGET_VALUE - totalValue,
      isFullyFunded: TARGET_VALUE <= totalValue,
    }),
    [totalValue]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.donateForm}>
        <ProgressBar currValue={totalValue} targetValue={TARGET_VALUE} />
        <div className={styles.donateInnerContent}>
          <h2 className={styles.donateTimeRemainingHeading}>
            Only four days left to fund this project
          </h2>
          <p className={styles.donateCtaText}>
            Join the <strong>{totalDonators}</strong> other donors who have
            already supported this project.
          </p>
          <form
            onSubmit={handleSubmit}
          >
            {/*
              aria invalid should not disappear, but didn't feel like keeping track of another 
              variable for a state that is currently being artifically created 
            */}
            <DonateInput
              value={donateValue}
              handleValueChange={handleValueChange}
              hasError={hasError}
              aria-invalid={hasError}
            />
            <DonateButton hasError={hasError} />
          </form>
        </div>
      </div>
    </div>
