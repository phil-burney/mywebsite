import ButtonGroup from "./ButtonGroup";
import LinkButton from "./LinkButton";


function Header(){
    return (
        <div>
            <div id = "title"> Phil Burney's Website </div>
            <ButtonGroup buttons = {[<LinkButton link = "/aboutme" text = "About me"></LinkButton>,<LinkButton link = "/resume" text = "Resume"></LinkButton>,<LinkButton link = "/aboutwebsite" text = "About the website"></LinkButton>]}></ButtonGroup>
        </div>
    )
}
export default Header;