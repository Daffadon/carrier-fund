import { Route, Routes } from "react-router-dom"
import ForgotPassword from "../page/ForgotPassword"
import Home from "../page/Home"
import LandingPage from "../page/LandingPage"
import Login from "../page/Login"
import SignUp from "../page/SignUp"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import Program from "../page/Program"
import Account from "../page/Account"
import Help from "../page/Help"
import History from "../page/History"
import SignUpCompany from "../page/SignUpCompany"
import LoginCompany from "../page/LoginCompany"
import NotFound from "../page/NotFound"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/help" element={<Help />} />
                <Route path="/companylogin" element={<LoginCompany/>}/>
                <Route path="/companysignup" element={<SignUpCompany/>}/>
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path="/program" element={<Program />} />
                <Route path='/history' element={<History />} />
                <Route path='/home' element={<Home />} />
            </Route>
                <Route path='/account' element={<Account />} />
        </Routes>
    )
}

export default AppRoutes