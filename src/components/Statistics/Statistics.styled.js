import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(8)};
   width: 400px;
   border-radius: ${props => props.theme.radii.md};
   display: flex;
   flex-direction: column;
   align-items: center;
   /* padding-top: ${props => props.theme.spacing(4)}; */
   /* padding: ${props => props.theme.spacing(5)}; */
   background-color: ${props => props.theme.colors.white};
`

export const Title = styled.h2`
   margin: ${props => props.theme.spacing(4)} auto ${props => props.theme.spacing(3)};
   font-size: 32px;
`

export const List = styled.ul`
   display: flex;
  flex-direction: column;
   /* justify-content: center; */
   /* column-gap: -1px; */
   padding: 0;
   width: 100%;
`

export const ListItem = styled.li`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: center; */
  gap: ${props => props.theme.spacing(2)};
  margin: 0;  
  padding: ${props => props.theme.spacing(2)};
  /* width: 100px; */
  width: calc(100% / 5);
`

export const Label = styled.span`
   color: ${props => props.theme.colors.black};
`

export const Percent = styled.span`
   font-weight: 700;
   color: ${props => props.theme.colors.black};
`
