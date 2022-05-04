import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from "@material-ui/icons";
import styles from "./Product.module.css"
const Product = () => {
  return (
    <div className={styles.Container}>
      <Navbar/>
      <Announcement/>

      <div className={styles.WrapperContainer}>
      <div className={styles.Wrapper}>
          <div className={styles.ImgContainer}>
            <img className={styles.Image} alt="" src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriavine-ring-68268125_1025699_ED_M.jpg"></img>
          </div>
          <div className={styles.InfoContainer}>
              <h1 className={styles.Title}>Vine Ring</h1>
              <div className={styles.Detail}>Mô tả chi tiết:</div>
                <p className={styles.Desc}>Nspired by nature, Tiffany Victoria captures the beauty of flowers and vines with a mix of expertly cut diamonds. This ring features a round tanzanite at its center and an organic vine motif of marquise diamonds. Creating color, light and movement, Tiffany Victoria designs are proof that more diamonds are always better.</p>
              <span className={styles.Price}>$15.000</span>

              <div className={styles.FilterContainer}>
                <div className={styles.Filter}>
                <span className={styles.FilterTitle}>Color</span>
                <div className={styles.FilterColor} color="black" />
                <div className={styles.FilterColor} color="darkblue" />
                <div className={styles.FilterColor} color="gray" />
                </div>
                <div className={styles.Filter}>
                <span className={styles.FilterTitle}>Size</span>
                <select className={styles.FilterSize}>
                    <option className={styles.FilterSizeOption}>XS</option>
                    <option className={styles.FilterSizeOption}>S</option>
                    <option className={styles.FilterSizeOption}>M</option>
                    <option className={styles.FilterSizeOption}>L</option>
                    <option className={styles.FilterSizeOption}>XL</option>
                </select>
                </div>
          </div>

          <div className={styles.AddContainer}>
            <div className={styles.AmountContainer}>
              <Remove />
              <span className={styles.Amount}>1</span>
              <Add />
            </div>
            <button className={styles.Button}>ADD TO CART</button>
          </div>
          </div>

      </div>
      
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Product
