
import Box from './Box'
import Navbar from './Navbar'
import Footer from './Footer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';

export default function Main() {
  const history = useHistory();
    return (
        <div className="relative md:ml-64 bg-blueGray-100">
        <Header name="DASHBOARD" />
        <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap" >
                <Box name="WEMODI API" 
                     description="MANAGE API"
                     onClick={()=>history.push("/Elenco-Api")}
                />
                <Box name="WEMODI APPLICATION"
                      description="MANAGE APPLICATION"
                />
                <Box name="PROFESIA API DETAIS"
                      description="API DETAILS"
                />
                <Box name="API PERFORMANCE"
                      description="SEE API PERFORMANCE"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            </div>
            <div className="w-full xl:w-4/12 px-4">
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
}