import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../api";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default function Updatapicture(props) {

    
  const [picture, setPicture] = useState(null);
  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_details: "",
  });
  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  useEffect(() => {
    const id = props.match.params.id;
    API.get(`api/product/` + id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [props]);

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("product_picture", picture);
    formData.append("_method", "put");
    const id = props.match.params.id;
    API.post(`api/updatapicture/` + id, formData).then((res) => {
      console.log(res.data);
      props.history.push("/index");
    });
  };
  const onSubmitHome = (e) => {
    props.history.push("/index");
  };
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="row">
          <div className="col-md-6">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Create Equipment</h3>
                <br></br>
              </div>
              <form onSubmit={onSubmit} role="form">
                <div className="box-body">

                <div className="form-group">
                  <label>ID</label>
                    <label className="form-control"
                      type="text"
                      value={data.id}
                      name="id"
                      >{data.id}
                      </label>
                  </div>

                  <div className="form-group">
                    <label>ชื่ออุปกรณ์</label>
                    <input
                      className="form-control"
                      type="text"
                      value={data.product_name}
                      name="product_name"
                      
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>รหัสอุปกรณ์</label>
                    <input
                      className="form-control"
                      type="text"
                      value={data.product_number}
                      name="product_number"
                    ></input>
                    </div>
                  <div>
                    รูปภาพอุปกรณ์
                    <input
                      type="file"
                      name="product_picture"
                      onChange={handlePicture}
                    />
                  </div>
                  
               
                </div>
                <div className="form-row">
                  <div className="col">
                    <Button type="submit" variant="contained" color="primary">
                      submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
