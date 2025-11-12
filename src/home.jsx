import React from "react";
import PrimaryBtn from "./components/Button/primaryBtn";
import Navbar from "./components/nav/navbar.jsx";
import Hello from "./components/description/hello.jsx";
import About from "./components/description/About.jsx";
import ExpirienceSection from "./components/description/expirience.jsx";
import MySkills from "./components/description/myskills.jsx";
import MyAchievements from "./components/description/myachievements.jsx";
import MyProject from "./components/description/myproject.jsx";
import Responsibilities from "./components/description/responsibilities.jsx";
import Footer from "./components/nav/footer.jsx";
import Rowbtn from "./components/Button/rowbtn.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact.jsx";
import IconsCord from "./components/cards/iconscord.jsx";
import MyProjectsTable from "./myprojects.jsx";
import Achievements from "./achievements.jsx";

function HomePage() {
  return (
    <div className="relative bg-[#020312] ">
      <BrowserRouter>
        <section>
          <Navbar id="" />
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section id="home">
                  <Hello />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="experience">
                  <ExpirienceSection />
                </section>
                <section id="skills">
                  <MySkills />
                </section>
                <section id="achievements">
                  <MyAchievements />
                </section>
                <section id="projects">
                  <MyProject />
                </section>
                <section id="responsibilities">
                  <Responsibilities />
                </section>
                <section id="contact">
                  <Footer />
                </section>
                <Rowbtn />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myprojects" element={<MyProjectsTable />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
        <IconsCord />
      </BrowserRouter>
    </div>
  );
}

export default HomePage;
