import styled from 'styled-components';

export const ThumbnailsStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
`;

export const ThumbnailStyled = styled.li`
  background-position: center;
  background-size: cover;
  flex: 1 0 240px;
  height: 160px;
`;
