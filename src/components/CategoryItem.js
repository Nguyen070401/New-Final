import React from 'react'
import styles from "./CategoryItem.module.css"
const CategoryItem = ({item}) => {
  return (
    
    <div className={styles.CategoryItem}>
        <img className={styles.Image} src={item.img} alt=""/>  
        <div className={styles.Info}>
        <h1 className={styles.Title} >{item.title}</h1>
                       
        <a className={styles.Button} href="https://shopee.vn/keycap_10keycery?smtt=0.81320489-1652765087.9&fbclid=IwAR2-yHZlvCO6csgRNppKcClloiPhFNqD9G8TVTKnIAFeWks3tTwbGzPmk9Y">SHOP NOW</a>
        </div>  
     </div>
  )
}

export default CategoryItem
