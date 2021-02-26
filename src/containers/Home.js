import React from "react";
import Header from "./Header";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <div className="call-to-action">
          <div>
            <h1>Punny headline</h1>
            <p>
              And an even wittier subheading to boot. Jumpstart your new Rustr
              service and start growing your business now.
            </p>
            <Link className="home-link">Sign Up Now</Link>
          </div>
        </div>
        <div className="call-to-action">
          <div>
            <h1>Pricing</h1>
            <p>
              Quickly build your enterprise with these unbeatable customer
              prices. It's built to grow with you, and help you grow. Get
              started with our <b>30</b> day free trial.
            </p>
          </div>
        </div>

        <div className="pricing-row">
          <div>
            <div>
              <div>
                <h4>Client License</h4>
              </div>
              <div>
                <h1>
                  $0 <small>/ mo</small>
                </h1>
                <ul>
                  <li>End to end encryption enabled</li>
                  <li>Runs on Linux, Windows, osX, iOS and Android</li>
                  <li>Integration with 34 partners</li>
                  <li>Help center access</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Server License</h4>
              </div>
              <div>
                <h1>
                  $15 <small>/ mo</small>
                </h1>
                <ul>
                  <li>Runs on Linux, containers, all major cloud providers</li>
                  <li>Up to 1000 clients per server</li>
                  <li>Basic Monitoring Integration</li>
                  <li>Help center access</li>
                </ul>
                <button type="button">Get started</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Enterprise License</h4>
              </div>
              <div>
                <h1>
                  $29 <small>/ mo</small>
                </h1>
                <ul>
                  <li>Hosted for you in our secure cloud</li>
                  <li>Proessional team monitoring your service</li>
                  <li>we manage updates for your server.</li>
                  <li>priority support</li>
                </ul>
                <button type="button">Sign up for free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator">
          <div>
            <h2>The best pricing model</h2>
            <p>
              Enter how many endpoints and servers you intend to run, and
              calculate the TCO of your switch to Rustr.
            </p>
          </div>
          <div id="calculator__form">
            <dl>
              <dt>
                <label for="clientLicenses"> # of clients</label>
              </dt>
              <dd>
                <input
                  id="clientLicenses"
                  name="clientLicenses"
                  value="1"
                  type="number"
                />
              </dd>
              <dt>
                <label for="serverLicenses"># of servers</label>
              </dt>
              <dd>
                <input
                  id="serverLicenses"
                  name="serverLicenses"
                  value="1"
                  type="number"
                />
              </dd>
            </dl>

            <div className="calculator__result"></div>

            <div>
              <button>Reserve Licenses Now</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-title">
            Rustr Inc
            <small>&copy; 2017-2021</small>
          </div>
          <div>
            <h5>Features</h5>
            <ul className="footer-list">
              <li>
                <Link className="home-link">Cool stuff</Link>
              </li>
              <li>
                <Link className="home-link">Random feature</Link>
              </li>
              <li>
                <Link className="home-link">Team feature</Link>
              </li>
              <li>
                <Link className="home-link">Stuff for developers</Link>
              </li>
              <li>
                <Link className="home-link">Another one</Link>
              </li>
              <li>
                <Link className="home-link">Last time</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul className="footer-list">
              <li>
                <Link className="home-link">Resource</Link>
              </li>
              <li>
                <Link className="home-link">Resource name</Link>
              </li>
              <li>
                <Link className="home-link">Another resource</Link>
              </li>
              <li>
                <Link className="home-link">Final resource</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul className="footer-list">
              <li>
                <Link className="home-link">Team</Link>
              </li>
              <li>
                <Link className="home-link">Locations</Link>
              </li>
              <li>
                <Link className="home-link">Privacy</Link>
              </li>
              <li>
                <Link className="home-link">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
