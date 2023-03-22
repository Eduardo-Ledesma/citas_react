import {useState, useEffect} from 'react';
import Error from './Error';

function Form({patients, setPatients, patient, setPatient}) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false)

  useEffect( () => {
      if(Object.keys(patient).length > 0) {
        setName(patient.name)
        setOwner(patient.owner)
        setEmail(patient.email)
        setDate(patient.date)
        setSymptoms(patient.symptoms)
      }
  }, [patient]);
  

  const generateId = () => {
      const random = Math.random().toString(36).substring(2)
      const date = Date.now().toString(36);

      return random + date;
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      if(!name.trim() || !owner.trim() || !email.trim() || !date.trim() || !symptoms.trim()) {
        setError(true);
        return;
      }

      setError(false)

      const patientObj = {
        name,
        owner,
        email,
        date,
        symptoms,
      }

      if(patient.id) {
        // Edit Register
        patientObj.id = patient.id

        const patientUpdated = patients.map( patientState => patientState.id === patient.id ? patientObj : patientState)
        setPatients(patientUpdated)
        setPatient({})
      } else {
        // New Register
        patientObj.id = generateId();
        setPatients([...patients, patientObj])
      }

      //Reiniciar form
      setName('')
      setOwner('')
      setEmail('')
      setDate('')
      setSymptoms('')
  }



  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Patient Monitoring </h2>

        <p className="text-xl mt-5 text-center">
          Add Patients and {''}
          <span className="text-indigo-600 font-bold">manage them</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className="my-10 bg-white shadow-md rounded-xl pt-10 pb-6 px-5">
            <div>
                {error && <Error message="Todos los campos son obligatorios" />}
                <label htmlFor="pet" className="block text-gray-700 font-bold uppercase">
                  Pet Name
                </label>
                <input 
                    type="text"
                    placeholder="Pet Name"
                    id="pet"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                />
            </div>

            <div className="mt-5">
                <label htmlFor="owner" className="block text-gray-700 font-bold uppercase">
                  Owner Name
                </label>
                <input 
                    type="text"
                    placeholder="Owner Name"
                    id="owner"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={owner}
                    onChange={ (e) => setOwner(e.target.value)}
                />
            </div>

            <div className="mt-5">
                <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
                  Email
                </label>
                <input 
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mt-5">
                <label htmlFor="date" className="block text-gray-700 font-bold uppercase">
                  Date
                </label>
                <input 
                    type="date"
                    id="date"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={date}
                    onChange={ (e) => setDate(e.target.value)}
                />
            </div>

            <div className="mt-5">
                <label htmlFor="symptoms" className="block text-gray-700 font-bold uppercase">
                  Symptoms
                </label>
                <textarea
                  placeholder="Symptoms Description"  
                  id="symptoms"
                  className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                  value={symptoms}
                  onChange={ (e) => setSymptoms(e.target.value)}
                />
            </div>

            <input 
            type="submit" 
            className="bg-indigo-600 mt-3 w-full p-3 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-indigo-800 transition-all"
            value={patient.id ? 'Edit Patient' : 'Add Patient'}
            />
        </form>
    </div>
  )
}

export default Form