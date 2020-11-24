const initialState = {
  books: [],
  test: [
    {
      id: 4,
      title: "test4",
      author: "test4"
    },
    {
      id: 5,
      title: "test5",
      author: "test5"
    }
  ],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload
      };
    default:
      return state;
  }

  return state;
};

export default reducer;
