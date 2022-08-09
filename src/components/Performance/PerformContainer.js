import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import PerformChart from "./PerformanceChart";
import {getDepartment} from "../../action/dataChart";

//testing
export const PerformContainer = () => {

    const dispatch = useDispatch()
    const {department} = useParams()

    useEffect(() => {
        dispatch(getDepartment(department))
    }, [department])

    return (
        <div>
            <PerformChart/>
        </div>
    )
}