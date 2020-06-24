import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../api";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
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

export default function Basket(props) {
  const [basket, setBasket] = useState([]);
  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_picture: "",
    product_details: "",
    status_id: "",
    lend_day: "",
    name: "",
    last_name: "",
  });


 
  

  useEffect(() => {
    const id = props.match.params.id;
    API.get(`api/product/` + id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [props]);

  
  
  const onSubmit = (e) => {
    API.post(`api/lendproduct/`,data ,).then((res) => {
      console.log(res.data);
      setBasket(res.data);
      alert("success")
      props.history.push("/studenthome");
    });
  };

  
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const classes = useStyles();
  return (
          
               <div className="content-wrapper">
                  <section class="content">
                  <div class="row">
                  <div class="col-md-6">
                    <div className="box-body">
                      <br></br><br></br>
                    <div className={classes.root}>
                   <Grid container spacing={4}>
                    <Grid item xs={4}>
                   <Paper className={classes.paper}> 
                    <div class="form-group">
                      <label>รูปภาพ</label><br></br>
                      <img
                        src={"http://127.0.0.1:8000/storage/" + data.product_picture}
                        alt={data.id}
                        height="200"
                        width="200"
                      />
                    </div></Paper>
                    </Grid>
                    </Grid>
                    </div>
                    <br></br>
                    <br></br>
                      <div className="form-group">
              
                   <label>ชื่ออุปกรณ์</label>
                    <label className="form-control"
                      type="text"
                      value={data.product_name}
                      name="id"
                      >{data.product_name}
                      </label>

                      </div>
                      <label>รหัสอุปกรณ์</label>
                    <label className="form-control"
                      type="text"
                      value={data.product_number}
                      name="id"
                      >{data.product_number}
                      </label>

                      <label>รายละเอียด</label>
                    <label className="form-control"
                      type="text"
                      value={data.product_name}
                      name="id"
                      >{data.product_details}
                      </label>

                      </div>
                      <div class="form-group">
                    <label>ระยะเวลายืม</label>
                    <select
                      class="form-control"
                      name="lend_day"
                      id="lend_day"
                      value={data.lend_day}
                      onChange={handle}
                    >
                      <option value=""></option>
                      <option value="1">1 วัน</option>
                      <option value="2">2 วัน</option>
                      <option value="3">3 วัน</option>
                      <option value="4">4 วัน</option>
                      <option value="5">5 วัน</option>
                      <option value="6">6 วัน</option>
                      <option value="7">7 วัน</option>
                    </select>
                  </div>
                  
                      <div class ="row">
                        <div class = "col">
                        <div className="form-group">
                        <label>ชื่อ</label>
                        <input
                      className="form-control"
                      type="text"
                      value={data.name}
                      name="name"
                      onChange={handle}
                    ></input>
                    </div>
                          </div>
                          <div class = "col">
                          <div className="form-group">
                    <label>นามสกุล</label>
                    <input
                      className="form-control"
                      type="text"
                      value={data.last_name}
                      name="last_name"
                      onChange={handle}
                    ></input>
                    </div>
                          </div>
                          </div>
                  
                  
                   
                      <br></br><br></br>
                  <div className="col">
                    <Button type="submit" variant="contained" color="primary" onClick={() => onSubmit()}>
                      ยืนยัน
                    </Button>
                  </div>

                  </div>
                  </div>
                  </section>
                  </div>
                 
  );
}
