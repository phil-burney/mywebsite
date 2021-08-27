
import Column from "../Components/Grid/Column"
import Grid from "../Components/Grid/Grid"
import Paragraph from "../Components/Visuals/Paragraph"
import Row from "../Components/Grid/Row"
import SideBar from "../Components/UserInput/SideBar"
import Heading from "../Components/Visuals/Heading"
import Body from "../Components/Body"
import Background from "../Components/Background"
function AboutMe() {
    let style = {
        height: "100%"
     
    }
    let paragraphstyle = {
        padding: "30px",
        

        
    }
    return (
        
            <Body >
            <Background image = {"./background.jpg"}></Background>
            <SideBar padding = {0} color = {"white"}>
                        <div>Bronco</div>
                        <div>Scooter</div>
                        <div>3D Printing</div>
            </SideBar>
            <Grid>
                <Row justify = {"center"}>
                    <Column>
                        <Paragraph  style = {paragraphstyle} content = 

                            {"My name is Phil Burney and I am currently a senior studying Computer Science at North Carolina State University." +  
                            "  My hobbies include 3D printing, building an electric scooter, and restoring a 1979 Bronco.  "}>
                                                
                                                
                            </Paragraph>
                            <Heading size = {1} content = {"About the Bronco"}></Heading>

                            <Paragraph  style = {paragraphstyle} content = 

                                {"  I am currently working on a 1979 Bronco, which I purchased when I was in middle school.  Over the years," +
                                " I learned how to do mechanical work, such as tuning the carbeurator, replacing the rear main seal, and replacing" +
                                " the drum brake pads when I found out that my brakes were going bad.  I also learned how to diagnose and fix electrical" +
                                " problems.  At one point, I rewired electical wires that led to the rear window motor after I" + 
                                " discovered that I had inherited an electrical mess from the previous owner.  However, I have experienced a setback," +
                                " as the engine that I currently have recently experienced total mechanical failure and has seized.  As a result, I plan on" +
                                " swapping in a smaller, more powerful engine in the future, as well as aquiring and rebuilding a new transmission."  }>
                                                
                                                
                            </Paragraph>

                            <Heading size = {1} content = {"About the Scooter"}></Heading>
                        
                            <Paragraph  style = {paragraphstyle} content = 

                                {"  I am currently working on a 1979 Bronco, which I purchased when I was in middle school.  Over the years," +
                                " I learned how to do mechanical work, such as tuning the carbeurator, replacing the rear main seal, and replacing" +
                                " the drum brake pads when I found out that my brakes were going bad.  I also learned how to diagnose and fix electrical" +
                                " problems.  At one point, I rewired electical wires that led to the rear window motor after I" + 
                                " discovered that I had inherited an electrical mess from the previous owner.  However, I have experienced a setback," +
                                " as the engine that I currently have recently experienced total mechanical failure and has seized.  As a result, I plan on" +
                                " swapping in a smaller, more powerful engine in the future, as well as aquiring and rebuilding a new transmission."  }>
                                                        
                                                        
                            </Paragraph>

                        </Column>
                    </Row>
            </Grid>
            
        </Body>
    )
}
export default AboutMe