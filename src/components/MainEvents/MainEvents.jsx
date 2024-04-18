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
  const internalEvents = eventsData.filter((event) => event.category === "Internal");
  const externalEvents = eventsData.filter((event) => event.category === "External");
  const funzoneEvents = eventsData.filter((event) => event.category === "Fun Zone");
  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Events</h1>
        <div className={classes.events_container}>
          <section>
            <h2>External Events</h2>
            <div className={classes.events_container}>
              {externalEvents.map((eventData, i) => {
                return <EventCard eventData={eventData} key={i} />;
              })}
            </div>
          </section>
          <section>
            <h2>Internal Events</h2>
            <div className={classes.events_container}>
              {internalEvents.map((eventData, i) => {
                return <EventCard eventData={eventData} key={i} />;
              })}
            </div>
          </section>
          <section>
            <h2>Fuz Zone</h2>
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
