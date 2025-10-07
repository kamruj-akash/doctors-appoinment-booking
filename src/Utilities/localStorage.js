const getFromDb = () => {
  const storedItem = localStorage.getItem("bookingId");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};

const saveToDb = (id) => {
  const storedItem = getFromDb();
  if (storedItem.includes(id)) {
    return;
  } else {
    storedItem.push(id);
    localStorage.setItem("bookingId", JSON.stringify(storedItem));
  }
};

const removeFromDb = (id) => {
  const savedItem = getFromDb();
  const resItem = savedItem.filter((item) => item != id);
  localStorage.setItem("bookingId", JSON.stringify(resItem));
};

export { getFromDb, removeFromDb, saveToDb };
