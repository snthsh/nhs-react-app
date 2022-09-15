import { Button } from 'react-bootstrap';
import COUNTRIES from '../data.json';

const PageTwo = ({ onClick, onChange, onSelect, pageData }) => {
  function renderRow(country, index) {
    const serialNo = index + 1;
    return (
      <tr key={serialNo}>
        <td>{serialNo}</td>
        <td>
          <select
            className="form-select"
            aria-label={`Country ${serialNo}`}
            name={`country${serialNo}`}
            value={pageData.countries[index]}
            onChange={(e) => onSelect(e, index)}
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
        </td>
        <td>
          <input
            className="form-check-input"
            aria-label={`Country Checkbox ${serialNo}`}
            type="checkbox"
            name={`countryCheckbox${serialNo}`}
            checked={pageData.countryCheckboxes[index]}
            onChange={(e) => onChange(e, index)}
          />
        </td>
      </tr>
    );
  }

  return (
    <>
      <h1>Page 2</h1>
      <h2>Hi {`${pageData.firstName} ${pageData.lastName}`}</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sl No.</th>
            <th scope="col">Country</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {pageData.countries.length > 0 &&
            pageData.countries.map((country, index) => {
              return renderRow(country, index);
            })}
        </tbody>
      </table>
      <Button onClick={onClick}>Save and Proceed</Button>
    </>
  );
};

export default PageTwo;
