import React from "react";
import SideMenu from "react-burger-menu";

import withWidth, {
  LARGE
} from "../../HigherOrderComponents/exercise_2/withWidth";
import FloatingMenuBtn from "../../../FloatingMenuBtn";

  const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu}) => {

    const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu}) => {
      const childrenCloned = React.Children.map(children, (child) => (
        React.cloneElement(child, {
          toggleMenu
        })
      ))

  return <div> { width === LARGE ? '' :
  <FloatingMenuBtn toggleMenu={ toggleMenu } />
}
<SideMenu.slide
         isOpen={ isOpen }
         pageWrapId={ pageWrapId || 'page-wrap' }
      >
        { childrenCloned }
      </SideMenu.slide>
</div>
}

export default withWidth(Menu);


//   return (
//     <div>
//       { width === LARGE ? '' :
//         <FloatingMenuBtn toggleMenu={ toggleMenu } />
//       }
//       <SideMenu.slide
//          isOpen={ isOpen }
//          pageWrapId={ pageWrapId || 'page-wrap' }
//       >
//         { childrenCloned }
//       </SideMenu.slide>
//     </div>
//   )
// }


//export default withWidth(Menu)
