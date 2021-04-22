import React from 'react';
import { Headar, Banner, Row } from './components';
import request from "./config/request"
import './App.css';

function App() {

  return (
    <div className="App">
      <Headar />
      <Banner />
      <Row
        isLargeRow={true}
        title="Netflix Movie"
        fetchUrl={request.fetchNetFlixOriginals}
      />
      <Row
        title="Tranding Now"
        fetchUrl={request.fetchTrending}
      />

      <Row
        title="Top rated"
        fetchUrl={request.fetchTopRated}
      />

      <Row
        title="Action Movies"
        fetchUrl={request.fetchTrending}
      />

      <Row
        title="Commedy Movies"
        fetchUrl={request.fetchComedyMovies}
      />

      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorroMovies}
      />

      {/* <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanticMovies}
      />

      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
      /> */}

    </div>
  );
}


export default App;
