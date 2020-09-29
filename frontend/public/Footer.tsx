import React from "react"
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer class = {styles.footer}>
      <a class = {styles.ex1} href = "" target = "_blank">
        <img class = {styles.twitter} src="Images/twitter.png" alt = "Twitter"/>
      </a>
      <a class = {styles.ex4} href = "" target = "_blank">
        <img class = {styles.linkedIn} src="images/linkedIn.png" alt = "LinkedIn"/>
      </a>
      <a class = {styles.ex3} href = "" target = "_blank">
        <img class = {styles.gitHub} src="images/github.png" alt = "GitHub"/>
      </a>
      <a class = {styles.ex2} href = "" target = "_blank">
        <img class = {styles.instagram} src="images/instagram.png" alt = "Instagram"/>
      </a>
    </footer>
  )
}

export default Footer
