import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import GiftPageProducts from '../components/GiftPageProducts';
import styles from "./GiftPage.module.css"
import ReactPagination from '../components/Pagination';

const GiftPage = () => { 
  return (
    <div className={styles.Container}>
      <Navbar/>
      <Announcement/>
      <h1 className={styles.Title}>Phụ Kiện Page</h1>
      <div className={styles.FilterContainer}>
          <div className={styles.Filter}>
              <span className={styles.FilterText}>Bộ lọc sản phẩm:</span>
              <select className={styles.Select}>
              <option className={styles.Option} disabled selected>Thương hiệu</option>
                  <option className={styles.Option}>GMK keycaps</option>
                  <option className={styles.Option}>Taihao keycap</option>
                  <option className={styles.Option}>Calm Depths</option>
              </select>

              <select className={styles.Select}>
                <option className={styles.Option} disabled selected>Chất liệu</option>
                <option className={styles.Option}>Nhựa ABS</option>
                <option className={styles.Option}>Nhựa PBT</option>
                <option className={styles.Option}>Nhựa Thạch Anh</option>
                <option className={styles.Option}>Nhựa Màu</option>
            </select>

            <select className={styles.Select}>
                <option className={styles.Option} disabled selected>Giá</option>
                <option className={styles.Option}>15$</option>
                <option className={styles.Option}>50$</option>
                <option className={styles.Option}>100$</option>
                <option className={styles.Option}>200$</option>
            </select>

            <select className={styles.Select}>
                <option className={styles.Option} disabled selected>Giới tính</option>
                <option className={styles.Option}>Nam</option>
                <option className={styles.Option}>Nữ</option>
                <option className={styles.Option}>Khác</option>
            </select>

            <select className={styles.Select}>
                <option className={styles.Option} disabled selected>Màu chất liệu</option>
                <option className={styles.Option}>Trắng</option>
                <option className={styles.Option}>Xanh</option>
                <option className={styles.Option}>Vàng</option>
                <option className={styles.Option}>Đen</option>
            </select>
          </div>

          <div className={styles.Filter}>
            <span className={styles.FilterText}>Xắp xếp:</span>
            <select className={styles.Select}>
                <option className={styles.Option} selected>Sản phẩm mới nhất</option>
                <option className={styles.Option}>Sản phẩm phổ biến nhất</option>
                <option className={styles.Option}>Sản phẩm cũ nhất </option>
          </select>
          </div>
      </div>
      <GiftPageProducts/>
      <ReactPagination/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default GiftPage
