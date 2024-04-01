import React from "react";
import styles from "../styles/home.module.css";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.homeContainer}>
        <section className="hero__section">
          <div className={styles.hero__container}>
            <div className={styles.hero__text}>
              <h1>
                Founded by first time founders
                <br /> for startup founders
              </h1>
              <p>
                Tell us what areas you want to improve your business <br />
                <br /> and we will make it easy for you
              </p>
              <Link to="/contact">
                <button className={styles.hero__button}>Start project</button>
              </Link>
            </div>
            <div className={styles.hero__content}>
              <div className={styles.dotsContainer}>
                <div className={styles.whiteDots}>
                  <img src="/images/heroPageObjects/whiteDot.png" alt="" />
                  <img src="/images/heroPageObjects/whiteDot.png" alt="" />
                  <img src="/images/heroPageObjects/whiteDot.png" alt="" />
                  <img src="/images/heroPageObjects/whiteDot.png" alt="" />
                  <img src="/images/heroPageObjects/whiteDot.png" alt="" />
                  <img src="/images/heroPageObjects/whiteDot.png" alt="" />
                </div>
                <div className={styles.redDots}>
                  <img src="/images/heroPageObjects/redDot.png" alt="" />
                  <img src="/images/heroPageObjects/redDot.png" alt="" />
                  <img src="/images/heroPageObjects/redDot.png" alt="" />
                  <img src="/images/heroPageObjects/redDot.png" alt="" />
                  <img src="/images/heroPageObjects/redDot.png" alt="" />
                  <img src="/images/heroPageObjects/redDot.png" alt="" />
                </div>
              </div>
              {/* <img
                src="/images/heroPageObjects/smallImg.png"
                alt=""
                className={styles.smallImg}
              /> */}
              {/* <img
                src="/images/heroPageObjects/midImg.png"
                alt=""
                className={styles.midImg}
              /> */}
              <img
                src="/images/heroPageObjects/redCircle.png"
                alt=""
                className={styles.redCircle}
              />
              <img
                src="/images/heroPageObjects/mainImg.png"
                alt="imgMain"
                className={styles.mainImg}
              />
            </div>
          </div>
        </section>

        <section className="aboutUs__section">
          <div className={styles.aboutUs__header}>
            <p>About us</p>
            <h1>Becoming your ally at every stage of your company</h1>
          </div>
          <div className={styles.aboutUs__container}>
            <div className={styles.aboutUs__img}>
              <img src="/images/aboutUsObjects/frame.png" alt="" />
            </div>
            <div className={styles.aboutUs__content}>
              <div className={styles.aboutUs__text}>
                <p>
                  Based in the tech hub of Europe-<strong>Estonia</strong>-We’re
                  a team of entrepreneurs, fueled by design and technology. We
                  don’t just create, we craft experiences that resonate with
                  your audience and drive growth. We innovate, developing web
                  and app solutions, and impactful marketing strategies. We
                  partner with you, aligning our solutions with your vision
                </p>

                <p>
                  <br />
                </p>
                <p>
                  As a digital agency, we offer comprehensive services from web
                  and app development to digital marketing and branding. We
                  tailor solutions to meet your unique needs. We collaborate
                  closely with you, understanding your goals, audience, and
                  industry. This insight informs our approach, enabling us to
                  deliver results.
                </p>
              </div>
              {/* <div className={styles.aboutUs__buttons}>
                <button className={styles.aboutUs__Btn}>About us</button>
                <button className={styles.ourStory__Btn}>Our Story</button>
              </div> */}
            </div>
          </div>
        </section>

        <section className="services__section">
          <div className={styles.services__container}>
            <div className={styles.leftCol}>
              <p className={styles.colHeader}>What we do best</p>
            </div>

            <div className={styles.rightCol}>
              <div className={styles.features}>
                <div className={styles.gridItem}>
                  <div className={styles.SMM}>
                    <div className={styles.SMM__images}>
                      <img
                        src="/images/servicePageObjects/Group 2117.png"
                        alt=""
                        className={styles.circle}
                      />
                      <img
                        src="/images/servicePageObjects/monitor.png"
                        alt=""
                        className={styles.monitor}
                      />
                    </div>
                    <div className={styles.SMM__text}>
                      <h1>Design and Development</h1>
                      <p style={{ fontSize: "20px" }}>
                        Test your idea fast. Build an MVP. Launch, learn, win
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.SMM}>
                    <div className={styles.SMM__images}>
                      <img
                        src="/images/servicePageObjects/Group 2117.png"
                        alt=""
                        className={styles.circle}
                      />
                      <img
                        src="/images/servicePageObjects/settings.png"
                        alt=""
                        className={styles.monitor}
                      />
                    </div>
                    <div className={styles.SMM__text}>
                      <h1>Strategy and Workshops</h1>
                      <p style={{ fontSize: "20px" }}>
                        Stale meetings got you feeling like yesterday's coffee?
                        Ditch the yawns and ignite your team's potential with a
                        Strategy Jam!
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.SMM}>
                    <div className={styles.SMM__images}>
                      <img
                        src="/images/servicePageObjects/Group 2117.png"
                        alt=""
                        className={styles.circle}
                      />
                      <img
                        src="/images/servicePageObjects/tv.png"
                        alt=""
                        className={styles.monitor}
                      />
                    </div>
                    <div className={styles.SMM__text}>
                      <h1>Full-stack Development</h1>
                      <p style={{ fontSize: "20px" }}>
                        We're a one-stop shop- From user-friendly features to
                        secure databases, we handle it all, ensuring your vision
                        becomes a reality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.SMM}>
                    <div className={styles.SMM__images}>
                      <img
                        src="/images/servicePageObjects/Group 2117.png"
                        alt=""
                        className={styles.circle}
                      />
                      <img
                        src="/images/servicePageObjects/pen-tool.png"
                        alt=""
                        className={styles.monitor}
                      />
                    </div>
                    <div className={styles.SMM__text}>
                      <h1>Marketing for Innovative Products</h1>
                      <p style={{ fontSize: "20px" }}>
                        Confused how to market your innovative product? We
                        translate your genius into clear excitement, helping
                        customers understand why it matters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.SMM}>
                    <div className={styles.SMM__images}>
                      <img
                        src="/images/servicePageObjects/Group 2117.png"
                        alt=""
                        className={styles.circle}
                      />
                      <img
                        src="/images/servicePageObjects/pen-tool.png"
                        alt=""
                        className={styles.monitor}
                      />
                    </div>
                    <div className={styles.SMM__text}>
                      <h1>Corporate Intrapreneurship Programs</h1>
                      <p style={{ fontSize: "20px" }}>
                        Our Intrapreneurship Programs empower your employees to
                        think like entrepreneurs, identify new opportunities,
                        and develop groundbreaking solutions – all within your
                        organization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.SMM}>
                    <div className={styles.SMM__images}>
                      <img
                        src="/images/servicePageObjects/Group 2117.png"
                        alt=""
                        className={styles.circle}
                      />
                      <img
                        src="/images/servicePageObjects/pen-tool.png"
                        alt=""
                        className={styles.monitor}
                      />
                    </div>
                    <div className={styles.SMM__text}>
                      <h1>Bootcamps and Exchange programs</h1>
                      <p style={{ fontSize: "20px" }}>
                        Looking to supercharge your skills and fast-track your
                        career? Our immersive bootcamps offer a concentrated
                        learning experience designed to equip you with the
                        knowledge and practical skills you need to succeed in
                        today's digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="works__section">
          <p style={{ textAlign: "center" }}>Our portfolio</p>
          <div className={styles.worksContainer}>
            <div className={styles.worksContainerText}>
              <h2>Making the Difference to "speak" louder</h2>
              <p>
                <br />
              </p>
            </div>
            <div className={styles.worksContainerSliderImages}>
              <div className={styles.slider}>
                <img src="/images/worksPageObjects/Avromed.jpg" alt="" />
              </div>
              <div className={styles.slider}>
                <img src="/images/worksPageObjects/vriendly.jpg" alt="" />
              </div>
              <div className={styles.slider}>
                <img src="/images/worksPageObjects/era.jpg" alt="" />
              </div>
            </div>
            <button className={styles.worksSectionBtn}>See all projects</button>
          </div>
        </section>
        <div className={styles.space}></div>
        <section className="testimonials__section">
          <h1 style={{ textAlign: " center", fontSize: "40px" }}>
            Testimonials
          </h1>
          <div
            className="testi__container"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "50px",
              alignItems: "center",
            }}
          ></div>
          <Testimonial />
        </section>

        <div className={styles.space}></div>
        <section className={styles.contactUs__section}>
          <div className={styles.col1}>
            <h1>Interested in Collaboration with Us?😊</h1>
            <p>We will craft and bring your idea into the reality</p>
            <Link to="/contact">
              <button className={styles.contactBtn}>Get started</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
