import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-home-container">
        <div className="home-content">
          <div className="first-row">
            <div className="profiles">
              <label>
                Profiles:
                <select>
                  <option>CISCO</option>
                  <option>juniper</option>
                  <option>belden</option>
                </select>
              </label>
            </div>
            <div className="Validations">
              <label>
                Validations:
                <select>
                  <option>Check ip</option>
                  <option>check timestamps</option>
                </select>
              </label>
            </div>
          </div>
          <div className="second-row">
            <div className="profiles">
              <label>
                Profiles:
                <select>
                  <option>CISCO</option>
                  <option>juniper</option>
                  <option>belden</option>
                </select>
              </label>
            </div>
            <div className="Validations">
              <label>
                Validations:
                <select>
                  <option>Check ip</option>
                  <option>check timestamps</option>
                </select>
              </label>
            </div>
          </div>
          <span className="live-logs-heading">Live logs</span>
          <div className="third-row"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
