const sortData = (
  userData: Record<string, number>,
  isAgeData: boolean = false
): Record<string, number> => {
  const items = Object.entries(userData);

  const ageOrder =
    [
      "0-2",
      "3-9",
      "10-19",
      "20-29",
      "30-39",
      "40-49",
      "50-59",
      "60-69",
      "70+",
    ];

  if (isAgeData) {
    const sortedAges: Record<string, number> = {};
    ageOrder.forEach((ageKey) => {
      if (userData.hasOwnProperty(ageKey)) {
        sortedAges[ageKey] = userData[ageKey];
      }
    });
    return sortedAges;
  }

  const sortedItems = items.sort(([, aValue], [, bValue]) => bValue - aValue);

  const sortedData: Record<string, number> = {};
  for (const [key, value] of sortedItems) {
    sortedData[key] = value;
  }

  return sortedData;
};

export default sortData;