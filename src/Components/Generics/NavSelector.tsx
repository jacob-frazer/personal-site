import MediaQuery from 'react-responsive'

import NavBar from '@generics/NavBar';
import Burger from '@generics/BurgerMenu';

// media query to select either navbar or burger menu component
const NavigationMenu = (props: {
        brand: { name: string; to: string },
        links: Array<{ name: string, to: string }>
      }) => {
    const { brand, links } = props;

    return (
        <div>
            <MediaQuery minWidth={768}>
                {(matches:boolean) => matches ?
                    <NavBar brand={brand} links={links} />:
                    <Burger links={[...[{name: "Home", to: "/"}], ...links]} />  // need to add home to links, but handled differently in NavBar 
                }
            </MediaQuery>
        </div>
        
      )
    };

export default NavigationMenu;

            