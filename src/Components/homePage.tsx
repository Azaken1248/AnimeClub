// import React from 'react'
import IconDescription from "./IconDescription.tsx";
//import Description from "./Description.tsx";
//import SummaryShortcuts from "./SummaryShortcuts.tsx";
// import Rohan from './TransalateButton.tsx';

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
const HomePage = ({ setCurrentPage }: Props) => {
  return (
    <>
      <IconDescription></IconDescription>
    </>
  );
};

export default HomePage;
