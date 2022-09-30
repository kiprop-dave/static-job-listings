import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/jobsContext';
import Tag from './tag';

const Container = styled.div`
    position: absolute;
    top: 15vh;
    width: 80vw;
    min-height: 3rem;
    z-index: 2;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    padding: 0 1% 0 1%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px){
        width: 90vw;
    }
`
const FilterBy = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
`
const FilterByText = styled.h5`
    color: hsl(180, 8%, 52%);
    width: 6%;

    @media screen and (max-width: 600px){
        width: 15%;
    }
`
const TagsContainer = styled.div`
    width: 100%;
    display: flex;
    overflow: scroll;
    margin-bottom: 5px;
    /* border: solid 1px; */
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    /* border: solid 1px; */
`
const RemoveIcon = styled.div`
    width: 2rem;
    height: 1.5rem;
    border-radius: 0 5px 5px 0;
    background-color: black;
    background-image: url(/icon-remove.svg);
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`
const Clear = styled.h4`
    color: hsl(180, 8%, 52%);
    margin-left: auto;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`


function Filter() {
    const { filterAllJobs, clearFilters, removeFilter } = useContext(Context);
    const roles = ['Frontend', 'Fullstack', 'Backend'];
    const levels = ['Senior', 'Midweight', 'Junior'];
    const languages = ['HTML', 'CSS', 'JavaScript', 'Python', 'Ruby'];
    const tools = ['React', 'Sass', 'Ruby', 'RoR', 'Vue', 'Django'];
    const filterArray = [...roles, ...levels, ...languages, ...tools];
    const [userFilters, setUserFilters] = useState([]);

    const hasFiltered = userFilters.length > 0;

    function filterJobs(filter) {
        const alreadyFiltered = userFilters.some(item => item === filter);
        if (!alreadyFiltered) {
            setUserFilters(prev => [...prev, filter]);
            filterAllJobs(filter);
        }
    }

    function removeAFilter(filter) {
        const _userFilters = [...userFilters];
        const fIndex = _userFilters.findIndex(item => item === filter);
        _userFilters.splice(fIndex, 1);
        setUserFilters(_userFilters);
        if (userFilters.length === 1) {
            clearAllFilters()
        }

        removeFilter(_userFilters);
    }


    function clearAllFilters() {
        clearFilters()
        setUserFilters([]);
    }

    const tagElements = filterArray.map((tag, index) => {
        return (
            <Tag key={index} text={tag} right={'3px'} action={filterJobs} />
        )
    })

    const filterElements = userFilters.map((filter, index) => {
        return (
            <FilterContainer key={index}>
                <Tag text={filter} right={'3px'} radius={'3px 0 0 3px'} />
                <RemoveIcon onClick={() => removeAFilter(filter)} />
            </FilterContainer>
        )
    })

    return (
        <>
            <Container>
                <FilterBy>
                    <FilterByText>Filter by: </FilterByText>
                    <TagsContainer>
                        {tagElements}
                    </TagsContainer>
                </FilterBy>
                {
                    hasFiltered &&
                    <TagsContainer>
                        <FilterByText>Tags: </FilterByText>
                        <TagsContainer>
                            {filterElements}
                        </TagsContainer>
                        <Clear onClick={() => clearAllFilters()}>Clear</Clear>
                    </TagsContainer>
                }
            </Container>
        </>
    )
}

export default Filter