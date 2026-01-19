import { useState } from 'react';
import submitForm from './submitForm';

export default function App() {

  const[name,setName]= useState('');
  const[email,setEmail]= useState('');  
  const[message,setmessage]= useState('');
  return (
    <form action="https://questions.greatfrontend.com/api/questions/contact-form" method="POST"
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}>
      <input type="text" name="name" required
      placeholder="Name" value={name} onChange={(e)=>(setName(e.target.value))}/>
      <input type="email" name="email" required
      placeholder="Email" value={email} onChange={(e)=>(setEmail(e.target.value))}/>
      <textarea name ="message" placeholder="Message" onChange={(e)=>(setmessage(e.target.value))}></textarea>
    <button type="submit" formAction={''} >Send</button>
    </form>
  );
}