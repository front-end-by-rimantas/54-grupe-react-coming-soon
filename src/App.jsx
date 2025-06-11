import './assets/main.css';
import './assets/layout.css';
import './assets/font-awesome.min.css';
import './assets/form.css';
import './assets/socials.css';
import './assets/coming-soon.css';
import { Clock } from './components/clock/Clock';
import { ProgressBar } from './components/progress-bar/ProgressBar';
import { Mouse } from './components/mouse/Mouse';

import logo from './assets/logo.png';
import logoWhite from './assets/logo-white.png';

export function App() {
  return (
    <>
      <main>
        <section className="container bg-blue hero">
          <div className="row-short">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="center">Coming soon</h1>
            <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cum ut placeat, possimus maiores modi enim cumque. Voluptate expedita, molestiae cumque, veniam aliquid at ratione error eum eos eaque adipisci.</p>
            <Clock />
            <Mouse />
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="column">
              <h2>About startup</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptate aspernatur perspiciatis delectus, assumenda aut sapiente atque praesentium. Magnam vero adipisci, sed esse consectetur ullam incidunt quam totam illo dignissimos!</p>
              <ProgressBar label='UX design' value={90} />
              <ProgressBar label='Web design' value={75} />
              <ProgressBar label='Web development' value={45} />
            </div>
            <div className="column right-column">
              <h2>Have any question?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident mollitia, quasi eum aut id voluptatum earum molestias unde? Quia facilis delectus suscipit obcaecati? Quas sequi cum cupiditate maiores tempora laudantium.</p>

              {/* <form action="/api" method="post">
                <div>
                  <input id="user_role" type="text" value="buyer" name="role" hidden />
                </div>
                <div>
                  <label htmlFor="id">User id</label>
                  <input id="id" type="text" value="5254516258456" name="id" readonly />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value="Kulverstukas" name="name" autocomplete="name" placeholder="Vardas" />
                </div>
                <div>
                  <label htmlFor="surname">Surname</label>
                  <input id="surname" type="text" value="Kulverstukas" name="surname" autocomplete="family-name" />
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" value="Kulverstukas" name="username" autocomplete="username" />
                </div>
                <div>
                  <label htmlFor="email">Your email</label>
                  <input id="email" type="email" name="email" value="" autocomplete="email" autofocus />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" name="password" value="" autocomplete="new-password" />
                  <button type="button">akis</button>
                </div>
                <div>
                  <button type="reset">Reset</button>
                  <button type="submit">Register</button>
                </div>
              </form> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer bg-blue">
        <div className="row">
          <div className="socials">
            <a className="fa fa-facebook" href="#" target="_blank"></a>
            <a className="fa fa-twitter" href="#" target="_blank"></a>
            <a className="fa fa-dribbble" href="#" target="_blank"></a>
            <a className="fa fa-tumblr" href="#" target="_blank"></a>
            <a className="fa fa-linkedin" href="#" target="_blank"></a>
            <a className="fa fa-instagram" href="#" target="_blank"></a>
            <a className="fa fa-rss" href="#" target="_blank"></a>
          </div>

          <a href="#" className="back-to-top fa fa-angle-up"></a>
        </div>
        <div className="row-short">
          <img className="logo" src={logoWhite} alt="Matrox logo" />
          <div className="trio">
            <p>Copyright &copy; 2025 <a href="#">Matrox</a></p>
            <p>All rights reserved</p>
            <p>Designed by <a href="#">TrendyTheme</a></p>
          </div>
          <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque, accusbus officiis illo similique odit voluptatibus <a href="#">200+</a> laudantium placeat dignissimos saepe nulla corporis, voluptate facere <a href="#">Matrox</a> qui quasi!</p>
        </div>
      </footer>
    </>
  )
}