const sortData = (
  userData: Record<string, number>,
  isAgeData: boolean = false
): Record<string, number> => {
  const items = Object.entries(userData);

  items.sort((a, b) => {
    const keyA = a[0];
    const keyB = b[0];
    const valueA = a[1];
    const valueB = b[1];

    if (isAgeData) {
      const getAgeRangeStart = (range: string): number => {
        if (range === "70+") return 70;
        return parseInt(range.split("-")[0]);
      };

      const startA = getAgeRangeStart(keyA);
      const startB = getAgeRangeStart(keyB);

      if (valueB - valueA !== 0) {
        return valueB - valueA;
      }
      return startA - startB;
    } else {
      return valueB - valueA;
    }
  });

  const sortedData: Record<string, number> = {};
  for (const [key, value] of items) {
    sortedData[key] = value;
  }

  return sortedData;
};

export default sortData;
