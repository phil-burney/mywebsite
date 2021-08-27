import BackGround from "../Components/Background"
import Paragraph from "../Components/Visuals/Paragraph"
function Home() {
    let style = {
        padding: "20px"
    }

    return (
        <div>
            <BackGround image="./background.jpg"></BackGround>
            <Paragraph  style = {style} content = 

            {"Hello, and welcome to my website!  My name is Phil Burney and I am a Senior Computer Science Major at NC State University." +
            " I am currently searching for employment in the Computer Science Field, as I will be graduating in May 2022. "}>
                
            </Paragraph>

            <Paragraph  style = {style} content = 

            {"I am an excellent problem solver and a great team player; I greatly enjoy meeting and getting to work with new people. " + 
            " I also enjoy learning about new software languages, frameworks, and new trends in Computer Science."  }>
                
            </Paragraph>

            <Paragraph  style = {style} content = 

            {"If you would like to learn more about me, view my resume, learn about the website, or shoot me an email, feel free to explore" + 
            " my website!"  }>
                
            </Paragraph>
        </div>
    )
}
export default Home