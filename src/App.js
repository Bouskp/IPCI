import { useState } from 'react'
import { addDocument } from './firebase/initialize'

function App() {
  const [isStudent, setIsStudent] = useState(false)
  const [data, setData] = useState({
    Tel: '',
    age: 0,
    civilite: '',
    commune: '',
    email: '',
    nom: '',
    pays: '',
    prenom: '',
    proffession: '',
    etablissement: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleInputs = (e) => {
    let inputs = { [e.target.name]: e.target.value }
    setData({ ...data, ...inputs })
  }
  return (
    <div>
      <form>
        <label htmlFor='civilite'>Civilité : </label>
        <select name='civilite' id='civilite' onChange={handleInputs}>
          <option value='M'>Madame</option>
          <option value='Mme'>Monsieur</option>
          <option value='Mlle'>Mademoiselle</option>
          <option value='Dr'>Docteur</option>
          <option value='Pr'>Professeur</option>
        </select>

        <br />
        <label htmlFor='Tel'>Num Telephone</label>
        <input
          type='tel'
          value={data.Tel}
          onChange={handleInputs}
          name='Tel'
          id='Tel'
        />
        <br />
        <label htmlFor='age'>age</label>
        <input
          type='number'
          max={100}
          name='age'
          id='age'
          onChange={handleInputs}
          value={data.age}
        />

        <br />
        <label htmlFor='commune'>commune</label>
        <input
          type='text'
          id='commune'
          value={data.commune}
          onChange={handleInputs}
          name='commune'
        />
        <br />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          value={data.email}
          id='email'
          onChange={handleInputs}
          name='email'
        />
        <br />
        <label htmlFor='nom'>Nom</label>
        <input
          type='text'
          value={data.nom}
          id='nom'
          onChange={handleInputs}
          name='nom'
        />
        <br />
        <label htmlFor='prenom'>prenom</label>
        <input
          type='text'
          value={data.prenom}
          id='prenom'
          onChange={handleInputs}
          name='prenom'
        />
        <br />
        <label htmlFor='pays'>Pays</label>
        <input
          type='text'
          value={data.pays}
          id='pays'
          onChange={handleInputs}
          name='pays'
        />
        <br />

        <input
          type='checkbox'
          id='eleve'
          name='eleve'
          onChange={() => setIsStudent(!isStudent)}
        />
        <label htmlFor='eleve'>êtes-vous un élève?</label>
        <br />

        <label htmlFor={isStudent ? 'etablissement :' : 'proffession : '}>
          {isStudent ? 'etablissement :' : 'proffession :'}
        </label>
        <input
          type='text'
          id={isStudent ? 'etablissement' : 'proffession'}
          value={isStudent ? data.etablissement : data.proffession}
          onChange={handleInputs}
          name={isStudent ? 'etablissement' : 'proffession'}
        />
        <br />
        <button type='submit' onClick={handleSubmit}>
          envoyer
        </button>
      </form>
    </div>
  )
}

export default App
