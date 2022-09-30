import React from 'react';
import styled from 'styled-components';
import Tag from './tag';

const JobContainer = styled.div`
    width: 100%;
    height: 18vh;
    margin-bottom: 1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    border-left: ${({ newNFeatured }) => newNFeatured ? 'solid 5px hsl(180, 29%, 50%)' : 'none'};
    display: flex;
    align-items: center;
    padding: 3px 2% 2px 2%;
    
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
        height: fit-content;
    }
`
const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`
const JobDetails = styled.div`
    height: 5rem;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;

    @media screen and (max-width: 600px){
        margin-left: 0;
        width: 100%;
    }
`
const Details = styled.div` // has company name and new/featured
    font-weight: 600;
    color: hsl(180, 8%, 52%);
    display: flex;
`
const UtilDiv = styled.div`
    color: ${({ color }) => color ? color : 'black'};
    border-radius: ${({ radius }) => radius ? radius : 'none'};
    background-color: ${({ background }) => background ? background : 'white'};
    margin-left: ${({ left }) => left ? left : 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    font-size: 12px;
`
const JobPosition = styled.h3`
    color: black;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    width: fit-content;

    &:hover{
        color: hsl(180, 8%, 52%);
    }
`
const Separator = styled.div`
    width: 100%;
    display: none;
    border-bottom: solid 1px lightgray;
    height: 1px;
    margin-top: 1rem;

    @media screen and (max-width: 600px){
        display: block;
    }
`
const JobLogistics = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: hsl(180, 8%, 52%);

    @media screen and (max-width: 600px){
        width: 60%;
    }
`
const DotSeparator = styled.div`
    width: 1px;
    height: 1px;
    border: solid 1px;
    border-radius: 50%;
`
const TagsContainer = styled.div`
    height: 5rem;
    width: 40%;
    margin-left: auto;
    padding: 0 1% 0 1%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px){
        margin-left: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(30px, 1fr));
    }
`

function Job({ jobObj }) {
    const {
        id, company, logo, New, featured, position, role, level, postedAt, contract,
        location, languages, tools
    } = jobObj;

    const jobTags = [role, level, ...languages, ...tools];

    const newAndFeatured = New && featured; // check if the job is new and featured

    const tagElements = jobTags.map((tag, index) => {
        return (
            <Tag key={index} text={tag} radius={'5px'} bgColor={'white'} bgHover={'hsl(180, 8%, 52%)'} />
        )
    })

    return (
        <>
            <JobContainer newNFeatured={newAndFeatured}>
                <Logo src={logo} alt='logo' />
                <JobDetails>
                    <Details>
                        {company}
                        {
                            New &&
                            <UtilDiv background={'hsl(180, 29%, 50%)'} color={'white'} left={'1rem'}
                                radius={'15px'}>
                                NEW!
                            </UtilDiv>
                        }
                        {
                            featured &&
                            <UtilDiv background={'hsl(180, 14%, 20%)'} color={'white'} left={'1rem'}
                                radius={'15px'}>
                                FEATURED
                            </UtilDiv>
                        }
                    </Details>
                    <JobPosition>
                        {position}
                    </JobPosition>
                    <JobLogistics>
                        {postedAt}
                        <DotSeparator />
                        {contract}
                        <DotSeparator />
                        {location}
                    </JobLogistics>
                </JobDetails>
                <Separator />
                <TagsContainer>
                    {tagElements}
                </TagsContainer>
            </JobContainer>
        </>
    )
}

export default Job