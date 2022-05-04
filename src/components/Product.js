import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styles from "./Product.module.css"
const Product = ({item}) => {
  return (
    <div className={styles.Container}>
    
      <img className={styles.Image} alt="" src={item.img}/>
      <div className={styles.Info}>
          <div className={styles.Icon}>
            <ShoppingCartOutlined/>
          </div>

          <div className={styles.Icon}>
            <SearchOutlined/>
          </div>

          <div className={styles.Icon}>
            <FavoriteBorderOutlined/>
          </div>

      </div>
    </div>
  )
}

export default Product
