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

export default function Request(props) {
    // const [basket, setBasket] = useState([]);
    const [data, setData] = useState({
    //   product_name: "",
    //   product_type: "",
    //   product_number: "",
    //   product_picture: "",
    //   product_details: "",
      status_id: "",
    //   lend_day: "",
    //   name: "",
    //   last_name: "",
    });

    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
      };
    

    useEffect(() => {
        const id = props.match.params.id;
        API.get(`api/showlend/` + id).then((res) => {
          console.log(res.data);
          setData(res.data);
        });
      }, [props]);

      const classes = useStyles();

      const onSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append("status_id", data.status_id);
        formData.append("_method", "put");
        const id = props.match.params.id;
        API.post(`api/lendproduct/` + id, formData).then((res) => {
          console.log(res.data);
          props.history.push("/PrepareEquipment");
        });
      };

    return (
        <div class="content-wrapper">
        <section class="content">
          <div class="row">
            <div class="col-md-6">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">จัดเตรียมอุปกรณ์</h3>
                  <br></br>
                </div>
                <form onSubmit={onSubmit} role="form">
                <div className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Paper className={classes.paper}> 
                   <div class="form-group">
                    <label>รูป</label><br></br>
                    <img
                      src={"http://127.0.0.1:8000/storage/" + data.product_picture}
                      alt={data.id}
                      height="150"
                      width="150"
                    />
                  </div></Paper>
          </Grid>
        </Grid>
      </div>
       

                  <div class="box-body">

                  <div class="row">
                  <div class="col">
                  <div class="form-group">
                      <label>อุปกรณ์</label>
                      <input
                        disabled
                        id="standard-disabled"
                        class="form-control"
                        type="text"
                        value={data.product_name}
                        name="product_name"
                        onChange={handle}
                      />
                    </div>
                    <div class="form-group">
                      <label>รายละเอียด</label>
                      <input
                        disabled
                        id="standard-disabled"
                        class="form-control"
                        type="text"
                        value={data.product_details}
                        name="product_details"
                        onChange={handle}
                      ></input>
                    </div>
                    <div class="form-group">
                      <label>ชื่อ</label>
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
                   </div>
                    <div class="col">
                    <div class="form-group">
                      <label>รหัสอุปกรณ์</label>
                      <input
                        disabled
                        id="standard-disabled"
                        class="form-control"
                        type="text"
                        value={data.product_number}
                        name="product_number"
                        onChange={handle}
                      ></input>
                    </div>
                    <div class="form-group">
                      <label>สถานะการจัดเตรียม</label>
                      <select
                        class="form-control"
                        name="status_id"
                        id="status_id"
                        value={data.status_id}
                        onChange={handle}
                      >
                        <option value=""></option>
                        <option value="2">กำลังดำเนินการ</option>
                        <option value="1">อุปกรณ์พร้อมรับ</option>
                        <option value="3">รับอุปกรณ์แล้ว</option>
                      </select>
                    </div>
                   
                    <div class="form-group">
                      <label>นามสกุล</label>
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
    )
}
