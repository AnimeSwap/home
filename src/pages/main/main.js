import React, { Component } from "react";
import { Carousel, Row, Col, Button  } from 'antd';
import './main.less';
import logo192 from "./img/logo192.png";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.next();
  }
  previous() {
    this.slider.prev();
  }
  logo() {
    return (
      <a href="/" className="logo"><img src={logo192} style={{ width: "80px", marginBottom: "20px", borderRadius: "50%", boxShadow: "0 0 1em #000"}} alt="Logo"></img> AnimeSwap</a>
    )
  }
  nav() {
    return (
      <nav className="nav">
        <Row justify="space-between" align="bottom">
          <Col>
            <a className="navLink" href="https://docs.animeswap.org" rel="noreferrer noopenner" target="_blank">Developers</a>
          </Col>
          <Col>
            <a className="navLink" href="https://docs.animeswap.org/blog" rel="noreferrer noopenner" target="_blank">Blog</a>
          </Col>
          <Col>
            <a className="navLink" href="https://docs.animeswap.org/docs/tutorial/FAQ" rel="noreferrer noopenner" target="_blank">FAQ</a>
          </Col>
          <Col>
            <Button type="primary" size="large" style={{marginLeft: "20px", borderRadius: "10px", boxShadow: "0 0 1em #333"}}>
              <a style={{fontWeight: "bold"}} href="https://app.animeswap.org" rel="noreferrer noopenner" target="_blank">Launch App</a>
            </Button>
          </Col>
        </Row>
      </nav>
    )
  }
  footer() {
    return (
      <div className="footerContent">
        <p style={{ marginBottom: "20px", fontSize: "54px", color: "#eee", fontWeight: "bold" }}>AnimeSwap <span style={{ fontWeight: "normal" }}>Protocol</span></p>
        <p style={{ fontSize: "24px" }}>Swap, farm, and earn on the <a href="https://aptoslabs.com/" rel="noreferrer noopenner" target="_blank">#Aptos</a> <a href="https://sui.io/" rel="noreferrer noopenner" target="_blank">#Sui</a>.</p>
        <div>
          <a href="https://twitter.com/animeswap_org" rel="noreferrer noopenner" target="_blank" className="footerLink" ><svg width="32px" height="32px" fill="white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M31.275 5.924c-.503.223-1.02.411-1.548.564a6.842 6.842 0 0 0 1.393-2.45.516.516 0 0 0-.755-.6 12.181 12.181 0 0 1-3.6 1.422 6.904 6.904 0 0 0-4.809-1.96 6.877 6.877 0 0 0-6.813 7.757A17.587 17.587 0 0 1 3.072 4.253a.516.516 0 0 0-.846.067 6.866 6.866 0 0 0-.93 3.454c0 1.655.59 3.225 1.634 4.452a5.816 5.816 0 0 1-.919-.41.516.516 0 0 0-.767.44v.091c0 2.47 1.33 4.695 3.362 5.908a5.882 5.882 0 0 1-.522-.076.516.516 0 0 0-.588.664 6.867 6.867 0 0 0 5.032 4.605 12.153 12.153 0 0 1-6.497 1.854c-.486 0-.976-.029-1.455-.085a.517.517 0 0 0-.339.946A18.525 18.525 0 0 0 10.255 29.1c6.994 0 11.37-3.298 13.808-6.065 3.041-3.45 4.785-8.016 4.785-12.528 0-.189-.003-.38-.009-.569a13.355 13.355 0 0 0 3.074-3.255.516.516 0 0 0-.638-.759Z"></path></svg></a>
          <a href="https://github.com/AnimeSwap" rel="noreferrer noopenner" target="_blank" className="footerLink" ><svg width="32px" height="32px" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a>
          <a href="https://discord.gg/rbUG6SpRAM" rel="noreferrer noopenner" target="_blank" className="footerLink"><svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Row type="flex" justify="center" align="top">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Carousel style={{}} autoplay autoplaySpeed={4000} dots={false} infinite={true} ref={c => (this.slider = c)}>
            <div>
              <div className="slide slide--1"></div>
            </div>
            <div>
              <div className="slide slide--2"></div>
            </div>
            <div>
              <div className="slide slide--3"></div>
            </div>
            <div>
              <div className="slide slide--4"></div>
            </div>
          </Carousel>
          <span className="slider-pagination left" onClick={this.previous}>‹</span>
          <span className="slider-pagination right" onClick={this.next}>›</span>
          <header className="header">
            <Row justify="space-between" align="middle">
              <Col>
                {this.logo()}
              </Col>
              <Col>
                {this.nav()}
              </Col>
            </Row>
          </header>
          <footer className="footer">
            {this.footer()}
          </footer>
        </Col>
      </Row>
    )
  }
}
