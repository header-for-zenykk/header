import { Header } from "./components/Header/Header"

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <main style={{ padding: '20px' }}>
        <h1>Вітаємо на сайті КНУ</h1>
        <p>Тут буде відображатися контент вибраної сторінки...</p>
      </main>
    </div>
  )
}

export default App;