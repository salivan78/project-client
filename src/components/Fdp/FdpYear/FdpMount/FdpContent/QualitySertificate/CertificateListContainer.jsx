import React from "react";
import {connect, useSelector} from "react-redux";
import CertificateList from "./CertificateList";
import {withRouter} from "react-router-dom";
import {setOneLists} from "../../../../../../action/list";
import d from "../../../../../disk/Disk.module.css";
import Loader from "../../../../../utils/Loader";

class CertificateListContainer extends React.Component {

    refreshList() {
        let numberList = this.props.match.params.name
        if (!numberList) {
            return <div>NOT NUMBER</div>
        }
        this.props.setOneLists(numberList)
    }

    componentDidMount() {
        this.refreshList()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.name != prevProps.match.params.name) {
            this.refreshList()
        }
    }

    render() {
        if (this.props.loader) {
            return (
                <div className={d.loader}>
                    <Loader/>
                </div>
            )
        }

        return (
            <CertificateList/>
        )
    }
}

let mapStateToProps = (state) => ({
    loader: state.app.loader
})

let WithUrlDataContainerComponent = withRouter(CertificateListContainer)

export default connect(mapStateToProps, {setOneLists})(WithUrlDataContainerComponent);