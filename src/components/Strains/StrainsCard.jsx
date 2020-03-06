import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import styled from 'styled-components';
import Image from '../../img/sample_img.jpg';

const NewCard = styled(Card)`
  width: 30%;
  margin: 1%;
`;

const NewDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrowseButton = styled.button`
  width: 30%;
  color: white;
  background-color: #2f5973;
`;

const StrainsCard = (props) => {
    return (
        <NewDiv >
          {props.strain.map((elem, i) => (
          <NewCard key={i}>
            <Link to={`/strains/${elem.id}`}>
            <CardImg top width="100%" src={Image} alt={elem.name} />
            </Link>
            <NewCardBody>
              <CardTitle>Strain: {elem.name}</CardTitle>
              <CardSubtitle>Indica/Sativa/Hybrid: {elem.species}</CardSubtitle>
              <CardText>Flavors: Sweet,Pine,Woody</CardText>
              <CardText>Effects: Relaxed,Euphoric,Happy,Creative,Uplifted</CardText>
              <CardText>Description: The commonsense cross of White Nightmare and Girl Scout Cookies, Nightmare Cookies is a hybrid strain that locks the consumer to the couch while delivering robust, uplifting euphoria. Nightmare Cookies exhibits beautiful purple hues, bright orange pistils, and an aroma that is thick with pine sap, earth, and sweetness. Enjoy this strain toward the end of the day to capitalize on its relaxing effects, appetite stimulation, and overall sedation.</CardText>
            </NewCardBody>
          <BrowseButton type='button'> Add To Favorites</BrowseButton>
          <BrowseButton type='button'>Share</BrowseButton>
          </NewCard>
          ))}
        </NewDiv>
      );
};

export default StrainsCard;