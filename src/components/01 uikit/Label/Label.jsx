import React from "react";
import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: 17px;
  font-weight: 600;
  color: #3b3b3b;
  font-family: "Nunito Sans", sans-serif;
  text-align: left;
  /* display: block; */
  margin-left: 10px;
`;

const Label = ({ label }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
    </>
  );
};

export default Label;
