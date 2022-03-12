import styled from "styled-components"

export const Sidebar = styled.aside`
  display: flex;
`
export const MainContent = styled.main``
export const Footer = styled.footer``

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 20px auto;
  width: 960px;
  background: url(/images/main-bg.jpg) repeat-y;
  overflow: hidden;
  box-shadow: 0 5px 60px 2px #baaca9;

  ${Sidebar} {
    flex-basis: 231px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${MainContent} {
    flex-grow: 1;
  }
`
