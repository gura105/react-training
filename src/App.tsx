import { FC, useRef } from 'react'
import Greet from 'components/Greet'
import 'App.css'
import Summary from 'components/Summary'

const title = import.meta.env.VITE_APP_TITLE
console.dir(import.meta.env)

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{title}</p>
      </header>
      <Greet name="Patty" times={4} />
      <Summary title="maple town" folded>
        <p>
          some message about maple town 1 some message about maple town 1 some
          message about maple town 1 some message about maple town 1 some
          message about maple town 1 some message about maple town 1
        </p>
        <p>
          some message about maple town 2 some message about maple town 2 some
          message about maple town 2 some message about maple town 2 some
          message about maple town 2 some message about maple town 2
        </p>
      </Summary>

      <form>
        <label htmlFor="favChar">好きなキャラクターは？</label>
        <select id="favChar" defaultValue="fox">
          <option value="rabbit">パティ</option>
          <option value="bear">ボビー</option>
          <option value="fox">ダイアナ</option>
          <option value="pig">プリプリン</option>
        </select>
      </form>
      <label htmlFor="favReason">そのキャラクターのどこが好き？</label>
      <textarea id="favReason" defaultValue="【例】見た目が好き"></textarea>

      <div>
        <input type="text" ref={inputRef} />
        <input type="button" value="フォーカス" onClick={handleClick} />
      </div>
    </div>
  )
}

export default App
