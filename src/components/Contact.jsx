import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

 export const Contact = () => {
  const form=useRef()
const SERVICE_ID='service_ev41or7'
const TEMPLATE_ID='template_yejd34s'
const PUBLIC_KEY='A10GopRMnUg4-CGxd'

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset()
};
  return (
    <div classNameName='formE'>
        <div className="container">
  <h2>Basit Bir Form</h2>
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-group">
      <label for="ad">Ad:</label>
      <input type="text" className="form-control" id="ad" placeholder="Adınızı girin" name='name'/>
    </div>
    <div className="form-group">
      <label for="soyad">Soyad:</label>
      <input type="text" className="form-control" id="soyad" placeholder="Soyadınızı girin" name='surname'/>
    </div>
    <div className="form-group">
      <label for="email">E-posta:</label>
      <input type="email" className="form-control" id="email" name='email' placeholder="E-posta adresinizi girin"/>
    </div>
    <div className="form-group">
      <label for="mesaj">Mesaj:</label>
      <textarea className="form-control" id="mesaj" placeholder="Mesajınızı girin" name='text'></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Gönder</button>
  </form>
</div>
    </div>
  )
}

export default Contact