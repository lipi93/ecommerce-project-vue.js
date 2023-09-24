<template>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="">about us</a></li>
            <li><a href="">our services</a></li>
            <li><a href="">privacy policy</a></li>
            <li><a href="">affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href=""> FAQ</a></li>
            <li><a href=""> shipping</a></li>
            <li><a href=""> returns</a></li>
            <li><a href="">order status</a></li>
            <li><a href="">payment option</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="">watch</a></li>
            <li><a href="">bag</a></li>
            <li><a href="">shoes</a></li>
            <li><a href="">dress</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
            <a href=""><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.footer {
  background-color: #ccbf94;
  padding: 70px 0;
  margin-top: 5px;
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 22px;
  color: black;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}

.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 100px;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 18px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #000000;
  display: block;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: #e91e63;
  padding-left: 8px;
}

.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(40, 36, 36, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #e91e63;
  transform: all 0.5s ease;
}

.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

/* responsive */
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}

@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>
