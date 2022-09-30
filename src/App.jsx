import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './context/jobsContext';
import Job from './components/job';
import Filter from './components/filter';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: hsl(180, 52%, 96%);
`
const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  background-image: url(/bg-header-desktop.svg);
  height: 20vh;
  width: 100vw;
  background-color: hsl(180, 29%, 50%);

  @media screen and (max-width: 600px){
    background-image: url(/bg-header-mobile.svg);
  }
`
const JobsContainer = styled.div`
  margin-top: calc(20vh + 3rem);
  /* border: solid 1px; */
  width: 80vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: 2rem 1rem 2rem 1rem;

  @media screen and (max-width: 600px){
    width: 90vw;
  }
`
const NoJobs = styled.div`
  color: hsl(180, 8%, 52%);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 1px; */
`

function App() {
  const { allJobs } = useContext(Context);

  const jobElements = allJobs.length ?
    allJobs.map((job, index) => <Job key={index} jobObj={job} />) :
    <NoJobs>There is no job matching these filters</NoJobs>

  return (
    <>
      <Page>
        <HeaderBackground />
        <Filter />
        <JobsContainer>
          {jobElements}
        </JobsContainer>
      </Page>
    </>
  )
}

export default App