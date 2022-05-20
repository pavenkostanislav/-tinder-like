import { Match } from "./match.inerface";

export const getRandom = (max: number) => {
  return Math.floor(Math.random() * max);
};

export function* shuffle(array: Match[]) {
  let i = array.length;

  while (i--) {
    yield array.splice(getRandom(i + 1), 1)[0];
  }
}
