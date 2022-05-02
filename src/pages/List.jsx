import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Header from "../components/Header";
import SearchList from "../components/SearchList";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/context";
import {
  ListCon,
  SearchCon,
  SearchItem,
  Span,
  Label,
  Icon,
  Search,
} from "../styles/List_styled";

function List() {
  const { user } = useGlobalContext();
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options);
  const [showSearch, setShowSearch] = useState(false);

  const stDate = date[0].startDate.getTime();
  const enDate = date[0].endDate.getTime();
  const diffTime = enDate - stDate;
  const stay = diffTime / (1000 * 3600 * 24);

  return (
    <>
      <Header display="none" />
      <ListCon>
        <button onClick={() => setShowSearch(!showSearch)}>
          {showSearch ? <MdClose /> : <AiOutlineSearch />}
        </button>
        <SearchCon showSearch={showSearch}>
          <h2>Search</h2>
          <SearchItem>
            <Label htmlFor="name">Destination:</Label>
            <Span>
              <Icon>{AiOutlineSearch}</Icon>
              <input type="text" placeholder={destination} />
            </Span>
          </SearchItem>
          <SearchItem>
            <Label htmlFor="checkin-date">Check-in Date:</Label>
            <Span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              "dd MMMM yyyy"
            )}`}</Span>
            <Label htmlFor="checkout-date">Check-out Date:</Label>
            <Span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].endDate,
              "dd MMMM yyyy"
            )}`}</Span>
          </SearchItem>
          {openDate && (
            <DateRange
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
            />
          )}
          <SearchItem>
            <Label htmlFor="options">{stay}-nights stay:</Label>
            <div>
              <label htmlFor="options">Adult</label>
              <input type="number" min={1} placeholder={options.adult} />
              <label htmlFor="options">Children</label>
              <input type="number" min={0} placeholder={options.children} />
              <label htmlFor="options">Room</label>
              <input type="number" min={1} placeholder={options.room} />
            </div>
          </SearchItem>
          <Search>Search</Search>
        </SearchCon>
        <SearchList
          stay={stay}
          adult={options.adult}
          children={options.children}
          destination={destination}
          user={user}
        />
      </ListCon>
      <Footer />
    </>
  );
}

export default List;
