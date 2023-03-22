
function Patient({patient, setPatient, deletePatient}) {

  const { name, owner, email, date, symptoms, id } = patient;

  const handleDelete = () => {
    const response = confirm('You will delete this patient, confirm?')
    if(response) {
      deletePatient(id)
    }
    
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 pt-10 pb-6 rounded-xl flex">
        <div>
            <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {''}
              <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
              <span className="font-normal normal-case">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
              <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Entry date: {''}
              <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
              <span className="font-normal normal-case">{symptoms}</span>
            </p>
        </div>

        <div className="flex flex-col gap-y-10 mx-auto my-auto">
          <button
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md block lg:px-20"
              onClick={() => setPatient(patient)}
          >Edit</button>

          <button
              type="button"
              className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-md"
              onClick={handleDelete}
          >Delete</button>

        </div>
    </div>
  )
}

export default Patient