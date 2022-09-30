import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2% 0 2%;
    margin-right: ${({ right }) => right ? right : 'auto'};
    background-color: hsl(180, 52%, 96%);
    border-radius: ${({ radius }) => radius ? radius : 'none'};
    color: hsl(180, 8%, 52%);
    font-weight: 600;
    cursor: pointer;
    /* border: solid 1px; */

    &:hover{
        color: ${({ bgColor }) => bgColor ? bgColor : 'none'};
        background-color: ${({ bgHover }) => bgHover ? bgHover : 'none'};
    }
`

function Tag({ text, action, right, radius, bgHover, bgColor }) {

    return (
        <>
            <Container right={right} radius={radius} bgColor={bgColor} bgHover={bgHover}
                onClick={() => action && action(text)}>
                {text}
            </Container>
        </>
    )
}

export default Tag