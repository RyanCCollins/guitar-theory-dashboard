import { Mode } from '../../constants'

export interface FretboardProps {
  id?: string;
  dots?: Array<{ string: number, fret: number }>;
  chord?: string;
  scale?: {
    type: Mode,
    root: string,
    box?: {
      system: string,
      box: string
    }
  };
}