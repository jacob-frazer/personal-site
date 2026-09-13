import React, { useState } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colours from '@utils/colours';

// a solid sticky bar holds the burger button, so the button never sits on top of page content
const StyledBurgerMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000000;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colours.black};

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 32px;
    height: 26px;
    left: 1.25rem;
    top: 1.2rem;
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
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    a {
        text-decoration: none;
        color: ${colours.black};
        font-size: 1.5rem;
        font-weight: 400;
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

const Brand = styled(Link)`
  color: ${colours.white};
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
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

// defined outside the menu component so the links aren't remounted on every render
const NavLinks = (props: { links: Array<{ name: string, to: string }>, onLinkClick: () => void }) => (
    <>
      {props.links.map((link) => <Li key={link.name} onClick={props.onLinkClick}><Link to={link.to}>{link.name}</Link></Li>)}
    </>
);

const BurgerMenuComponent = (props: {
    brand: { name: string, to: string },
    links: Array<{ name: string, to: string }>
    }) => {
    const { brand, links } = props;
    const [menuOpenState, setMenuOpenState] = useState(false)

    const closeMenu = () => {
        setMenuOpenState(false)
    }

    return (
      <StyledBurgerMenu>
        <BurgerMenu isOpen={menuOpenState} onStateChange={(state) => setMenuOpenState(state.isOpen)}>
          <NavLinks links={links} onLinkClick={closeMenu} />
        </BurgerMenu>
        <Brand to={brand.to}>{brand.name}</Brand>
      </StyledBurgerMenu>
      )
    };

export default BurgerMenuComponent;
