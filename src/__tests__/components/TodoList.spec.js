import React from "react";
import { mount } from "enzyme";

//Connect to redux
import { Provider } from "react-redux";
import { Creators as TodosActions } from "../../store/ducks/todos";

//Component
import { TodoList } from "../../components";

// Create Mock Store
import createStore from "redux-mock-store";
const mokeStore = createStore();
const DEFAULT_STATE = {
  todos: { data: ["Fazer cafe", "Alguma coisa"] }
};
const store = mokeStore(DEFAULT_STATE);

//Testes
it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(2);
});

//Testes
it("should be able add new todo", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  wrapper.find("TodoList").setState({ newTodo: "Novo Todo" });
  wrapper.find("button").simulate("click");

  expect(store.getActions()).toContainEqual(TodosActions.addTodo("Novo Todo"));
});
