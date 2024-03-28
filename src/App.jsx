import { useState } from "react";
import "./App.css";
import PizzaMenu from './PizzaMenu';

function App() {
  const [pizzaList, setPizzaList] = useState([
    { name: "BBQ Chicken", ingredients: ["Chicken", "BBQ Sauce", "Red Onion"] },
    { name: "Pepperoni", ingredients: ["Pepperoni", "Cheese", "Sausage"] },
    {
      name: "Dessert",
      ingredients: ["Chocolate Sauce", "Marshmellows", "Cookie Crumbs"],
    },
  ]);

  const [inputPizza, setInputPizza] = useState("");
  const [inputIngredients, setInputIngredients] = useState([]);

  const formOnSubmit = (event) => {
    event.preventDefault();
    setPizzaList([
      ...pizzaList,
      { name: inputPizza, ingredients: inputIngredients.split(", ") },
    ]);
  };

  const formOnNameChange = (event) => {
    setInputPizza(event.target.value);
  };

  const formOnIngredientChange = (event) => {
    setInputIngredients(event.target.value);
  };

  console.log(inputPizza);

  return (
    <>
      <h1>Absurdly Trusting Pizza Shop</h1>
      <form onSubmit={formOnSubmit}>
        <h2>Add a Pizza to our Menu, we Trust you!</h2>
        <input
          name="pizzaName"
          placeholder="Input Your Pizza's Name"
          onChange={formOnNameChange}
        />
        <input
          name="pizzaIngredients"
          placeholder="Input Your Pizza's Ingredients"
          onChange={formOnIngredientChange}
        />
        <input type="submit" />
      </form>
      <PizzaMenu pizzaList={pizzaList}/>
    </>
  );
}

export default App;
