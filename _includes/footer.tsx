import * as React from "react";

const Footer: React.FC<any> = ({ config }) => {
  return (
    <footer id="footer">
      <div className="inner">
        <section>
          {/*<h2>Get in touch</h2>*/}
          {/*<form method="post" action="#">*/}
          {/*  <div className="fields">*/}
          {/*    <div className="field half">*/}
          {/*      <input type="text" name="name" id="name" placeholder="Name" />*/}
          {/*    </div>*/}
          {/*    <div className="field half">*/}
          {/*      <input*/}
          {/*        type="email"*/}
          {/*        name="email"*/}
          {/*        id="email"*/}
          {/*        placeholder="Email"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div className="field">*/}
          {/*      <textarea*/}
          {/*        name="message"*/}
          {/*        id="message"*/}
          {/*        placeholder="Message"*/}
          {/*      ></textarea>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <ul className="actions">*/}
          {/*    <li>*/}
          {/*      <input type="submit" value="Send" className="primary" />*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</form>*/}
        </section>
        <section>
          <h2>Follow</h2>
          <ul className="icons">
            {config.twitterUrl && (
              <li>
                <a
                  href={config.twitterUrl}
                  className="icon brands style2 fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
            )}
            {config.facebookUrl && (
              <li>
                <a
                  href={config.facebookUrl}
                  className="icon brands style2 fa-facebook-f"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
            )}
            {config.instagramUrl && (
              <li>
                <a
                  href={config.instagramUrl}
                  className="icon brands style2 fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
            )}
            {config.dribbleUrl && (
              <li>
                <a
                  href={config.dribbleUrl}
                  className="icon brands style2 fa-dribbble"
                >
                  <span className="label">Dribbble</span>
                </a>
              </li>
            )}
            {config.githubUrl && (
              <li>
                <a
                  href={config.githubUrl}
                  className="icon brands style2 fa-github"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
            )}
            {config.emailUrl && (
              <li>
                <a
                  href={config.emailUrl}
                  className="icon solid style2 fa-envelope"
                >
                  <span className="label">Email</span>
                </a>
              </li>
            )}
            {config.rssUrl && (
              <li>
                <a href={config.rssUrl} className="icon solid style2 fa-rss">
                  <span className="label">RSS</span>
                </a>
              </li>
            )}
          </ul>
        </section>
        <ul className="copyright">
          <li>&copy; Untitled. All rights reserved</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
