export const readFromStorage = key => {
  const data = window.localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const writeToStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = key => {
  window.localStorage.removeItem(key);
};

export const clearStorage = () => {
  window.localStorage.clear();
};
