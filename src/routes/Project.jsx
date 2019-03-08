import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <section className="section section--dark">
      <div className="container container--big">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner section-block section-block--desc">
            <div className="mdc-layout-grid__cell--span-8">
              <h2>项目</h2>
              <p>完成的技术项目及笔记。包括网站、小程序、API服务等。</p>
            </div>
            <div className="mdc-layout-grid__cell">
              <h3>星标</h3>
              <ul>
                <li><Link to="/">测试</Link></li>
              </ul>
            </div>
          </div>
          <div className="mdc-layout-grid__inner section-block">
            <div className="mdc-layout-grid__cell">
              <Link to="/article/programing" className="link-block">
                <div className="section-cate__inner section-cate section-cate--1">

                </div>
              </Link>
              <h3><Link to="/article/programing">网站</Link></h3>
            </div>
            <div className="mdc-layout-grid__cell">
              <Link to="/article/writing" className="link-block">
                <div className="section-cate__inner section-cate section-cate--2">

                </div>
              </Link>
              <h3><Link to="/article/writing">小程序</Link></h3>
            </div>
            <div className="mdc-layout-grid__cell">
              <Link to="/article/reading" className="link-block">
                <div className="section-cate__inner section-cate section-cate--3">

                </div>
              </Link>
              <h3><Link to="/article/reading">API</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project