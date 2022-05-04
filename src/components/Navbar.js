import React from 'react'
import styles from "./Navbar.module.css"
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import { Badge } from '@material-ui/core';

const Navbar = () => {
  return (
      <div className={styles.Wrapper}>
          <div className={styles.Left}>
              <div className={styles.Language}>EN</div>
              <div className={styles.SearchContainer}>
                <input className={styles.Input}/>
                <Search style={{ color: "gray", fontSize: 16 }}/>
              </div>
          </div>
          <div className={styles.Center}>
              <h1 className={styles.Logo}>DIAMOUND CITY</h1>
          </div>
          <div className={styles.Right}>
            <div className={styles.MenuItem}>REGISTER</div>
            <div className={styles.MenuItem}>SIGN IN</div>
            <div className={styles.MenuItem}>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Badge>
            </div>         
          </div>
      </div>
  )
}

export default Navbar
