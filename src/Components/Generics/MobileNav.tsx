import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Connections from '@generics/Connections';

import colours from '@utils/colours';

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  background-color: ${colours.black};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `;

const Brand = styled(Link)`
  color: ${colours.white};
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  `;

// three bars that rotate into a cross while the menu is open
const MenuButton = styled.button<{ $open: boolean }>`
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  margin-right: -0.6rem;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    position: absolute;
    left: 0.6rem;
    width: 1.55rem;
    height: 2px;
    border-radius: 2px;
    background-color: ${colours.white};
    transition: transform 0.25s ease, opacity 0.2s ease;
  }
  span:nth-child(1) {
    top: 0.85rem;
    transform: ${props => props.$open ? 'translateY(0.5rem) rotate(45deg)' : 'none'};
  }
  span:nth-child(2) {
    top: 1.35rem;
    opacity: ${props => props.$open ? 0 : 1};
  }
  span:nth-child(3) {
    top: 1.85rem;
    transform: ${props => props.$open ? 'translateY(-0.5rem) rotate(-45deg)' : 'none'};
  }
  `;

// covers the screen below the bar, so the menu can't be mispositioned by anything on the page
const Panel = styled(motion.nav)`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem 1.5rem 2rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.97);
  overflow-y: auto;
  `;

const PanelLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  `;

const PanelLink = styled(NavLink)`
  display: block;
  padding: 1.1rem 0;
  color: ${colours.white};
  font-size: 1.75rem;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  &.active {
    color: ${colours.mid};
  }
  `;

const PanelFooter = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  `;

const MobileNav = (props: {
    brand: { name: string, to: string },
    links: Array<{ name: string, to: string }>
    }) => {
    const { brand, links } = props;
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // close whenever the page changes, e.g. after following a link
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // while open, stop the page scrolling underneath and let Escape close the menu
    useEffect(() => {
        if (!open) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    return (
        <>
        <Bar>
            <Brand to={brand.to}>{brand.name}</Brand>
            <MenuButton
                type="button"
                $open={open}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((isOpen) => !isOpen)}
                >
                <span/><span/><span/>
            </MenuButton>
        </Bar>
        <AnimatePresence>
            {open &&
                <Panel
                    key="mobile-menu"
                    id="mobile-menu"
                    aria-label="Main"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    >
                    <PanelLinks>
                        {links.map((link) => (
                            <li key={link.to}>
                                <PanelLink to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>{link.name}</PanelLink>
                            </li>
                        ))}
                    </PanelLinks>
                    <PanelFooter>
                        <Connections/>
                    </PanelFooter>
                </Panel>
            }
        </AnimatePresence>
        </>
    );
};

export default MobileNav;
