import Welcome from "../welcome";
import Links from "../links";
import WelcomeMobile from "../welcomeMobile";
import Merchants from "../merchants";
import Methods from "../methods";
import Integration from "../integration";
import Cases from "../cases";
import Insight from "../insights";
import Fact from "../fact";
import './pageContent.css'

const PageContent = () => {
    return (
        <div className="page-content ">
            <div className="page-content page-content--index">
                <Welcome />
                <Links />
                <WelcomeMobile />
                <Merchants />
                <Methods />
                <Integration />
                <Cases />
                <Insight />
                <Fact />
                
            </div>
        </div>
    )
}

export default PageContent;