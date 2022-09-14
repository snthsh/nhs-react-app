import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import PageOne from './components/page-one';
import PageTwo from './components/page-two';
import PageThree from './components/page-three';
import './App.css';

function App() {
  const date = new Date();
  const [page, setPage] = useState('HOME');
  const [pageData, setPageData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    applicationDate: date.toLocaleDateString('en-GB'),
    countries: Array(5).fill(''),
    countryCheckboxes: Array(5).fill(false),
  });

  function handleClick() {
    setPage('PAGEONE');
  }

  function handlePageOneSave() {
    console.log('here page two');
    setPage('PAGETWO');
  }

  function handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;

    setPageData({ ...pageData, [name]: value });
  }

  function handleOnSelect(e, index) {
    const target = e.target;
    const value = target.value;
    const newCountries = [...pageData.countries];
    newCountries[index] = value;

    const newPageData = Object.assign({}, pageData, {
      countries: newCountries,
    });
    setPageData(newPageData);
  }

  function handleOnChange(e, index) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newCountryCheckboxes = [...pageData.countryCheckboxes];
    newCountryCheckboxes[index] = value;

    const newPageData = Object.assign({}, pageData, {
      countryCheckboxes: newCountryCheckboxes,
    });
    setPageData(newPageData);
  }

  function handlePageTwoSave() {
    console.log('here page three');
    setPage('PAGETHREE');
  }

  return (
    <Container>
      <h1 className="text-center">NHS React App</h1>

      {page === 'HOME' && (
        <Button onClick={() => handleClick()}>PageOne</Button>
      )}

      {page === 'PAGEONE' && (
        <PageOne
          onClick={handlePageOneSave}
          onChange={handleInputChange}
          pageData={pageData}
        />
      )}

      {page === 'PAGETWO' && (
        <PageTwo
          onClick={handlePageTwoSave}
          onChange={handleOnChange}
          onSelect={handleOnSelect}
          pageData={pageData}
        />
      )}

      {page === 'PAGETHREE' && <PageThree pageData={pageData} />}
    </Container>
  );
}

export default App;
