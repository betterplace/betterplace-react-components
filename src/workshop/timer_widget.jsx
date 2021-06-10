import { useState } from 'react'
import { useInterval } from 'react-use'

const propIsTrue = (prop) => ![undefined, false, 'false', 'no'].includes(prop)

/**
 * Markup Example:
 * <span data-behavior="timer-widget"
 *       data-timer-key-date="Dec 1, 2019"
 *       data-timer-seconds-threshold="120"
 * ></span>
 */

/**
 * Provides an animated timer to/from a given key date.
 * @param {Object} props
 * @param  props.timerKeyDate The key date of the timer.
 * @param  props.timerSecondsThreshold Threshold of seconds above which to hide the seconds part.
 * @param  props.timerHideZeros Whether to hide time parts with zero value.
 * @param  props.timerStopOnKeyDate Whether to stop the timer on the key date.
 */
export const TimerWidget = (props) => {
  const keyDate = new Date(props.timerKeyDate)
  const secondsThreshold = props.timerSecondsThreshold ? +props.timerSecondsThreshold : Number.POSITIVE_INFINITY
  const hideZeros = propIsTrue(props.timerHideZeros)
  const stopOnKeyDate = propIsTrue(props.timerStopOnKeyDate)

  if (stopOnKeyDate && new Date() > keyDate) return <></>

  const getCurrentValue = () => Math.abs(keyDate - new Date())

  const getCurrentInterval = () => {
    if (value / 1000 - 60 > secondsThreshold) {
      return value % 60000
    } else if (value < 500 && stopOnKeyDate) {
      return null
    } else {
      return value % 1000
    }
  }

  const [value, setValue] = useState(getCurrentValue())

  useInterval(() => {
    setValue(getCurrentValue())
  }, getCurrentInterval())

  return <TimerComponents totalMilliseconds={value} secondsThreshold={secondsThreshold} hideZeros={hideZeros} />
}

const TimerComponents = ({ totalMilliseconds, secondsThreshold = Number.POSITIVE_INFINITY, hideZeros = false }) => {
  const totalSeconds = Math.round(Math.abs(totalMilliseconds) / 1000)
  const timeStruct = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor(totalSeconds / 3600) % 24,
    minutes: Math.floor(totalSeconds / 60) % 60,
    seconds: totalSeconds < secondsThreshold && totalSeconds % 60,
  }

  let timePieces = []
  for (let unit in timeStruct) {
    if (timeStruct[unit] || (!hideZeros && timePieces.length)) {
      timePieces.push(<TimerComponent key={unit} unit={unit} value={timeStruct[unit]} />)
    }
  }

  return <>{timePieces}</>
}

const TimerComponent = ({ unit, value }) => (
  <span className={`timer-component ${unit}`}>
    {value}
    <span className={'unit ' + (value === 1 ? 'singular' : 'plural')}>
      <span className="default">&nbsp;{unit.charAt(0)} </span>
    </span>
  </span>
)
