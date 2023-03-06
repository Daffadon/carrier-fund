import Layout from "../components/Layout/Layout"
import AccordionFaq from "../container/Help/AccordionFaq"
import { fontType } from "../components/Text/Text"

const Help = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className={`bg-[url("src/assets/Help/bgSearch.svg")] w-11/12 h-[35vh] bg-no-repeat flex flex-col justify-end`}>
                    <p className={`${fontType["h1"]} text-white ml-14 mb-10 w-4/12`}>Hai, Apakah Ada yang bisa kami bantu?</p>
                    <div className="flex justify-center">
                        <input type="text" className="w-11/12 rounded-full mb-10 px-16" placeholder="search" name="" id="" />
                    </div>
                </div>
            </div>
            <AccordionFaq />
        </Layout>
    )
}

export default Help