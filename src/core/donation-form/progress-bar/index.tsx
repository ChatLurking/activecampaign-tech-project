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

  const { value } = useSpring({ from: { value: 0 }, to: { value: percentage } })

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
