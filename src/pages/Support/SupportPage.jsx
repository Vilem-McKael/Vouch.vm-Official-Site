import React, { useState } from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
// import Footer from '../../components/Footer/Footer'

export default function SupportPage() {

  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  // const handleSubmit = (event) => {
  //   // event.preventDefault()

  //   const contactForm = event.target;
  //   const formData = new FormData(contactForm);
  //   fetch('/contact', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/x-www-form-urlencoded"},
  //     body: new URLSearchParams(formData).toString()
  //   })
  //   .then(() => console.log("Form successfully submitted"))
  //   .catch((error) => alert(error))

  //   event.preventDefault()

  //   setHasSubmitted(true)
  // }

  // document.querySelector("form").addEventListener("submit", handleSubmit)

  const handleChange = (event) => {
    setFormDetails({...formDetails, [event.target.name]: event.target.value})
  }

  return (
    <div className='w-full sm:h-full flex flex-col items-center'>
      <div className='text-center text-2xl sm:text-4xl mt-16 font-bold'>
        Contact
      </div>
      <div className='mx-8 md:max-w-full md:mx-16 mt-4 text-sm sm:text-base mobileLandscape:w-[400px] sm:w-[600px]'>
        {hasSubmitted ? "Thank you for contacting me. I am working hard to make sure Vouch.vm is the best application it can be. I will get back to you as soon as I can!" : "Get in touch with the developer regarding any bugs or crashes you may have experienced, any user interface problems you are having, any features you would like to see, or for any reason at all!"}
      </div>
      
      <div className='h-full w-full flex-col items-center'>
      {!hasSubmitted && <form className='flex flex-col items-center justify-center py-12 w-full px-8 [&_input]:text-black [&_textarea]:text-black' action='https://formspree.io/f/mqeeybpb' name='contact' method='POST' data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col items-start w-full max-w-[400px] [&_*]:w-full [&_label]:mb-1 space-y-4'>
          <div className='flex flex-col'>
            <label >
              Name
            </label>
            <input type='text' name='name' className='px-2 py-1 rounded-sm'>

            </input>
          </div>
          <div className='flex flex-col'>
            <label>
              E-Mail
            </label>
            <input type='text' name='email' className='px-2 py-1 rounded-sm'>

            </input>
          </div>

        <div className='flex flex-col'>
          <label className='mb-[-2]'>
            Please leave your message below :
          </label>
        

          <textarea name='message' className='px-2 py-1 rounded-sm'>
          </textarea>
        </div>
        
        <div className=''>
          <button type='submit' className='h-[40px] bg-black text-white mt-2 p-2 rounded-lg border border-green-500 transform hover:scale-110 duration-75'>
            <i className=''></i>Send
          </button>
        </div>
        </div>
      </form>}
      </div>
    </div>
  )
}
