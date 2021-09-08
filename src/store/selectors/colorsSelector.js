export const getAvailableColors = state => state.colors.available;

export const getColor = id => state => state.colors[id];

export const getColors = state => {
  const { available, ...colors } = state.colors;
  return Object.values(colors).filter(color => !color.loading && !color.error);
};

export const getLoadingColorIds = state => {
  const { available, ...colors } = state.colors;
  return Object.values(colors).filter(color => color.loading).map(color => color.id);
};

export const getFailedColors = state => {
  const { available, ...colors } = state.colors;
  return Object.values(colors).filter(color => !!color.error);
};
