import { Playground } from "../Playground"
import { NoAudioMessage } from "../NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider"

export const Main = () => {
  const AudioContext = useAudioContext() // useS => React Hook
  return (AudioContext) ? <Playground /> : <NoAudioMessage />
}
