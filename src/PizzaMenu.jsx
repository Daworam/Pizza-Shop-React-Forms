const PizzaMenu = ({pizzaList}) => {
  return (
    <section className="menuItem">
        {pizzaList.map((pizza) => {
          return (
            <section className="individualItem">
              <h3>{pizza.name}</h3>
              <ul>
                {pizza.ingredients.map((ingredient) => {
                  return <li>{ingredient}</li>;
                })}
              </ul>
            </section>
            
          );
        })}
    </section>
  )
}

export default PizzaMenu