import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      <Header />

      <main className="flex-grow pt-24">
        <Home />
      </main>

      <Footer />
    </div>
  )
}