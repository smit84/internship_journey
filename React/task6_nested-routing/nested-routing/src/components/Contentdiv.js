import React from "react";
import {Routes, Route} from 'react-router-dom'
import Hrms from '../pages/Hrms';
import Timetr from '../pages/hrms/Timetr';
import Hours from '../pages/hrms/timetr/Hours';
import Time from '../pages/hrms/timetr/Time';
import Log from '../pages/hrms/timetr/Log';
import Compoly from '../pages/hrms/Compoly';
import Lm from '../pages/hrms/Lm';
import Payroll from '../pages/hrms/Payroll';
import Salary from '../pages/hrms/payroll/Salary';
import Slip from '../pages/hrms/payroll/Slip';
import Hm from '../pages/hrms/Hm';
import Pm from '../pages/Pm';
import Passmanage from '../pages/pm/Passmanage';
import Toggl from '../pages/Toggl';
import Report from '../pages/toggle/Report';
import Dashboard from '../pages/toggle/Dashboard';
import '../styles/Contentdiv.css'

export default function Contentdiv(){
    return(
        
            <div className="Content-div">
            <Routes>
            <Route path="/hrms" element={<Hrms />} >
                <Route path="timetracker" element={<Timetr />} >
                    <Route path='time' element={<Time />}/>
                    <Route path='log' element={<Log />}/>
                    <Route path='hours' element={<Hours />}/>
                </Route>
                <Route path="companypolicy" element={<Compoly />} />
                <Route path="leavemanagement" element={<Lm />} />
                <Route path="payroll" element={<Payroll />} >
                    <Route path='salary' element={<Salary />}/>
                    
                    <Route path='slip' element={<Slip />}/>
                </Route>
                <Route path="holidaymanagement" element={<Hm />} />
                
            </Route>
            <Route path='/pm' element={<Pm/>} >
                <Route path="passwordmanagement" element={<Passmanage />} />

            </Route>
            <Route path="/toggl" element={<Toggl />}>
                <Route path="report" element={<Report />} />
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
            </Routes>
       
            </div>

    )

}

