import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSocial = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  margin-right: 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.main.text};
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Social = ({ children }) => {
  return (
    <StyledSocial>
      {children}
    </StyledSocial>
  )
};

Social.propTypes = {
  children: PropTypes.any
};

export default Social;
export { SocialLink };
