import React, { useState } from "react";
import { MdCardTravel } from "react-icons/md";
import {
  RiHotelBedFill,
  RiFlightTakeoffFill,
  RiCarFill,
  RiTaxiLine,
  RiCalendarTodoFill,
} from "react-icons/ri";
import { ImManWoman } from "react-icons/im";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  HeaderCon,
  ImageCon,
  ImageBg,
  Content,
  Info,
  Input,
  Title,
  HeaderSearch,
  HeaderSearchItem,
  Span,
  OptionsCon,
  OptionChoice,
  Buttons,
  Button,
} from "../styles/Header_styled";

function Header({ display, error }) {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((pre) => {
      return {
        ...pre,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSubmit = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <HeaderCon>
      <ImageCon>
        <ImageBg src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <Content>
          <Title>
            {error === "error"
              ? "Page is not found"
              : `A lifetime of discounts? It's Genius.`}
          </Title>
          <Info>
            {error !== "error" &&
              `Get rewarded for your travels-unlock instact savings of 10% or more
            with a free Booking.com account`}
          </Info>
          {display !== "none" && (
            <Buttons>
              <Button>
                <RiHotelBedFill />
                stays
              </Button>
              <Button>
                <RiFlightTakeoffFill />
                flights
              </Button>
              <Button>
                <RiCarFill />
                car rentals
              </Button>
              <Button>
                <MdCardTravel />
                attractions
              </Button>
              <Button>
                <RiTaxiLine />
                airport taxis
              </Button>
            </Buttons>
          )}
        </Content>
      </ImageCon>
      {display !== "none" && (
        <HeaderSearch onSubmit={handleSubmit}>
          <HeaderSearchItem>
            <Span>
              <RiHotelBedFill />
              <Input
                type="text"
                required
                placeholder="Where are you going?"
                onChange={(e) => setDestination(e.target.value)}
              />
            </Span>
          </HeaderSearchItem>
          <HeaderSearchItem>
            <Span onClick={() => setOpenDate(!openDate)}>
              <RiCalendarTodoFill />
              <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  className="date"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </Span>
          </HeaderSearchItem>
          <HeaderSearchItem>
            <Span onClick={() => setOpenOptions(!openOptions)}>
              <ImManWoman />
              {`${options.adult} adult ${options.children} children ${options.room} room`}
            </Span>
            {openOptions && (
              <OptionsCon>
                <OptionChoice>
                  <span>Adult</span>
                  <div>
                    <button onClick={() => handleOption("adult", "increase")}>
                      +
                    </button>
                    <span>{options.adult}</span>
                    <button
                      onClick={() => handleOption("adult", "decrease")}
                      disabled={options.adult === 1}
                    >
                      -
                    </button>
                  </div>
                </OptionChoice>
                <OptionChoice>
                  <span>Children</span>
                  <div>
                    <button
                      onClick={() => handleOption("children", "increase")}
                    >
                      +
                    </button>
                    <span>{options.children}</span>
                    <button
                      onClick={() => handleOption("children", "decrease")}
                      disabled={options.children === 0}
                    >
                      -
                    </button>
                  </div>
                </OptionChoice>
                <OptionChoice>
                  <span>Room</span>
                  <div>
                    <button onClick={() => handleOption("room", "increase")}>
                      +
                    </button>
                    <span>{options.room}</span>
                    <button
                      onClick={() => handleOption("room", "decrease")}
                      disabled={options.room === 1}
                    >
                      -
                    </button>
                  </div>
                </OptionChoice>
              </OptionsCon>
            )}
          </HeaderSearchItem>
          <HeaderSearchItem>
            <Button type="submit">Search</Button>
          </HeaderSearchItem>
        </HeaderSearch>
      )}
    </HeaderCon>
  );
}

export default Header;
