import '../index.css'
import Globant from '../assets/Globant.png'
import footer from '../assets/footer.png'

function Footer(){
    return(
    <footer className="footer">
        <div className="footer-container">
            {/* Columna 1 */}
            <div className="footer-column">
            <h3>Talent Pool Dojo</h3>
            <ul>
                <li><a href="https://sites.google.com/globant.com/tp-dojo/about-katas">About us</a></li>
                <li><a href="https://sites.google.com/globant.com/tp-dojo/challenges/challenges-web-ui">Challenges</a></li>
                <li><a href="https://sites.google.com/globant.com/tp-dojo/wiki">Wiki</a></li>
                <li><a href="https://sites.google.com/globant.com/tp-dojo/blog">Blog</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScFunwmfOVF_DozMgbfOHxWqzQyqKuq_6BawRGBydFmm1QhGA/viewform">Have you already been assigned?</a></li>
            </ul>
            </div>
            {/* Columna 2 */}
            <div className="footer-column">
            <h3>Globant Resources</h3>
            <ul>
                <li><a href="#">Labs</a></li>
                <li><a href="https://university.globant.com/">Globant University</a></li>
                <li><a href="https://docs.google.com/forms/d/1njYH7OiT-oNu1SUFxLb-yKLPLpO5ASdQ4UpReRQyP2U/closedform">Udemy License Request</a></li>
                <li><a href="https://docs.google.com/presentation/d/1Fxmayv8zXWJcU3R-rskHtnmuxR_7niqc8phKQzELlWw/edit#slide=id.g191d144cc9f_16_352">Globant - Career Path 2022</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1rwi2cPN8Z8V7C-ElI-my2rSdn8-fuctlh17d_xfNKZs/edit#gid=1634560999">Globant - Web UI Ecosystem</a></li>
            </ul>
            </div>
            {/* Columna 3 */}
            <div className="footer-column">
            <h3>External Links</h3>
            <ul>
                <li><a href="https://www.globant.com/studio/engineering">Studio UI Engineering</a></li>
                <li><a href="https://sites.google.com/globant.com/people-site-2/home?authuser=0">People Site</a></li>
                <li><a href="https://login.starmeup.com/?continue=aHR0cHM6Ly9hcHAuc3Rhcm1ldXAuY29tL2hvbWU%3D&logout=true&origin=SMU_WEB_v3">StarMe Up</a></li>
                <li><a href="#">Globers Portal</a></li>
                <li><a href="https://globant.fonselp.com/">Fonselp</a></li>
                <li><a href="#">Be Kind</a></li>
            </ul>
            </div>
            {/* Columna 4 */}
            <div className="footer-column">
            <h3>Slack Channels</h3>
            <ul>
                <li><a href="https://globant.slack.com/archives/C03CWECF1MJ">#g-t-uie-tp-dojo</a></li>
                <li><a href="https://globant.slack.com/archives/C01AFFZKC5C">#globant-university</a></li>
                <li><a href="https://globant.slack.com/archives/CKP428WNL">#globanteers</a></li>
                <li><a href="https://globant.slack.com/archives/CDBUCNBM4">#g-s-ui-colombia</a></li>
                <li><a href="https://globant.slack.com/archives/CP3V7ACN5">#g-t-frontend</a></li>
                <li><a href="https://globant.slack.com/archives/CDB9ED2TU">#g-t-javascript</a></li>
                <li><a href="https://globant.slack.com/archives/CH2B9BR7S">#g-t-typescript</a></li>
                <li><a href="https://globant.slack.com/archives/CDC43UTMG">#g-t-react</a></li>
                <li><a href="https://globant.slack.com/archives/CDCPFN87N">#g-t-reactnative</a></li>
                <li><a href="https://globant.slack.com/archives/CDC5365BL">#g-t-angular</a></li>
                <li><a href="https://globant.slack.com/archives/CDSQTGV47">#g-t-css</a></li>
                <li><a href="https://globant.slack.com/archives/CDAJM12SF">#g-t-vue</a></li>
                <li><a href="https://globant.slack.com/archives/CDBM0RA00">#g-t-flutter</a></li>
            </ul>
            </div>
        </div>

        <hr />

        <div className="logos">
            <img src={Globant} alt="Logo Globant" className='logoGlobant' />
            <img src={footer} alt="Logo Dojo" className='logoDojo'/>
        </div>

        <p className='finalFooter'>All rights reserved Globant 2022</p>

    </footer>
    )
}

export default Footer;