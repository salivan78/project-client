import app from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import FdpYear from "./components/Fdp/FdpYear/FdpYear";
import React, {Suspense, useEffect} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Registration from "./components/authorization/Registration";
import Login from "./components/authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./action/user";
import Disk from "./components/disk/Disk";
import Profile from "./components/profile/Profile";
import d from "./components/disk/Disk.module.css";
import Loader from "./components/utils/Loader";
import Perform from "./components/Performance/Performance";
import NewsPost from "./components/Content/NewsPost";
import NewsPostRoute from "./components/Content/NewsPostRoute";
import {GIT_URL} from "./config";

const ListsCertificateRoute = React.lazy(() => import("./components/Fdp/FdpYear/FdpMount/FdpContent/QualitySertificate/ListsCertificateRoute"))
const CertificateListContainer = React.lazy(() => import("./components/Fdp/FdpYear/FdpMount/FdpContent/QualitySertificate/CertificateListContainer"))

const App = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <div className={app.appWrapper}>
            <Header/>
            <Navbar/>
            <div>
                <Suspense fallback={<div className={d.loader}><Loader/></div>}>
                    {!isAuth ?
                        <Switch>
                            <Route path='/registration' render={() => <Registration/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
                        : <Switch>
                            <Route path='/fdp/listsCertificates' render={() => <ListsCertificateRoute
                            />}/>
                            <Route path='/mernCloud' render={() => <Disk/>}/>
                            <Route path='/profile' render={() => <Profile/>}/>
                            <Route path='/certificateList/:name?' render={() => <CertificateListContainer/>}/>
                        </Switch>
                    }
                    <Switch>
                        <Route path={`${GIT_URL}/performance`} render={() => <Perform/>}/>
                        <Route path='/news' render={() => <NewsPostRoute/>}/>
                        <Route path='/fdp/summary' render={() => <FdpYear/>}/>
                        <Route path='/homepage' render={() => <Content/>}/>
                        <Route exact path='/' render={() => <Content/>}/>
                        {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
}

export default App;