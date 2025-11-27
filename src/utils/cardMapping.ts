const cardFiles = import.meta.glob('../assets/images/cards/*.webp', {
  eager: true,
});

// This will hold something like:
// { "ace-spades": "/assets/ace-spades.124abc.webp", ... }
const cardImages: Record<string, string> = {};

for (const path in cardFiles) {
  const file = cardFiles[path] as any;

  const filename = path.split('/').pop()!.replace('.webp', '');
  // filename = "ace-spades"

  cardImages[filename] = file.default;
}

export function parseCardCode(code: string) {
  let rank = code.slice(0, code.length - 1);
  const suitCode = code.slice(-1) as keyof typeof suitMap;

  if (rank === '0') rank = '10';

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

  const suitMap = {
    S: 'spades',
    H: 'hearts',
    D: 'diamonds',
    C: 'clubs',
  } as const;

  return {
    rank: rankMap[rank],
    suit: suitMap[suitCode],
  };
}

export function mapCardToImage(code: string) {
  const { rank, suit } = parseCardCode(code);
  const key = `${rank}-${suit}`; // e.g. "queen-spades"

  return cardImages[key];
}
