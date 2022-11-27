import * as icon from "./icons/icons"
// import { icons } from "./icons/icons";
import "./styles/StackCards.css"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';


const LanguageIcon = ({language, icon}) => {
  return (
    // <Tippy content={language} placement="bottom" theme="light">
    //   <p>{icon}</p>
    // </Tippy>
    <div> {language}
      <li>{icon}</li>
    </div>
    // <li>{props.icon}</li>
  )
}

function StackCards() {

  return (
    <div>
      <ul className="language-cards">
        {/* <LanguageIcon language="HTML" icon={icon.html} />
        <LanguageIcon language="CSS" icon={icon.css} />
        <LanguageIcon language="JavaScript" icon={icon.javascript} />
        <LanguageIcon language="React" icon={icon.react} />
        <LanguageIcon language="Ruby" icon={icon.ruby} /> */}
        {/* <LanguageIcon icon={icon.ruby} />
        <Tippy content="CSS3">
          <p>HTML</p>
        </Tippy> */}

         <LanguageIcon language="React" icon={icon.react} />
         
      </ul>
    </div>
  );
}

export default StackCards;

