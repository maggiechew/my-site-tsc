import React, { FC } from 'react';
import { Typography, Button } from '@mui/material';

// export function Header(props: any) {
//   return (
//     <div>

//     </div>
//   )
// }

// import { FC } from 'react';

export const Header: FC<{
  chooseContent: string;
  setChooseContent: React.Dispatch<React.SetStateAction<string>>;
}> = (props): JSX.Element => {
  //   const dog = props.thing;
  return (
    <div className="nav">
      <Button id={'About'} variant="outlined" onClick={() => {
        props.setChooseContent("About")
      }}>
        <Typography>About</Typography>
      </Button>
      <Button id={'Projects'} variant="outlined" onClick={() => {
        props.setChooseContent("Projects")
      }}>
        <Typography>Projects</Typography>
      </Button>
      <Button id={'Contact'} variant="outlined" onClick={() => {
        props.setChooseContent("Contact")
      }}>
        <Typography>Contact Me</Typography>
      </Button>
    </div>
  );
};

// export default MyThing;
