import { progressBarData } from "../../data/progressBarData";
import { ProgressBar } from "../progress-bar/ProgressBar";

export function MainContent() {
  return (
    <section className="container">
      <div className="row">
        <div className="column">
          <h2>About startup</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptate aspernatur perspiciatis delectus, assumenda aut sapiente atque praesentium. Magnam vero adipisci, sed esse consectetur ullam incidunt quam totam illo dignissimos!</p>
          <ProgressBar label='UX design' value={90} />
          <ProgressBar label='Web design' value={75} />
          <ProgressBar label='Web development' value={45} />

          {progressBarData.map(p => <ProgressBar key={p.label} label={p.label} value={p.value} />)}
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
  );
}