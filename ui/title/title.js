import styled from 'styled-components';

const Title = styled.h1
`
   font-size: 2rem;
   font-weight:600;
   color:#272738; 
   `
  



const TitleAndTagLine = styled.header`

   & :first-child{
      font-size: 2rem;
   font-weight:600;
   color:#272738; 
   }
   & :last-child{
      font-size:14px;
   }`

 


export{ Title, TitleAndTagLine}