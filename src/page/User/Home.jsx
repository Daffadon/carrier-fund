import Section1 from "../../container/LandingPage/Section1/Section1"
import Section2 from "../../container/LandingPage/Section2/Section2"
import Section3 from "../../container/LandingPage/Section3/Section3"
import Section4 from "../../container/LandingPage/Section4/Section4"
import Section5 from "../../container/LandingPage/Section5/Section5"
import Layout from "../../components/Layout/Layout"
import { useEffect,useState} from "react"
import Loading from "../../components/Loading/Loading"
import { getLanding } from "../../api/api"
const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getContent = async () => {
            try {
                const response = await getLanding();
                setData(response);
            } catch (error) {
            }
        }
        getContent()
    }, [])
    return (
        <Layout>
            <Section1 />
            {data ? < Section2 data={data.partner} /> : <Loading />}
            <Section3 />
            {data ? < Section4 data={data.program} /> : <Loading />}
            {data ? < Section5 data={data.katamereka} /> : <Loading />}
        </Layout>
    )
}

export default Home