import React from "react";
import { dataSearchListItem } from "../data/SearchListItem_data";
import { AiFillStar, AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import {
  Container,
  Left,
  ImageCon,
  Position,
  RoomInfo,
  Right,
  Rate,
  Price,
  SearchListCon,
  Info,
} from "../styles/SearchList_styled";
import { useGlobalContext } from "../context/context";

function SearchList({ stay, adult, children, destination }) {
  const { user } = useGlobalContext();

  return (
    <SearchListCon>
      <h2>
        {destination}: {dataSearchListItem.length} properties found
      </h2>
      {dataSearchListItem.map((item, idx) => {
        const {
          image,
          title,
          position,
          rate,
          infoBed,
          infoUtility,
          level,
          reviews,
          location,
          price,
        } = item;
        return (
          <Container key={idx}>
            <Left>
              <ImageCon>
                <img src={image} />
                <AiOutlineHeart />
              </ImageCon>
              <Info>
                <h3>
                  {title}
                  <span>
                    {Array(rate?.star)
                      .fill()
                      .map((icon, idx) => (
                        <AiFillStar key={idx} />
                      ))}
                  </span>
                </h3>
                {position.map((val, i) => (
                  <Position key={i}>
                    <li>{val.city}</li>
                    <li>{val.beach}</li>
                    <li>{val.distance}</li>
                    <li>{val.travel}</li>
                  </Position>
                ))}
                <RoomInfo>
                  {infoBed.map((val, idx) => (
                    <ul key={idx}>
                      <li>{val.beds}</li>
                      <li>{val.bedAmount}</li>
                    </ul>
                  ))}
                  {infoUtility.map((val, idx) => (
                    <h4 key={idx}>{val}</h4>
                  ))}
                </RoomInfo>
              </Info>
            </Left>
            <Right>
              <Rate>
                <div>
                  <span>
                    {level} <p> {reviews} reviews</p>
                  </span>
                  <button>{rate?.rating}</button>
                </div>
                <h3>location {location}</h3>
                <span>
                  {Array(rate?.star)
                    .fill()
                    .map((icon, idx) => (
                      <AiFillStar key={idx} />
                    ))}
                </span>
              </Rate>
              <Price>
                <p>
                  {user
                    ? `${stay}-night ${adult}-adult ${children}-children`
                    : "You are not sign in"}
                </p>
                <h3>{user && `THB ${price}`}</h3>
                <button>
                  {user ? (
                    <>
                      See availiablility <AiOutlineRight />
                    </>
                  ) : (
                    "Show prices"
                  )}
                </button>
              </Price>
            </Right>
          </Container>
        );
      })}
    </SearchListCon>
  );
}

export default SearchList;
