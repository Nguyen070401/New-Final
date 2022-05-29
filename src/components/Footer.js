import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Left}>
        <h1 className={styles.Logo}>10KEYCERY</h1>
        <p className={styles.Desc}>
          There are many variations of passages of keycap available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable
        </p>
        <div className={styles.SocialContainer}>
            <div className={styles.SocialIcon} color="3B5999">
                <Facebook/>
            </div>
            <div className={styles.SocialIcon} color="E4405F">
                <Instagram/>
            </div>
            <div className={styles.SocialIcon} color="55ACEE">
                <Twitter/>
            </div>
            <div className={styles.SocialIcon} color="E60023">
                <Pinterest/>
            </div>
        </div>
      </div>

      <div className={styles.Center}>
        <h3 className={styles.Title}>Useful Links</h3>
        <ul className={styles.List}>
        <li className={styles.ListItem}>Home</li>
          <li className={styles.ListItem}>KeyCaps</li>
          <li className={styles.ListItem}>Accessory</li>
          <li className={styles.ListItem}>Contact</li>
          <li className={styles.ListItem}>Login</li>
        </ul>
      </div>

      <div className={styles.Center2}>
        <h3 className={styles.Title}>Another Links</h3>
        <ul className={styles.List}>
        <li className={styles.ListItem}>
          <a className={styles.ListItemLink} href="https://www.facebook.com/10keycery">Facebook</a>
        </li>
        <li className={styles.ListItem}>
          <a className={styles.ListItemLink} href="https://shopee.vn/keycap_10keycery?smtt=0.81320489-1652765087.9&fbclid=IwAR2-yHZlvCO6csgRNppKcClloiPhFNqD9G8TVTKnIAFeWks3tTwbGzPmk9Y">Shopee</a>
        </li>
          <li className={styles.ListItem}>Wishlist</li>
          <li className={styles.ListItem}>Cards</li>
          <li className={styles.ListItem}>Terms</li>
        </ul>
      </div>



      <div className={styles.Right}>
      <h3 className={styles.Title}>Contact</h3>
        <div className={styles.ContactItem}>
          <Room style={{marginRight:"10px"}}/> 311 Nguyen Thien Thuat , Quan 1 Viet Nam
        </div>
        <div className={styles.ContactItem}>
          <Phone style={{marginRight:"10px"}}/> +1 538 677 859
        </div>
        <div className={styles.ContactItem}>
          <MailOutline style={{marginRight:"10px"}} /> contact@10keycery.com
        </div>
        <img className={styles.Payment} alt="" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  )
}

export default Footer
