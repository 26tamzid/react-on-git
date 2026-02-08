import Button from '../button/Button'
import styles from './Fromside.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";




const Fromside = () => {

    const call_btn =() =>{
        console.log("call clicked")
    };
    const chat_btn =() =>{
        console.log("chat clicked")
    }

    const atsubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const text = e.target.text.value;
        alert('submited')
        console.log(   "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Text: " + text)
    }

    




  return (
    <section className='container'>
        <div className= {styles.formp}>
            <div className={styles.tbtn}>
                <Button 
                onClick={chat_btn}
                text="VIA SUPPORT CHAT" icon={<MdMessage/>}/>


                <Button
                onClick={call_btn}
                text="VIA CALL" icon={<FaPhoneAlt />}/>
            </div>
            <Button 
            bigbtn = {true}
            text="VIA EMAIL FORM" icon={<MdMailOutline />}
            />
            <form 
            onSubmit={atsubmit}
            className={styles.form2}>
                <div className={styles.formdiv}>
                    <label htmlFor="name">Name</label>
                    <input type='text' name="name" placeholder='type...'></input>
                </div>
                <div className={styles.formdiv}>
                    <label htmlFor="email">Email</label>
                    <input type='email' name="email" placeholder='type...'></input>
                </div>
                <div className={styles.formdiv}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" placeholder='type...' rows="6" cols="15"></textarea>
                </div>
                <Button text="SUBMIT" type='submit'/>
            </form>
        </div>
        <div className={styles.imges}>
            <img src='\public\imges\Service.svg'/>
        </div>
    </section>
  )
}

export default Fromside
