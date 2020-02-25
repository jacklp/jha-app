import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'


function Prints({prints}) {

  function renderImages(record) {
    return record.images.map((image, i) => <div key={i}> <img alt={record.title} src={image.baseimageurl} /><p className="legend">Legend 1</p></div>)
  }

  function slider(record) {
    return <div>
      <Title>{record.title}</Title>
      <Carousel>{renderImages(record)}</Carousel>
    </div>
  }

  function renderItems() {
    return prints.data.records.map((record, i) => <li key={i}>{slider(record)}</li>)
  }

  return (
      <div>
        <h1>Page: {prints.data.info.page}</h1>
        <Ul>
          { renderItems() }
        </Ul>
      </div>
  )
}

// STYLES

const Ul = styled.ul`
    list-style-type: none;
    padding: 0px;
  `;

const Title = styled.h4`
    text-align: left;
    padding-left: 12px;
  `;


export default Prints;
