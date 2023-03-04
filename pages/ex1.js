import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    
    .btn {
        margin: 0 8px;
    }
`


const Homepage = () => {
    const [count, setCount] = useState(0);
    return (
        <StyledWrapper>

            <button className="btn" onClick={() => { setCount(count - 1) }}><span>-</span></button>
            <span> Count : {count} </span>
            <button className="btn" onClick={() => { setCount(count + 1) }}><span>+</span></button>

        </StyledWrapper>
    )
}
export default Homepage;