import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { useForm } from 'react-hook-form'

function ContactUs () {
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm ({
    revalidateMode: 'onChange',
    mode: 'onChange'
  })

    const handleOnSubmit = (event)=>{
      event.preventDefault();
      setData((prev) => [...prev,{register}])
      alert(`Nama: ${name}\n` + `Email: ${email}\n` + `Message: ${message}`);
    }
    return (

    <form className="contactus" onSubmit={handleSubmit(handleOnSubmit)} style={{marginTop: 300}}>
      <div className="mb-5 "> 
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h4 className="text-center mb-5">CONTACT US</h4>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input
              {...register('name',{
                required: 'Name must be filled.',
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: 'This field is required.',
                },
              })}
                type="text"
                name="name"
                className="form-control"
              />
              <div className="form-text text-danger" >
                {errors?.name?.message}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Email
              </label>
              <input
                {...register('email',{
                  required: 'Email must be filled.',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Invalid email address.',
                  },
                })}
                name="email"
                type="email" 
                className="form-control" 
                />
                <div className="form-text text-danger" >
                  {errors?.email?.message}
                </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                {...register('message',{
                  required: 'Message must be filled.',
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: 'This field is required',
                  },
                })}
                type="text"
                name="message"
                className="form-control"
              />
              <div className="form-text text-danger" >
                {errors?.message?.message}
               </div>
            </div>
            <div className="d-grid gap-2 col-11 mx-auto">
            <button
              className="btn btn-primary"
              type="submit"
            >SUBMIT
            </button>          
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}

export default ContactUs;