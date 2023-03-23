import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import { timelineElements } from "../data";
import "./testimonial.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function Testimonials() {
  let workIconStyles = { background: "#4b0082" };
  let schoolIconStyles = { background: "#4b0082" };
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Experience
        </h1>
        {/* <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Secondary</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>Success</TimelineContent>
          </TimelineItem>
        </Timeline> */}
        <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
    </section>
  );
}
