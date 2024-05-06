import React from "react";
import styled from "styled-components";
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faUserFriends, 
  faBook, 
  faHandshake, 
  faTree, 
  faMoneyBillAlt 
} from '@fortawesome/free-solid-svg-icons';

export default function TestimonialBox({ topic, author }) {
  let icon;
  switch (topic) {
    case "Salud":
      icon = faHeart;
      break;
    case "Demografía":
      icon = faUserFriends;
      break;
    case "Educación":
      icon = faBook;
      break;
    case "Seguridad":
      icon = faHandshake;
      break;
    case "Medio Ambiente":
      icon = faTree;
      break;
    case "Finanzas":
      icon = faMoneyBillAlt;
      break;
    default:
      icon = faHeart;
  }

  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <FontAwesomeIcon icon={icon} size="3x" color="#ffffff" />
      </QuoteWrapper>
      <p className="orangeColor font13" style={{alignSelf: 'flex-center'}}>
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
  transition: transform 0.3s ease;
  background-color: #003768;
  &:hover {
    transform: translateY(-5px);
  }
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: 0px;
`;
