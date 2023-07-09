import styled from "styled-components";
// import Imagecarback from '../../../assets/carbackground.png';
// import Comfort from '../../../assets/comfort.png'

export const PriceAidal = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
`;
export const ImageDivCar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* background-image: url({$Imagecarback});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 626px;
height: 381px; */
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  background: #fff;
  width: 600px;
  height: 360px;

  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
export const FirstAidalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  h2 {
    color: #000;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h1 {
    color: #006dab;
    font-family: Montserrat;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    justify-content: space-evenly;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const LineAidal = styled.div`
  display: flex;
  width: 560px;
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
`;

export const ComfortAllDivLorem = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    width: 533px;
    height: 169px;
    flex-direction: column;
    flex-shrink: 0;
    color: #373737;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    h1 {
      color: var(--text, #373737);
      font-family: Montserrat;
      font-size: 35px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
export const ComfortImage = styled.div`
  display: flex;
  img {
    width: 683px;
    height: 477px;
    flex-shrink: 0;
  }
`;
export const Buttondiv = styled.data`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  button {
    width: 180px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #006dab;
    color: #006dab;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
  button:hover {
    color: white;
    border-radius: 10px;
    background: var(--blue, #006dab);
  }
`;
export const AdditionalInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 60px;
  background: rgba(0, 109, 171, 0.2);
  div {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  div:hover {
    cursor: pointer;
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    height: 60px;
    width: 150px;
    flex-shrink: 0;
    background-color: #006dab;
  }
`;