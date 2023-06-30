import Link from "next/link";
import { styled } from "styled-components";

export const SectionFooter = styled.section`
  background-color: var(--bg-primary);
`;
export const FooterLogo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4em;

  gap: 10px;

  p {
    color: var(--text-color);
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0.5em;
  max-width: 1240px;
  margin: 0 auto;

  p {
    font-size: 18px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    margin-top: 2em;
    color: var(--text-color);

    span {
      color: var(--text-bold);
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 680px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    
    p {
      margin-top: 1em;
      font-size: 16px;
    }
  }
`;

export const ListSocialMedia = styled.li`
  display: flex;
  gap: 10px;
`;

export const LinkSocialMidia = styled(Link)`
  color: var(--text-color);
  padding: 0.5em;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  transition: all 0.2s linear;

  &:hover {
    color: var(--bg-primary);
    background-color: var(--link-hover);
  }

  svg {
    font-size: 25px;
  }
`;
export const FooterCopy = styled.div`
  padding: 2em 0.5em;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--color-contrast);
  }
  p {
    font-size: 12px;
  }

  span {
    color: var(--color-contrast);
  }

  @media only screen and (max-width: 680px) {
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 10px;
    }
  }
`;
export const ListFooter = styled.div`
  li {
    cursor: pointer;
    &:hover {
        color: var(--color-contrast);
    }
  }
`;
