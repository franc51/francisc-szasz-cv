import React from "react";
import "./Faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="faq_container" id="faq">
      <div className="faq_title">
        <h2>FAQ</h2>
      </div>
      <div className="faq_accordions">
        <Accordion className="ac">
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <p className="text_size">
              <strong>
                Can we collaborate with you for developing a web application?
              </strong>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text_size">
              I'm open to all collaborations, we can discuss details at
              francisc_szasz@yahoo.com
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="ac">
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <p className="text_size">
              <strong>What do i get in exchange for your expertise?</strong>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text_size">
              I can break down complex problems, evaluate options quickly, and
              summarize best practices — whether it's performance optimization,
              architecture decisions, or library/framework selection - put
              simply: I will help you spend more time creating, and less time
              wrestling with technical traps.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="ac">
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <p className="text_size">
              <strong>What is the price for your expertise?</strong>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text_size">
              My rate is $2000 / month for large scale projects. For shorter
              commitments (1-day project / under 1 month of commitment) - $100/
              day. In terms of salary, $1000-1700 / month.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="ac">
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <p className="text_size">
              <strong>How can you impact my team?</strong>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text_size">
              Because being a mentor is my final goal, I believe that in
              addition to delivering exceptional technical expertise, my role
              should be centered around less experienced people in the team or
              people that have difficulties in the project so that I can help
              them become a better asset for the team. My wish is that when it
              finally comes the time to leave the team, I leave the team a
              better place than when I came.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="ac">
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <p className="text_size">
              <strong>When do we start working together?</strong>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text_size">
              Whenever I am not engaged in other commitments and my schedule
              allows it. I usually prefer and prioritise long term commitments
              (minimum 6 months - 1 year).
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
