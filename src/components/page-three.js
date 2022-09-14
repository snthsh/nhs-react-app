const PageThree = ({ pageData }) => {
  function renderCountryRow(pageData) {
    const countries = pageData.countries;
    return countries.map((country, index) => {
      const serialNo = index + 1;
      if (pageData.countryCheckboxes[index]) {
        return (
          <tr key={serialNo}>
            <th>Country {serialNo}</th>
            <td>{pageData.countries[index]}</td>
          </tr>
        );
      }
    });
  }

  return (
    <>
      <h1>PageThree</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{pageData.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{pageData.lastName}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{pageData.country}</td>
          </tr>
          <tr>
            <th>Application Date</th>
            <td>{pageData.applicationDate}</td>
          </tr>
          {renderCountryRow(pageData)}
        </tbody>
      </table>
    </>
  );
};

export default PageThree;
