import styles from './Button.module.css'



const Button = ({text,icon,bigbtn,...rest}) => {
  return (
    <button {...rest} className= {bigbtn ? styles.bigbtn : styles.b_botn}>
       {icon}
       {text}
    </button>
  )
}

export default Button
