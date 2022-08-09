import qualityCertificateListReducer from "./qualityCertificateList-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";
import listReducer from "./list-reducer";
import performChartReducer from "./performChart-reducer";
import performChartReducerTest from "./performChart-reducerTest";
import newsReducer from "./news-reducer";
//import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
    listCertificate: listReducer,
    listsCertificatePage: qualityCertificateListReducer,
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer,
    dataChart: performChartReducer,
    dataChartTest: performChartReducerTest,   //для теста
    news: newsReducer,
    //form: formReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// @ts-ignore
window._store_ = store;

export default store;