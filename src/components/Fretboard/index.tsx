import { customAlphabet } from 'nanoid'
import { useFretboard } from './hooks';
import { FretboardProps } from './types'

function Fretboard(props: FretboardProps) {
  const nanoid = customAlphabet('ABCDEFGHIJKLMNOP', 10)
  const id = props.id || nanoid();
  useFretboard({ ...props, id });
  return (
    <figure id={id} />
  )
}

export default Fretboard;
