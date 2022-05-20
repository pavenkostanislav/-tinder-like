export interface Match {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  img: {
    src: string;
    alt: string;
  };
  like?: true;
}
export type Matches = Match[];
