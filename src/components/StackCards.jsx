import * as icon from "./icons/icons"
import "./styles/StackCards.css"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';


const LanguageIcon = (props) => {
  return (
    // <Tippy content={props.language} placement="bottom" theme="light">
    //   <li>{props.icon}</li>
    // </Tippy>
    <li>{props.icon}</li>
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
        <LanguageIcon icon={icon.ruby} />
        <Tippy content="CSS3">
          <p>HTML</p>
        </Tippy>
      </ul>
    </div>
  );
}

export default StackCards;

