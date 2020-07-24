import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../api";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default function Update(props) {
  const [picture, setPicture] = useState(null);
  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_details: "",
    lend_day: "",
    status_id: "1",
  });

  const myData = {
    product_name : data.product_name,
    product_type :  data.product_type,
    product_number : data.product_number,
    product_details : data.product_details,
    lend_day : data.lend_day,
    status_id : data.status_id,
}
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

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    
    formData.append("product_name", data.product_name);
    formData.append("product_type", data.product_type);
    formData.append("product_number", data.product_number);
    formData.append("product_details", data.product_details);
    formData.append("lend_day", data.lend_day);
    formData.append("status_id", data.status_id);
    formData.append("_method", "put");
    const id = props.match.params.id;
    API.post(`api/product/` + id, formData).then((res) => {
      console.log(res.data);
    API.put(`api/lendproduct/` + id, myData).then((res) => {
        console.log(res.data)
      });
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
                <h3 className="box-title">แก้ไข้อุปกรณ์</h3>
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
                      required="required"
                      type="text"
                      value={data.product_name}
                      name="product_name"
                      onChange={handle}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>หมวดหมู่อุปกรณ์</label>
                    <select
                      className="form-control"
                      required="required"
                      name="product_type"
                      id="product_type"
                      value={data.product_type}
                      onChange={handle}
                    >
                      <option value=""></option>
                      <option value="อุปกรณ์ทำสื่อ">อุปกรณ์ทำสื่อ</option>
                      <option value="กลุ่มเครื่องมือ">กลุ่มเครื่องมือ</option>
                      <option value="อุปกรณ์อื่นๆ">อุปกร์ทั่วไป</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>รหัสอุปกรณ์</label>
                    <input
                      className="form-control"
                      required="required"
                      type="text"
                      value={data.product_number}
                      name="product_number"
                      onChange={handle}
                    ></input>
                    </div>
                    <div className="form-group">
                      
                    <label>ระยะเวลาการยืม</label>
                    <input
                       required="required"
                      className="form-control"
                      type="number"
                      value={data.lend_day}
                      name="lend_day"
                      onChange={handle}
                    ></input>
                    </div>
                  {/* <div>
                    รูปภาพอุปกรณ์
                    <input
                      type="file"
                      name="product_picture"
                      onChange={handlePicture}
                    />
                  </div> */}
                  
                  <div className="form-group">
                    <label>รายละเอียดอุปกรณ์</label>
                    <textarea
                      className="form-control"
                      required="required"
                      type="text"
                      value={data.product_details}
                      name="product_details"
                      onChange={handle}
                    ></textarea>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <Button type="submit" variant="contained" color="primary">
                      บันทึก
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
