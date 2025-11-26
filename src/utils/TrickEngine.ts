export function splitIntoColumns<T>(cards: T[]): T[][] {
  const columns: T[][] = [[], [], []];
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });
  return columns;
}

export function reorderTrick<T>(cards: T[], chosenColumn: number): T[] {
  const columns = splitIntoColumns(cards);
  const others = [0, 1, 2].filter((i) => i !== chosenColumn);
  return [...columns[others[0]], ...columns[chosenColumn], ...columns[others[1]]];
}

export function getFinalCard<T>(cards: T[]): T {
  return cards[10];
}
