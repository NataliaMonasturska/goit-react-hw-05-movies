import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// STYLED HOME

export const H1 = styled.h1`
  font-size: 34px;

  margin-bottom: 30px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 5px;
  object-fit: cover;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  margin: -35px;
  padding: 0;
`;
export const Li = styled.li`
  width: 300px;
  height: 525px;
  margin: 35px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 14px 25px 40px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.1);
  }
`;
export const Title = styled.p`
  text-align: center;
  line-height: 1.3;
  font-size: 20px;
`;

export const ContainerImg = styled.div`
  height: 450px;
  width: 300px;
`;
export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;
export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

// STYLED MOVIES

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 42px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
  padding-top: 0;
  padding-bottom: 0;
  box-shadow: inset 1px 1px 3px -1px rgba(0, 0, 0, 0.6);
`;
export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  border: none;
  background-color: #87cefa;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  :before {
    content: '\f002';
    font-family: FontAwesome;
    font-size: 16px;
    color: white;
  }
`;
export const Form = styled.form`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;


// STYLED MOVIE DETAILS

export const GoBack = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #87cefa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: black;
    color: #87cefa;
  }
`;
export const Container = styled.div`
  width: 100%;
`;

export const About = styled.div`
  width: 1000px;
  margin-left: 20px;
`;
export const ContainerImgAndAbout = styled.div`
  display: flex;
  margin-top: 20px;
  border: 1px solid black;
  padding: 20px;
  box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  margin-bottom: 50px;
 
`;
export const TitleDetails = styled.h2`
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Genres = styled.p`
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const GenresList = styled.ul`
  display: flex;
  padding: 0;
`;
export const Genre = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const AdditionalList = styled.ul`
  display: flex;
  padding: 0;
`;

export const AdditionalInformationContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 50px;
`;
export const ItemCastReviews = styled.li`
  font-weight: 400;
  font-size: 24px;
  :first-child {
    margin-right: 20px;
  }
`;
export const StyledLink = styled(NavLink)`
  &.active {
    color: #dc143c;
  }
`;
export const Loader = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  width:100%;
  flex-direction: column;
`;

// STYLED CAST

export const ContainerTitleCast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 75px;
`;

// STYLED REVIEWS

export const TitleReview = styled.h3`
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 29px;
`;
// SHARED LAYOUT

export const StyledLinkHeader = styled(NavLink)`
  font-size: 28px;
  :first-child {
    margin-right: 20px;
  }
  &.active {
    color: #dc143c;
  }
`;
export const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #87cefa;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 110px;
  height: 100%;
  width:1600px;
`;
