import { Button } from 'react-bootstrap';

const PageOne = ({ onClick, onChange, pageData }) => {
  return (
    <>
      <h1>PageOne</h1>
      {/* Go to Page Two */}
      <form>
        <label htmlFor="firstName">
          First Name:
          <input
            name="firstName"
            type="text"
            value={pageData.firstName}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            name="lastName"
            type="text"
            value={pageData.lastName}
            onChange={(e) => onChange(e)}
          />
        </label>
      </form>
      <Button onClick={() => onClick()}>Save and Proceed</Button>
    </>
  );
};

export default PageOne;
