export function parseCardCode(code: string) {
  let rank = code.slice(0, code.length - 1);
  const suitCode = code.slice(-1);

  if (rank === '0') rank = '10'; // API quirk

  const rankMap: Record<string, string> = {
    A: 'ace',
    K: 'king',
    Q: 'queen',
    J: 'jack',
    '10': '10',
    '9': '9',
    '8': '8',
    '7': '7',
    '6': '6',
    '5': '5',
    '4': '4',
    '3': '3',
    '2': '2',
  };

  const suitMap: Record<string, 'hearts' | 'spades' | 'clubs' | 'diamonds'> = {
    S: 'spades',
    H: 'hearts',
    D: 'diamonds',
    C: 'clubs',
  };

  return {
    rank: rankMap[rank],
    suit: suitMap[suitCode],
  };
}

export function mapCardToImage(code: string): string {
  const { rank, suit } = parseCardCode(code);
  return `/src/assets/cards/${rank}-${suit}.webp`;
}
