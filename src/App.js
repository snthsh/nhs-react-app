import { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

import PageOne from './components/page-one';
import PageTwo from './components/page-two';
import PageThree from './components/page-three';
import './App.css';

function App() {
  const [page, setPage] = useState('HOME');
  const [pageData, setPageData] = useState({
    firstName: '',
    lastName: '',
    countryOne: '',
  });

  function handleClick() {
    setPage('PAGEONE');
  }

  function handlePageOneSave() {
    console.log('here page two');
    setPage('PAGETWO');
  }

  function handlePageOneChange(e) {
    const name = e.target.name;
    const target = e.target;
    const value = target.value;

    setPageData({ ...pageData, [name]: value });
  }

  function handlePageTwoClick() {
    console.log('here page three');
    setPage('PAGETHREE');
  }

  function handlePageTwoChange(e) {
    const name = e.target.name;
    const target = e.target;
    const value = target.value;

    setPageData({ ...pageData, [name]: value });
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
          onChange={handlePageOneChange}
          pageData={pageData}
        />
      )}

      {page === 'PAGETWO' && (
        <PageTwo
          onClick={handlePageTwoClick}
          onChange={handlePageTwoChange}
          pageData={pageData}
        />
      )}

      {page === 'PAGETHREE' && <PageThree />}
    </Container>
  );
}

export default App;
