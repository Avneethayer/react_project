import React from "react"
import ReactDOM from "react-dom/client"

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
  return <header>AK Pizzas</header>
}

function Menu() {
  return (
    <menu>
      <h1>Our Menu</h1>
      <Pizza />
    </menu>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 21
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  return <footer>{new Date().toLocaleDateString()} We are open!</footer>
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="focaccia pizza" />
      <p>Focaccia</p>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
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
