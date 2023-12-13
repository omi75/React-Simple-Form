import './App.css';
import { useState } from 'react';


function App() {
  const [formData, setData] = useState({firstName:"", lastName:"",email:"",country:"",address:"",city:"",state:"",zip_code:"",candidates:false,offer:false,comments:false,push_detail:""})
  function formHandler(ev)
  {
     const {type,name,checked,value}=ev.target;
     setData((prev)=>{
      return{
        ...prev,
        [name]: type==="checkbox" ? checked : value,
      }
     })
  }

  function submitHandler(ev)
  {
     ev.preventDefault();
     console.log(formData);
  }
  return (
    <div className="App">
        <form onSubmit={submitHandler}>
            <label htmlFor="fn" className='fn'>First Name</label><br />
            <input type="text" name="firstName"  placeholder='Name' id="fn" className='fName border-down' onChange={formHandler} value={formData.firstName}/><br />

            <label htmlFor="ln" className='fn'>Last Name</label><br />
            <input type="text" name="lastName" id="ln" className='lName border-up' placeholder='Last Name' onChange={formHandler} value={formData.lastName}/><br />

            <label htmlFor="fn" className='fn'>Email</label><br />
            <input type="email" name="email" id="email" className='email border-down' placeholder='abcd@gmail.com' onChange={formHandler} value={formData.email}/><br />

            <label htmlFor="cnt" className='fn'>Country</label><br />
            <select name="country" id="cnt" className='country border-up' onChange={formHandler} value={formData.country}>
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
            </select>

            <label htmlFor="add" className='fn'>Street Address</label><br />
            <input type="text" name="address" id="add" className='address border-down' placeholder='123 main street'  onChange={formHandler} value={formData.address}/><br />

            <label htmlFor="city" className='fn'>City</label><br />
            <input type="text" name="city" id="city" className='city border-up' placeholder='Ex. Mumbai'  onChange={formHandler} value={formData.city}/><br />

            <label htmlFor="state" className='fn'>State / Province</label><br />
            <input type="text" name="state" id="state" className='state border-down' placeholder='Ex. Punjab'  onChange={formHandler} value={formData.state}/><br />

            <label htmlFor="zip" className='fn'>ZIP / Postal Code</label><br />
            <input type="text" name="zip_code" id="zip" className='zip border-up' placeholder='412558'  onChange={formHandler} value={formData.zip}/><br />

            <label htmlFor="choice" className='fn'>By Email</label>

            <div className='chk'>
              <div className='comments' >
                <input type="checkbox" name="comments" id="comments" onChange={formHandler} value={formData.comments}/>
                <label htmlFor="comments" className="c1">Comments <br/> <span>Get Notified when someone post a comment.</span></label>

              </div>

              <div className='comments' >
                <input type="checkbox" name="candidates" id="candidates" onChange={formHandler} value={formData.candidates} />
                <label htmlFor="candidates" className="c1">Candidates <br/> <span>Get Notified when candidate apply for job.</span></label>
              </div>

              <div className='comments' >
                <input type="checkbox" name="offer" id="offer" onChange={formHandler} value={formData.offer}/>
                <label htmlFor="offer" className="c1">Offers<br/> <span>Get Notified when candidate apply for job.</span></label>
              </div>

            </div>
            
            <br />
            <div>
              <h2 className='fn'>Push Notification</h2>
              <p>These are delivered via SMS to your mobile phone.</p>
            </div>
            <br />

          <div className='check-ad'>
              <div className='radio-div'>
                  <input type="radio" name="push_detail" value="Everything" checked={"Everything"===formData.push_detail} id="ev" onChange={formHandler} /> 
                  <label htmlFor="ev">Everything</label> <br />
                </div>

              <div className='radio-div'>
                <input type="radio" name="push_detail" value="Same as Email" checked={"Same as Email"===formData.push_detail}  id="sae" onChange={formHandler}/> 
                <label htmlFor="sae">Same as Email</label> <br />
              </div>

              <div className='radio-div'>
                <input type="radio"  name="push_detail" value="No Push Notifications"  checked={"No Push Notifications"===formData.push_detail} id="npn" onChange={formHandler}/> 
                <label htmlFor="npn">No Push Notifications</label> <br />
              </div>
          </div>
      
          <button>Save</button>

        </form>
    </div>
  );
}

export default App;
