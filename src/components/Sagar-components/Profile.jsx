import { Footer } from "./Footer";
import "./styles/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import initAOS from "./assets/aos";
import Wellness from "../Saiful-components/Wellness";
import HealthGoals from "../Saiful-components/HealthGoals";
import NutritionFactsComponent from "../Saiful-components/NutritionFactsComponent";

export const Profile = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <section>
        <h1 className="routs mb-4">Profile</h1>

        <div className="profile-intro container d-flex flex-column flex-md-row align-items-center p-4">
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
            <img
              data-aos="fade-right"
              src="https://www.fittr.com/static-content/phone_screens_c32895c20c.webp"
              alt=""
              width={"75%"}
              className=""
            />
          </div>
          <div
            data-aos="fade-left"
            className="col-md-6 text-center text-md-left"
          >
            <h1>Introducing the App</h1>
            <p>
              Coaches, Community, Customised Plans. Plus loads of free tools
              like Calorie Counter, Diet Tool, Step Counter, Water Reminder,
              Exercise Library, Articles, and much more!
            </p>
            <button className="btn btn-warning mb-4">Get Started</button>
          </div>
        </div>
        <HealthGoals />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <button className="btn btn-warning ">
            <a className="text-dark" href="/nutration">
              Nutrition Facts
            </a>
          </button>
          <button className="btn btn-warning">
            <a className="text-dark" href="/mealLoger">
              Meal Loger
            </a>
          </button>
          <button className="btn btn-warning">
            <a className="text-dark" href="/BmiCal">
              BMI Calculator
            </a>
          </button>
        </div>
        <Wellness />


        <div className="container guidlines-img mt-4 pt-5">
          <div className="row text-center d-flex">
            <div data-aos="fade-up" className="col-lg-6 mb-4">
              <h1>Building Sustainable Habits</h1>
              <p>
                Getting fit is the easy part, staying fit is the real deal. We
                at FITTR realize this and integrate fitness into your existing
                lifestyle gradually to ensure you don’t lose the results.
              </p>
              <img
                data-aos="fade-up"
                src="https://www.fittr.com/static-content/sustainable_habits_124af7fc55.webp"
                alt=""
                width={"75%"}
                className="img-fluid px-5"
              />
            </div>
            <div data-aos="fade-up" className="col-lg-6 mb-4">
              <h1>Monitoring and Accountability</h1>
              <p>
                Our expert coaches don’t just give you diet and training plans -
                they stay by your side as a guide and help you navigate your
                fitness journey.
              </p>
              <img
                data-aos="fade-up"
                src="https://www.fittr.com/static-content/monitoring_and_accountability_abcdbf501d.webp"
                alt=""
                width={"75%"}
                className="img-fluid px-5"
              />
            </div>
          </div>
        </div>

        <div className="text-center my-5 pt-5">
          <h1>Develop healthy habits</h1>
          <p>
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </p>
        </div>

        <div className="container my-4 pb-4">
          <div className=" habbits row text-center">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className=" col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Track up to 82 micronutrients</h5>
              <p>Log your meals and track all your macro and micronutrients.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Log meals and exercise</h5>
              <p>
                Plus, you can create custom foods, recipes, exercises and
                biometrics!
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Custom diet settings</h5>
              <p>Set weight, macro & nutrient targets to meet your goals.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Fasting timer</h5>
              <p>
                Track your intermittent fasts and see their effect over time.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Diet support</h5>
              <p>
                Whether your Keto, Vegan, or on one recommended by your doctor.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Fasting timer</h5>
              <p>
                Track your intermittent fasts and see their effect over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
