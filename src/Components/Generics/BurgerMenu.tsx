import React, { useState } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colours from '@utils/colours';

const StyledBurgerMenu = styled.div`
  position: absolute;
  z-index: 1000000;

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${colours.white};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${colours.black};
  }

  /* General sidebar styles */
  .bm-menu {
    background: linear-gradient(180deg, ${colours.mid}, ${colours.white});
    background-gradient: transparent;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    a {
        text-decoration: none;
        color: ${colours.black};
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 2px;
    }
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${colours.mid};
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
  text-decoration: none;
  display: flex;
  font-size: 18px;
  height: 2.4rem;
  margin: 0 20px ;
  white-space: nowrap;
  `;

const Backing = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
  `;


const BurgerMenuComponent = (props: {links: Array<{ name: string, to: string }>}) => {
    const { links } = props;
    const [menuOpenState, setMenuOpenState] = useState(false)

    const closeMenu = () => {
        setMenuOpenState(false)
    }

    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={link.name} onClick={closeMenu}><Link to={link.to}>{link.name}</Link></Li>);
    return (
      <StyledBurgerMenu>
        <BurgerMenu isOpen={menuOpenState} onStateChange={(state) => setMenuOpenState(state.isOpen)}>
          <NavLinks />
        </BurgerMenu>
      </StyledBurgerMenu>
      )
    };

export default BurgerMenuComponent;