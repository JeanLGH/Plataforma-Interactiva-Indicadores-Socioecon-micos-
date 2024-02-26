import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: red;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #138A92;
  width: 250px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  position: relative;
  @media screen and (max-width: 768px) {
    width: ${({ sidebar }) => (sidebar ? '250px' : '0')};
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const FixedSidebar = styled.div`
  position: fixed;
  top: 80px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  @media screen and (max-width: 768px) {
    left: ${({ sidebar }) => (sidebar ? '0' : '-250px')};
  }
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#EFF2F4' }}>
        <SidebarNav sidebar={sidebar}>
          <FixedSidebar sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </FixedSidebar>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
