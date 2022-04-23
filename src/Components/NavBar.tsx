import styled from 'styled-components';

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
    background: ${Theme.colors.dark};
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    display: flex;
    width: 100%;
    position: fixed;
    align-items: center;
    justify-content: centre;
    a { text-decoration: none; transition: all 0.3s linear;}
    a:hover { transform: scale(1.2); }`;
  
  const Brand = styled.a`
    font-weight: bold;
    font-style: italic;
    font-size: 38px;
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
    font-size: 28px;
    height: 70px;
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
    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={link.name}><a href={link.to}>{link.name}</a></Li>);
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