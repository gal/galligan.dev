import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://blog.galligan.dev">Blog</a>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <nav>
          <ul className="links">
            <li>
              <a href="/cv.pdf">galligan.dev/cv.pdf </a>
            </li>
            <li>
              <Link to="https://github.com/gal/">github.com/gal</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/gal1/">
                linkedin.com/in/gal1
              </Link>
            </li>
          </ul>
        </nav>
        <section id="experience">
          <h1>Experience</h1>

          <table className="experience-table">
            <tbody>
              <tr>
                <td>2023-present</td>
                <td>
                  Software Engineer @{" "}
                  <em>
                    <Link to="https://ibm.com/security">IBM</Link>
                  </em>
                </td>
              </tr>
              <tr>
                <td>2024-present</td>
                <td>
                  CoderDojo champion @{" "}
                  <em>
                    <Link to="https://corkairportdojo.ie">
                      Cork Airport Dojo
                    </Link>
                  </em>
                </td>
              </tr>
              <tr>
                <td>2023-2023</td>
                <td>
                  Software Engineer Intern @{" "}
                  <em>
                    <Link to="https://ibm.com/security">IBM</Link>
                  </em>
                </td>
              </tr>
              <tr>
                <td>2022-2023</td>
                <td>
                  Chairperson @{" "}
                  <em>
                    <Link to="https://netsoc.co">
                      UCC Networking, Gaming, and Technology Society
                    </Link>
                  </em>
                </td>
              </tr>
              <tr>
                <td>2019-2022</td>
                <td>
                  SysAdmin @{" "}
                  <em>
                    <Link to="https://netsoc.co">
                      UCC Networking, Gaming, and Technology Society
                    </Link>
                  </em>
                </td>
              </tr>
              <tr>
                <td>2017-2020</td>
                <td>
                  Senior Mentor @{" "}
                  <em>CoderDojo Cork Airport Business Park @ IBM Ireland</em>
                </td>
              </tr>
              <tr>
                <td>2017-2017</td>
                <td>
                  QA Engineer Intern @ <em>DELL Technologies</em>
                </td>
              </tr>
              <tr>
                <td>2017-2017</td>
                <td>
                  IT Support Intern @ <em>DCE Computers Ltd</em>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Home;
