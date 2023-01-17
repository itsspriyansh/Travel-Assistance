import Layout from "../components/city-page/Layout"
import Navbar  from "../components/landing-page/Navbar"

import Weather from "../components/landing-page/Weather"

function About () {
    return (
        <Layout>
            <div>
                <Navbar />
                <Weather />
                
            </div>
        </Layout>
    )
}

export default About

