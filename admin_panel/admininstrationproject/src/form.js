import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = () => {
    const data = {
        name: "",
        price: "",
        description: "",
        imageUrl: "",
        quantite: ""
    }
    const [loginData, setLoginData] = useState(data)
    const [msg, setMsg] = useState(false)
    
    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value
        })
    }
    console.log(loginData)
    let url = 'http://localhost:3001/api/v1/product'

    const handleSubmit = e => {
        e.preventDefault();
        axios({
            method: 'POST',
            headers: { 'Access-Control-Allow-Credentials': 'true' },
            url: url,
            data: loginData
        }).
            then(res => {
                setMsg(true)
                console.log(res.data)
            }).
            catch(err => {
                console.log(err)
            })
    }

    let validateMsg = "";
    if (msg) {
        validateMsg = "products success save"
    }

    return (
        <div>
            <div className="content-wrapper">

                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>General Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">General Form</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-12">
   
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Quick Example</h3>
                                    </div>
                                    <h3 style={{ color: "#35e220", marginLeft: "3%", marginTop: "3%" }}>{validateMsg}</h3>
                                    <form role="form" onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" onChange={handleChange} className="form-control" id="name" placeholder="Enter Name ..." />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Price</label>
                                                <input type="Number" onChange={handleChange} className="form-control" id="price" placeholder="Price ..." />
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Textarea Disabled</label>
                                                    <textarea onChange={handleChange} className="form-control" rows="3" id="description" placeholder="Enter ..."></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Image</label>
                                                <input type="text" onChange={handleChange} className="form-control" id="imageUrl" placeholder="Url de l'image ..." />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Quantity</label>
                                                <input type="Number" onChange={handleChange} className="form-control" id="quantite" placeholder="Quantite ..." />
                                            </div>
                                            
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                        </div>
                                             
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                                                          
                        </div>
                                                                               
                    </div>
                </section>
                                                                     
            </div>
        </div> 
    )
}

export default Form
