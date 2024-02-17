import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

function Header() {
  return (
    <header className="header">
      <h1>AK Pizzas</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData
  const pizzaNum = pizzas.length
  return (
    <main className="menu">
      {console.log(pizzaNum)}
      <h2>Our Menu</h2>
      {pizzaNum > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
          {/* <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          photoName="pizzas/focaccia.jpg"
          imageText="focaccia pizza"
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          price={10}
          photoName="pizzas/margherita.jpg"
          imageText="Pizza Margharita "
        />
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={12}
          photoName="pizzas/spinaci.jpg"
          imageText="Pizza Spinaci"
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          photoName="pizzas/funghi.jpg"
          imageText="Pizza Funghi"
        />

        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          price={15}
          photoName="pizzas/salamino.jpg"
          imageText="Pizza Salamino"
        />

        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          photoName="pizzas/prosciutto.jpg"
          imageText="Pizza Prosciutto"
        /> */}
        </ul>
      )}
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 20
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  return (
    <footer className="footer">
      {/* {new Date().toLocaleDateString()} We are open! */}

      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are closed right now. Please come between ${openHour}.00 and $
          {closeHour}.00
        </p>
      )}
    </footer>
  )
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are Open until {closeHour}.00. Come visit us!</p>
      <button className="btn">Order</button>
    </div>
  )
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.imageText} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
