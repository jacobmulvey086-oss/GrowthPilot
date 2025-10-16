export type Goal = '$1k/mo' | '$5k/mo' | '$10k/mo';

export type Niche = 'Content Creation' | 'Digital Products' | 'Agency/Freelancing' | 'Dropshipping';

export interface PathData {
  goal: Goal;
  niche: Niche;
  capital: {
    range: string;
    uses: string[];
  };
  steps: string[];
}

export interface Progress {
  [key: string]: boolean[];
}
