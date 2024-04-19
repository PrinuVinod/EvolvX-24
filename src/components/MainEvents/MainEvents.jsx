import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";

const MainEvents = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  // Filter events for internal and external categories
  const eVents = eventsData.filter((event) => event.category === "Events");
  const funzoneEvents = eventsData.filter((event) => event.category === "Fun Zone");
  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Events</h1>
        <div className={classes.events_container}>
          <section>
            <div className={classes.events_container}>
              {eVents.map((eventData, i) => {
                return <EventCard eventData={eventData} key={i} />;
              })}
            </div>
          </section>
          <section>
            <h2>Fun Zone</h2>
            <div className={classes.events_container}>
              {funzoneEvents.map((eventData, i) => {
                return <EventCard eventData={eventData} key={i} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainEvents;
