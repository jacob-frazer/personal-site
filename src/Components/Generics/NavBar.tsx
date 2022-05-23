import styled from 'styled-components';
import colours from '../../utils/colours';

import { Link } from 'react-router-dom';

const Theme = {
    colors: {
      bg: `#fff`,
      dark: `#24292e`,
      light: `#EEEEEE`,
      red: `#ff5851`,
    },
    fonts: {
      body: `Segoe UI Symbol, sans-serif`,
      heading: `Segoe UI Symbol, sans-serif`,
    }
  }

  
  const Navbar = styled.nav`
    background-color: ${colours.black};
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    display: flex;
    width: 100%;
    position: sticky;
    z-index: 100;
    top: 0;
    align-items: center;
    justify-content: centre;
    a { cursor:pointer;
      padding: 7px 14px;
      position:relative;
      background:${colours.black};
      text-decoration: none;
      border-top-right-radius:10px;
      border-bottom-left-radius:10px;
      transition:all 1s;
      &:after,&:before{
        content:" ";
        width:5px;
        height:5px;
        position:absolute;
        border:0px solid #fff;
        transition:all 1s;
        }
      &:after{
        top:2px;
        left:2px;
        border-top:2px solid white;
        border-left:2px solid white;
      }
      &:before{
        bottom:-2px;
        right:-2px;
        border-bottom:2px solid white;
        border-right:2px solid white;
      }
      &:hover{
        border-top-right-radius:0px;
      border-bottom-left-radius:0px;
        &:before,&:after{
          width:100%;
          height:100%;
        }}    
    `;
  
  const Brand = styled.a`
    font-weight: bold;
    font-style: italic;
    font-size: 30px;
    color: white;
    margin-left: 1rem;
    padding-right: 1rem;`;
  
  const Ul = styled.ul`
    color: white;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    text-align: centre;
    align-items: center;
    -webkit-overflow-scrolling: touch;`;
  
  const Li = styled.li`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    display: flex;
    font-size: 18px;
    height: 2.4rem;
    justify-content: center;
    line-height: 16px;
    margin: 0 20px ;
    text-decoration: none;
    white-space: nowrap;
    a { color: white; }
    `;


const NavbarScroller = (props: {
    brand: { name: string; to: string },
    links: Array<{ name: string, to: string }>
    }) => {
    const { brand, links } = props;
    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={link.name}><Link to={link.to}>{link.name}</Link></Li>);
    return (
        <Navbar>
          <Brand href={brand.to}>{brand.name}</Brand>
          <Ul>
            <NavLinks />
          </Ul>
        </Navbar >
      )
    };

export default NavbarScroller;