import breakTimeAlert from '../audio/break time finished.mp3'
import workTimeAlert from '../audio/work time finished.mp3'

const workFinished  = new Audio(workTimeAlert)
const breakFinished = new Audio(breakTimeAlert)

export const playWorkFinished = () => {
  workFinished.play()
}

export const playBreakFinished = () => {
  breakFinished.play()
}

