import * as React from 'react'
import { DonateButton } from './donate-button'
import { DonateInput } from './donate-input'
import { ProgressBar } from './progress-bar'
import styles from './styles.scss'
const TARGET_VALUE = 1000
export const DonationForm: React.FC = () => {
  const [totalValue, setTotalValue] = React.useState(0)
  const [totalDonators, setTotalDonators] = React.useState(0)
  const [donateValue, setDonateValue] = React.useState('50')
  const handleValueChange = React.useCallback((value: string) => {
    setDonateValue(value)
  }, [])

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
        setTotalValue(value => value + parseInt(donateValue, 10))
        setTotalDonators(donators => donators + 1)
      }
    },
    [donateValue]
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
            <DonateInput
              value={donateValue}
              handleValueChange={handleValueChange}
            />
            <DonateButton />
          </form>
        </div>
      </div>
    </div>
