import { styled } from "styled-components";
import { Pagination } from 'antd';
export const TCardsSection = styled.div`
    background-color: var(--bg-primary);
    font-size: 14px;
`
export const Container = styled.div`
    padding: 5em 0.5em;
    max-width: 1240px;
    margin: 0 auto;

  
`
export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
`

export const SPagination = styled(Pagination)`
 
    margin-top: 2em;
    display: flex;
    justify-content: center;
    
`