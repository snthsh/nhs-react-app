import { Button } from 'react-bootstrap';
import COUNTRIES from '../data.json';

const PageOne = ({ onClick, onChange, pageData }) => {
  return (
    <>
      <h1>Page 1</h1>
      <div className="container">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              name="firstName"
              type="text"
              value={pageData.firstName}
              onChange={onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              name="lastName"
              type="text"
              value={pageData.lastName}
              onChange={onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="applicationDate" className="form-label">
              Application Date:
            </label>
            <input
              className="form-control"
              aria-label="Application Date"
              name="applicationDate"
              type="date"
              value={pageData.applicationDate}
              onChange={onChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country:
            </label>
            <select
              className="form-select"
              aria-label="Country"
              name="country"
              value={pageData.country}
              onChange={onChange}
            >
              <option value="">Select a country</option>
              {COUNTRIES.map((country) => {
                return (
                  <option key={country.name} value={country.name}>
                    {country.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col">
            <Button onClick={onClick}>Save and Proceed</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PageOne;
