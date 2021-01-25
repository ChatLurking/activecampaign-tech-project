import * as React from 'react'
import classnames from 'classnames'
import { animated, useSpring } from 'react-spring'
import styles from './styles.scss'

function clamp(val: number, min: number, max: number): number {
  return val > max ? max : val < min ? min : val
}

interface ProgressBarProps {
  currValue: number
  targetValue: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currValue,
  targetValue,
}) => {
  const { percentage, isFilled } = React.useMemo(() => {
    return {
      percentage: clamp(currValue / targetValue, 0, 1) * 100,
      isFilled: clamp(currValue / targetValue, 0, 1) === 1,
    }
  }, [currValue, targetValue])

  // used a library just to make interoplation of the value ez.
  // I could have used it in the chat-bubble component, but didn't feel like doing that at this time.
  const { value } = useSpring({ from: { value: 0 }, to: { value: percentage } })

  // decided to use the html progress because accessibility is already there.
  // the downside is that in firefox you can't style it as well as chromium browswers.
  // I would probably make a FF specific fallback component for this.
  return (
    <animated.progress
      className={classnames(`${styles.progress}`, {
        [styles.isFilled]: isFilled,
      })}
      value={value.to(v => Math.ceil(v))}
      max={100}
    />
  )
}
