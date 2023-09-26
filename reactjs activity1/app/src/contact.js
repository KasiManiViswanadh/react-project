import { createElement } from 'react';
import './main.css'

function Contact() {
    function submit(){
        
        alert("thanks for contact");
        
    }
    
    return (
      <div  className='for'>
        <h2>Contact Us</h2>
        <p>For any inquiries, please fill out the form below:</p><br />
        <form  id='form'>
          <div>
            <label type="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <br />
          <div>
            <label type="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <br />

          <div>
            <label type="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <br />

          <button type="submit" onClick={submit}>Submit</button>
        </form>
      </div>
    );
  }
  
  
export default Contact  