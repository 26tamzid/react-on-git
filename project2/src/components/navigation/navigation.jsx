import style from './nav.module.css'

const Navigation = () => {
  return (
    <div className={`${style.nav } container`}>
      <img src="/imges/brand_logo.png" alt=""/>

      <ul className={style.menu}>
        <li href="#">Menu</li>
        <li href="#">About</li>
        <li href="#">Login</li>
      </ul>
    </div>


  )
}

export default Navigation;
