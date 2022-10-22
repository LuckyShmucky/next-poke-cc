import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
        <span>Pokemon</span> Api Display
        </h1>
        <p className={headerStyles.description}>Keep up to date with the latest Pokedex!</p>
     
        </div>
  )
}

export default Header



   {/* CSS in JS can get quite messy but enables you to add some logic to your styling. However, there are many ways to add logic to styling.
    Below is an example of adding styling in JS
         <style jsx>
            {`
            .title {
                color: red;
            }
            `}
        </style> */}