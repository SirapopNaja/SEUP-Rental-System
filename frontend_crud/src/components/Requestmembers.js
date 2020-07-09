import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../api";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Requestmembers(props) {

  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
    last_name: "",
    phone_number: "",
    company: "",
    position: "",
    name_picture: "",
    sss_picture: "",
    person_type: "",
  });
  const [picture, setPicture] = useState("");
  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };
  useEffect(() => {
    const id = props.match.params.id;
    API.get(`api/getuserbyid/` + id).then((res) => {
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
    // formData.append('name_picture', picture);
    // formData.append('ssn_picture', picture);
    // formData.append('company', data.company);
    // formData.append('position', data.position);
    // formData.append('name', data.name);
    // formData.append('last_name', data.last_name);
    // formData.append('phone_number', data.phone_number);
    formData.append("person_type", data.person_type);
    formData.append("_method", "put");
    const id = props.match.params.id;
    API.post(`api/userupdate/` + id, formData).then((res) => {
      console.log(res.data);
      props.history.push("/Managemembers");
    });
  };
  const onSubmitHome = (e) => {
    props.history.push("/index");
  };
  const classes = useStyles();

  return (
    <div class="content-wrapper">
      <section class="content">
        <div class="row">
          <div class="col-md-6">
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">ตรวจสอบข้อมูลสมาชิก</h3>
                <br></br>
              </div>
              <form onSubmit={onSubmit} role="form">
              <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Paper className={classes.paper}> 
                 <div class="form-group">
                  <label>รูปหน้าตรง</label><br></br>
                  <img
                    src={"http://127.0.0.1:8000/storage/" + data.name_picture}
                    alt={data.id}
                    height="200"
                    width="200"
                  />
                </div></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> 
                <div class="form-group">
                  <label>รูปบัตรประชาชน</label><br></br>
                  <img
                    src={"http://127.0.0.1:8000/storage/" + data.ssn_picture}
                    alt={data.id}
                    height="200"
                    width="200"
                  />
                </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
                <div class="box-body">
                <div class="row">
                <div class="col">
                <div class="form-group">
                    <label>องค์กร</label>
                    <input
                      disabled
                      id="standard-disabled"
                      class="form-control"
                      type="text"
                      value={data.company}
                      name="company"
                      onChange={handle}
                    />
                  </div>
                  <div class="form-group">
                    <label>first_name</label>
                    <input
                      disabled
                      id="standard-disabled"
                      class="form-control"
                      type="text"
                      value={data.name}
                      name="name"
                      onChange={handle}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>phone_number</label>
                    <input
                      disabled
                      id="standard-disabled"
                      class="form-control"
                      type="text"
                      value={data.phone_number}
                      name="phone_number"
                      onChange={handle}
                    ></input>
                  </div>
                </div>
                <div class="col">
                <div class="form-group">
                    <label>ตำแหน่ง</label>
                    <input
                      disabled
                      id="standard-disabled"
                      class="form-control"
                      type="text"
                      value={data.position}
                      name="position"
                      onChange={handle}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>last_name</label>
                    <input
                      disabled
                      id="standard-disabled"
                      class="form-control"
                      type="text"
                      value={data.last_name}
                      name="last_name"
                      onChange={handle}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>ให้สถานะผู้ใช้ระบบ</label>
                    <select
                      class="form-control"
                      name="person_type"
                      id="person_type"
                      value={data.person_type}
                      onChange={handle}
                    >
                      <option value=""></option>
                      <option value="ผู้ใช้ทั่วไป">ผู้ใช้ทั่วไป</option>
                      <option value="เจ้าหน้าที่">เจ้าหน้าที</option>
                    </select>
                  </div>
                </div>
              </div>
               
                 

                  
                 
              
                  {/*<div>
                                    <label>รูปประกอบ</label>
                                    <img src={"http://127.0.0.1:8000/storage/"} alt={picture} height="42" width="42" />
                                   
                                    </div>*/}
          
                </div>
                <div class="form-row">
                  <div class="col">
                    <Button type="submit" variant="contained" color="primary">
                      ยืนยัน
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
