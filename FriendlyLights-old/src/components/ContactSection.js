import React, { useState } from 'react';

const ContactSection = () => {

    const [formData , setFormData]= useState({name: "" , email: "", message:""});
    const [status, setStatus]= useState("");
    const handleChange = (e) => {
      setFormData({...formData , [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending....");

      try {
        const res = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success) {
          setStatus("Message Successfully Send!!!!");
          setFormData({name: "" , email: "", message: ""})
        } else {
          setStatus("Failed");
        } 
      } catch (error) {
        console.error("Error" , error);
        setStatus("server error");
      }
    };


  return (

    <section id="contact" className="p-8 bg-white text-center">
        <h3 className='text-3xl font-bold mb-6'>Contact Me</h3>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto space-y-4'>
            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' className='w-full p-2 border rounded' required />
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' className='w-full p-2 border rounded' required />
            <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your Message' className='w-full p-2 border rounded h-32' required></textarea>
            <button className='w-40 px-6 py-2 bg-stone-600 text-white rounded-full shadow hover:bg-stone-900 cursor-pointer no-underline' type='submit'>Send</button>
        </form>
        {status && <p className='mt-4 text-gray-700'>{status}</p>}
    </section>
  )
}

export default ContactSection;
