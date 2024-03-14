import { useState } from 'react';

function App() {

  const [FormData, SetFormData] = useState({FirstName:"", LastName:"", Email:"", Comment:"", IsVisible:true});

  function ChangeHandler(Event)
  {
    const {name, value, checked, type} = Event.target;
    SetFormData(PrevState =>
      {
        return {...PrevState, 
        [name]: type === "checkbox" ? checked : value
      }
      }
    )

  }
  console.log(FormData);

  return (
    <div>
      <form>
        <input className='border-2 border-black' onChange={ChangeHandler} type='text' placeholder='Enter your first name' name='FirstName' value={FormData.FirstName}></input>
        <br/>
        <input className='border-2 border-black' onChange={ChangeHandler} type='text' placeholder='Enter your last name' name='LastName' value={FormData.LastName}></input>
      <br/>
        <input className='border-2 border-black' onChange={ChangeHandler} type='mail' placeholder='Enter your Email@gmail.com' name='Email' value={FormData.Email}></input>
      <br/>
      </form>
      <textarea className='border-2 border-black' placeholder='Enter you comment' onChange={ChangeHandler} name='Comment' value={FormData.Comment}>

      </textarea>
      <br></br>

      <input type='checkbox' name="IsVisible" checked={FormData.IsVisible} id='Check' onClick={ChangeHandler}></input>
      <label htmlFor="Check">is that person is visible to you</label>
    </div>
  );
}

export default App;
