export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]}  ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]} ${splitedTitle[4]} ${splitedTitle[5]} ${splitedTitle[6]} ${splitedTitle[7]}`;
  return newTitle;
};

export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

export const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};
