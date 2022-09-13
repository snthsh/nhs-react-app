import { Button } from 'react-bootstrap';

const PageTwo = ({ onClick, onChange, pageData }) => {
  return (
    <>
      <h1>PageTwo</h1>
      <h2>Hi {`${pageData.firstName} ${pageData.lastName}`}</h2>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select
                name="countryOne"
                value={pageData.countryOne}
                onChange={(e) => onChange(e)}
              >
                <option value="india">India</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
                <option value="france">France</option>
                <option value="germany">germany</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Go to Page Three */}
      <Button onClick={() => onClick()}>Save and Proceed</Button>
    </>
  );
};

export default PageTwo;
