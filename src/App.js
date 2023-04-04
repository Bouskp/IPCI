import { useRef } from 'react'
import { addDoc } from './firebase/initialize'

function App() {
  const inputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { value } = inputRef.current
    const data = {
      Tel: '0505050505',
      age: 55,
      civilite: value,
      commune: 'Yopougon',
      email: 'aaa05@gmail.com',
      nom: 'Kouame',
      pays: 'Italie',
      prenom: 'Lucien',
    }
    await addDoc(data)
  }
  return (
    <div>
      <form>
        <select name='civilite' id='civilite' ref={inputRef}>
          <option value='M'>Madame</option>
          <option value='Mme'>Monsieur</option>
          <option value='Mlle'>Mademoiselle</option>
          <option value='Dr'>Docteur</option>
          <option value='Pr'>Professeur</option>
        </select>
        <button type='submit' onClick={handleSubmit}>
          envoyer
        </button>
      </form>
    </div>
  )
}

export default App
