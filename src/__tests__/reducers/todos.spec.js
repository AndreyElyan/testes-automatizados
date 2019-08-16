import todosReducers, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducers", () => {
  it("should be able to add todos", () => {
    const state = todosReducers(
      { data: [] },
      TodosActions.addTodo("Novo Todo")
    );

    expect(state.data[0]).toBe("Novo Todo");
  });
});
