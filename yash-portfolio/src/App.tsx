import Deck from './components/Deck'
import Cursor from './components/Cursor'
import Loader from './components/Loader'

export default function App() {
  return (
    <>
      {/* Decorative sunset skyline background (sun, buildings, neon grid floor) */}
      <div className="scene-bg" aria-hidden="true"><div className="skyline" /></div>
      <Loader />
      <Cursor />
      <Deck />
    </>
  )
}
