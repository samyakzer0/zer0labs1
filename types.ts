import { ThreeElements } from '@react-three/fiber';

export interface MissionEntry {
  id: string;
  timestamp: string;
  sender: string;
  content: string;
  type: 'alert' | 'info' | 'analysis';
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}