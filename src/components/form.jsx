import '../index.css'
import Example1 from '../assets/example1.png'
import Example2 from '../assets/example2.png'


function Form(){
    return(
    <body>
        <section className='form'>
            <p>Please, let your link code and feedback challenge <a className='form-here' href="https://docs.google.com/forms/d/e/1FAIpQLSeaNZkq9T_xYF_3VtTsAuUttQdKbW4JgEHbM7kkj0hoK_wn6g/viewform">here</a></p>
        </section>

        <section className='challenge'>
            <p>
                <b className='bold'>Challenge:</b> We want you to have fun building this SPA (Single Page Application) where you can show the quotes of the most famous characters from this TV series.
            </p>

            <p>The goal is to build the current pages:</p>

            <li className="">Home</li>
            <li className="">Quotes view</li>
            <li className="">Error page</li>

            <img src={Example1} alt="" className='example1' />
            <img src={Example2} alt="" className='example2' />

            <div className="dropdown">
                <button className="dropbtn">Goals basic level</button>
                <div className="dropdown-content">
                    <a href="#">
                        <ul>
                            <ol>User Story: Home page view</ol><br />
                            <ol>User Story: Show a quote randomly for the first time (by default)</ol><br />
                            <ol>User Story: Offer an input search, in which the name of any character can be written, as well as the number of quotes to show.</ol><br />
                            <ol>User Story:</ol><br />
                        </ul>
                    </a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Goals advanced level</button>
                <div className="dropdown-content">
                    <a href="#">
                        <ul>
                            <ol><b>**Include the basic level user stories</b></ol><br />
                            <ol>User Story: Add audio with the Simpsons song</ol><br />
                            <ol>User Story: Add Desktop version</ol><br />
                        </ul>
                    </a>
                </div>
            </div>

            <p className='tools'><b>Tools:</b> You can use the next tools to develop this challenge:</p>
            <li>Mockup: <a href="https://www.figma.com/file/R3RrsUHYYAKmm9EyxNocMj/Simpsons?type=design&node-id=0%3A1&mode=design&t=FeKkyP1NNvKtRm5m-1" className='link1'>https://www.figma.com/file/R3RrsUHYYAKmm9EyxNocMj/Simpsons?type=design&node-id=0%3A1&mode=design&t=FeKkyP1NNvKtRm5m-1</a></li>
            <li>API: <a href=" http://thesimpsonsquoteapi.glitch.me/" className='link2'> http://thesimpsonsquoteapi.glitch.me/</a></li>

            <p className='repo'><b>Github repo:</b></p>

        </section>

    </body>
    
    )
}

export default Form;