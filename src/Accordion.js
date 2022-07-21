import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


//eslint-disable
export default function SimpleAccordion({ fish }) {
    
  function createMarkup(prop) {
    return { __html: prop };
  }

  function MyComponent({ prop }) {
    return <div dangerouslySetInnerHTML={ createMarkup(prop) } />;//eslint-disable-line
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
          <MyComponent prop={fish.Biology}/>
          
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
          <MyComponent prop={fish.Habitat}/>
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
          <MyComponent className='DSIH-data' prop={fish.Color}/>
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
          <MyComponent className='DSIH-data' prop={fish['Fishery Management']}/>
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
          <MyComponent className='DSIH-data' prop={fish.Location}/>
          <p>NOAA Fishery locations: {fish['NOAA Fisheries Region']}</p>
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
          <p>{fish.Quote}</p>
          <MyComponent className='DSIH-data' prop={fish.Harvest}/>
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
          <MyComponent className='DSIH-data' prop={fish.Taste}/>
          <MyComponent className='DSIH-data' prop={fish.Texture}/>
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
          <MyComponent className='DSIH-data' prop={fish.Availability}/>
        </AccordionDetails>
      </Accordion>      
    </div>
  );
}
//more data?



