import { Button } from 'react-bootstrap';

const PageOne = ({ onClick, onChange, pageData }) => {
  const date = new Date();
  return (
    <>
      <h1>PageOne</h1>
      <div className="container">
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">
                First Name:
                <input
                  name="firstName"
                  type="text"
                  value={pageData.firstName}
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="lastName">
                Last Name:
                <input
                  name="lastName"
                  type="text"
                  value={pageData.lastName}
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="applicationDate">
                Application Date:
                <input
                  name="applicationDate"
                  type="date"
                  value={pageData.applicationDate}
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="country">
                Country:
                <select
                  name="country"
                  value={pageData.country}
                  onChange={(e) => onChange(e)}
                >
                  <option value="">Select a country</option>
                  <option value="india">India</option>
                  <option value="uk">UK</option>
                  <option value="usa">USA</option>
                  <option value="france">France</option>
                  <option value="germany">germany</option>
                </select>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button onClick={() => onClick()}>Save and Proceed</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PageOne;
