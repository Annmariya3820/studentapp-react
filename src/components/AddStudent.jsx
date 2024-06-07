import React from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
  return (
    <div>
        <Navbar/>
       <center><h1>STUDENT LOGIN</h1></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                         <label htmlFor="" className="form-label">Adm No</label>
                         <input type="number" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Roll No</label>
                        <input type="number" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Parent Name</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                          <label htmlFor="" className="form-label">College</label>
                          <input type="text" className="form-control" />
                               
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                         <label htmlFor="" className="form-label">Dob</label>
                         <input type="date" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                         <label htmlFor="" className="form-label">Password</label>
                         <input type="password" className="form-control" />
                             
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Conform Password</label>
                        <input type="password" className="form-control" />

                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                         <button className="btn btn-success">SUBMIT</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent
