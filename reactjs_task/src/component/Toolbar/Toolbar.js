import React from "react";
import "./Toolbar.css";
import image4 from "/src/component/Images/image_4.jpg";
import image9 from "/src/component/Images/image_9.jpg";
import image5 from "/src/component/Images/image_5.jpg";
import image6 from "/src/component/Images/image_6.jpg";
import image7 from "/src/component/Images/image_7.jpg";
import image2 from "/src/component/Images/iamge_2.jpg";

const toolbar = props => (
  <header className="Toolbar">
    <nav className="Toolbar__navigation">
      <div> </div>

      <div className="Toolbar__navigation_items">
        <dl>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">CLASSES</a>
          </li>
          <li>
            <a href="/">RESULTS</a>
          </li>
          <li>
            <a href="/">ACTIVITES</a>
          </li>
          <li>
            <a href="/">SCHOOLSECTIONS</a>
          </li>
          <li>
            <a href="/">CURRICULUMS</a>
          </li>
          <li>
            {" "}
            <button onClick={() => this.setState({ liked: true })}>
              register
            </button>
          </li>
          <li>
            {" "}
            <select id="change">
              <option value="three">---</option>
              <option value="one"> One </option>
              <option value="tow"> Tow </option>
            </select>
          </li>
        </dl>
      </div>

      <div className="TextONiMage">
        <img src={image9} />
        <h1>Al Manar Languge School</h1>
        <p1>Advanced education in international techniques</p1>
        <p>
          <button onClick={() => this.setState({ liked: true })}>
            contact us
          </button>
        </p>
      </div>
      <div className="add_info">
        <dl>
          <li>
            <h1>500</h1>
            <p>Qualified teachers in afield</p>
          </li>

          <li>
            <h1>+9000</h1>
            <p>students in our classes and sections</p>
          </li>

          <li>
            <h1>230</h1>
            <p>Activites in all Sports,Arts,Etc.</p>
          </li>

          <li>
            <h1>+100</h1>
            <p>Computer Science and scientific Labs</p>
          </li>
        </dl>
      </div>

      <div class="quote">
        <h1>LAST ACTIVITES</h1>
        <img src={image4} />
        <blockquote>
          <sub>
            the workshop was part of the program to prepare apracticall model
            for the stenderd of teaching Arabic language for the first grade in
            schools through a team of elite professors specialize in arabic
            language under the supervision of the greatest professors of Arabic
            language and professors of curricula and methods of teaching Arabic
            language at the faculty of Education at the university.
          </sub>
        </blockquote>
      </div>

      <div className="add_additional_info">
        <dl>
          <li>
            <h1>
              <img src={image2} />
            </h1>
            <h2>Curriculums</h2>
            <p>Our up to date curriculums in all fields of learn</p>
          </li>

          <li>
            <h1>
              <img src={image7} />
            </h1>
            <h2>Classes</h2>
            <p>Al Manar classes and sections </p>
          </li>

          <li>
            <h1>
              <img src={image6} />
            </h1>
            <h2>Top Students</h2>
            <p>Top Students in all classes levels that have highest grades</p>
          </li>

          <li>
            <h1>
              <img src={image5} />
            </h1>
            <h2>Teachers</h2>
            <p>Our Qualified Teachers in all fields</p>
          </li>
        </dl>
      </div>

      <div className="the_form">
        <form action="" method="get">
          <ul>
            <li>
              <h1> be one of our family</h1>

              <label for="name">Your Name:</label>
              <input id="name" name="name" />

              <label for="phone">Your Phone Number:</label>
              <input id="name" name="name" />

              <label for="job">Job Title:</label>
              <input id="name" name="name" />

              <label>comments</label>
              <textarea id="comments" name="comments" />

              <p>
                <button onClick={() => this.setState({ liked: true })}>
                  contact us
                </button>
              </p>
            </li>

            <li>
              <h1>we are hiring</h1>

              <blockquote>
                <p1>Arabic Teacher </p1>
                <a href="/">see job details</a>
                <p>
                  <button onClick={() => this.setState({ liked: true })}>
                    Apply
                  </button>
                </p>
              </blockquote>

              <blockquote>
                <p1>English Teacher </p1>
                <a href="/">see job details</a>
                <p>
                  <button onClick={() => this.setState({ liked: true })}>
                    Apply
                  </button>
                </p>
              </blockquote>

              <blockquote>
                <p1>Swiming Teacher</p1>
                <a href="/">see job details</a>
                <p>
                  <button onClick={() => this.setState({ liked: true })}>
                    Apply
                  </button>
                </p>
              </blockquote>

              <blockquote>
                <p1>Quaran Teacher </p1>
                <a href="/">see job details</a>
                <p>
                  <button onClick={() => this.setState({ liked: true })}>
                    Apply
                  </button>
                </p>
              </blockquote>

              <blockquote>
                <p1>French Teachers </p1>
                <a href="/">see job details</a>
                <p>
                  <button onClick={() => this.setState({ liked: true })}>
                    Apply
                  </button>
                </p>
              </blockquote>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  </header>
);
export default toolbar;
