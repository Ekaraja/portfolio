import * as icon from "./icons/icons"
import "./styles/StackCards.css"
import {Tippy} from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';


const LanguageIcon = (props) => (
  <Tippy content={props.language} placement="bottom" theme="light">
    <li>{props.icon}</li>
  </Tippy>
);


function StackCards() {

    return ( 
        <div>
            <ul className="language-cards">
                        <LanguageIcon language={"HTML"} icon={icon.html}/>
                        <LanguageIcon language={"CSS"} icon={icon.css}/>
                        <LanguageIcon language={"JavaScript"} icon={icon.javascript}/>
                        <LanguageIcon language={"React"} icon={icon.react}/>
                        <LanguageIcon language={"Ruby"} icon={icon.ruby}/>
            </ul>
        </div>
     );
}

export default StackCards;