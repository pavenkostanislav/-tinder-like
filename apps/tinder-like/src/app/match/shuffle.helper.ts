import { Match } from "./match.inerface";

export const getRandom = (max: number) => {
  return Math.floor(Math.random() * max);
};

export function* shuffle<T>(array: T[]) {
  let i = array.length;

  while (i--) {
    yield array.splice(getRandom(i + 1), 1)[0];
  }
}
