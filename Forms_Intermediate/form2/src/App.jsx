import "./App.css";
import { useState } from "react";

function App() {
  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"",street:"",city:"",state:"",zip:"",comments:false, candidates:false, offers:false,pushNotification:""})
  // console.log(formData)

  function changeHandler(event)
  {
    const {name,type,value,checked}=event.target
    setFormData((prev)=>( {...prev,[name]:type === "checkbox"?checked:value}));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }
  return (
    <div className="m-0 p-0 box-border flex justify-center h-full">
      <div className="flex justify-center items-center w-[50%] h-[100%]">
        <form onSubmit={submitHandler}>
            {/* first name */}
            <label htmlFor="firstName">First Name</label>
            <br></br>
            <input className="border-2" type="text" placeholder="Rittik"  name="firstName" onChange={changeHandler} value={formData.firstName} id="firstName"></input>
            <br></br>
            {/* last name */}
            <label htmlFor="lastName">Last Name</label>
            <br></br>
            <input type="text" className="border-2" placeholder="Kumar"  name="lastName" onChange={changeHandler} value={formData.lastName} id="lastName"></input>
            {/* Email */}
            <br></br>
            <label htmlFor="email">Email address</label>
            <br/>
            <input type="text" className="border-2" placeholder="agbtq@gmail.com"  name="email" onChange=
            {changeHandler} value={formData.email} id="email"></input>
            <br></br>

            <label htmlFor="country">Country</label>
            <br/>
            <select type="text" className="border-2" placeholder="India"  name="country" onChange=
            {changeHandler} value={formData.country} id="country">
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="America">America</option>
              <option value="China">china</option>
            </select>

            <br></br>
            <label htmlFor="street">Street Address</label>
            <br/>
            <textarea placeholder="Enter Street Add" className="border-2" name="street" onChange={changeHandler} value={formData.street} id="street"></textarea>

            <br/>
            <label htmlFor="city">City Name</label>
            <br></br>
            <input type="text" className="border-2" placeholder="Jamtara"  name="city" onChange={changeHandler}
            value={formData.city} id="city"></input>

            <br></br>
            <label htmlFor="state">State/Provice</label>
            <br></br>
            <input type="text" className="border-2" placeholder="Jharkhand"  name="state" onChange={changeHandler}
            value={formData.state} id="state"></input>

            <br></br>
            <label htmlFor="zip">ZIP / Portalcode</label>
            <br></br>
            <input type="number" className="border-2" placeholder="71310"  name="zip" onChange={changeHandler}
            value={formData.zip} id="zip"></input>

            <br></br>
            <fieldset>
              <legend>By Email</legend>

              <div className="ml-0">
                   <input 
                       className="mr-2" 
                       type="checkbox" 
                       name="comments" 
                       onChange={changeHandler} 
                       value={formData.comments} 
                       id="comments"></input>
                   <label htmlFor="comments">Comments</label>
                   <br></br>
                     <p className="ml-5 text-sm text-slate-400">Get notified when Someone post comments on posting </p>
               </div>

               <div className="ml-0">
                  <input 
                    className="mr-2" 
                    type="checkbox" 
                    name="candidates" 
                    onChange={changeHandler} 
                    value={formData.candidates} 
                    id="candidates"></input>
                  <label htmlFor="candidates">Candidates</label>
                  <p className="ml-5 text-sm text-slate-400">Get notified when Someone post candidates on a posting</p>
              </div>

              <div className="ml-0">
                <input 
                  className="mr-2" 
                  type="checkbox" 
                  name="offers" 
                  onChange={changeHandler} 
                  value={formData.offers} id="offers"></input>
                <label htmlFor="offers">Offers</label>
                  <p className="ml-5 text-sm text-slate-400">Get notified when Someone post offers on a posting</p>
              </div>
            </fieldset>

            <fieldset>
              <legend>Push Notification</legend>
              <p className="text-sm text-slate-400">these are delevered via sms to your mobile phone.</p>

              <input 
                type="radio"
                id="pushEverything"
                name="pushNotification"
                value="Everything"
                onChange={changeHandler}
              ></input>
              <label htmlFor="pushEverything">Everything</label><br/>

              <input 
                type="radio"
                id="pushEmail"
                name="pushNotification"
                value="same as email"
                onChange={changeHandler}
              ></input>
              <label htmlFor="pushEmail">Email</label><br/>

              <input 
                type="radio"
                id="pushNothing"
                name="pushNotification"
                value="nothing"
                onChange={changeHandler}
              ></input>
              <label htmlFor="pushNothing">Notning push</label>
            </fieldset>

            <button className="bg-blue-500 text-white font-bold rounded py-2 px-4" >Save</button>
        </form>

      </div>
    </div>    
  );
}

export default App;
