import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function SimpleAccordion({ fish }) {
    
  function createMarkup(prop) {
    return { __html: prop };
  }

  function MyComponent({ prop }) {
    return <div dangerouslySetInnerHTML={ createMarkup(prop) } />;
  }
  console.log(fish);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Biology</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent prop={fish.Biology}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Habitat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent prop={fish.Habitat}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent className='DSIH-data' prop={fish.Color}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fishery Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent className='DSIH-data' prop={fish['Fishery Management']}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent className='DSIH-data' prop={fish.Location}/>
            <p>NOAA Fishery locations: {fish['NOAA Fisheries Region']}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sustainability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='sustainability'>
              <p>{fish.Quote}</p>
              <MyComponent className='DSIH-data' prop={fish.Harvest}/>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Flavor Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent className='DSIH-data' prop={fish.Taste}/>
            <MyComponent className='DSIH-data' prop={fish.Texture}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyComponent className='DSIH-data' prop={fish.Availability}/>
          </Typography>
        </AccordionDetails>
      </Accordion>      
    </div>
  );
}
//more data?


