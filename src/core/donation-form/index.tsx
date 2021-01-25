import * as React from 'react'
import styles from './styles.scss'
export const DonationForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.donateForm}>
        <div className={styles.donateInnerContent}>
          <h2 className={styles.donateTimeRemainingHeading}>
            Only four days left to fund this project
          </h2>
          <p className={styles.donateCtaText}>
            Join the <strong>11</strong> other donors who have already supported
            this project.
          </p>
        </div>
      </div>
    </div>
