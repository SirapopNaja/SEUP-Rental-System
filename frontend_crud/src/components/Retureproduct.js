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

export default function Returnproduct(props) {

 

  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_picture: "",
    product_details: "",
    status_id: "",
    lend_day: "",
    send_back: "",
    status_p: "",
    name: "",
    last_name: "",
  });

  const [basket, setBasket] = useState([]);
  const [status , setStatus] = useState(1);


  const myData = {
    product_name : data.product_name,
    product_type :  data.product_type,
    product_number : data.product_number,
    product_picture : data.product_picture, 
    product_details : data.product_details,
    lend_day : data.lend_day,
    name : data.name,
    last_name : data.last_name,
    send_back : data.send_back,
    status_p : data.status_p,
    status_id : status
}

 
  useEffect(() => {
    const id = props.match.params.id;
    API.get(`api/lendproduct/` + id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [props]);


  
  
  const onSubmit = (e) => {
    const id = props.match.params.id;
    API.post(`api/send/`,data ,)
      .then((res) => {
      console.log("send",res.data)
      setBasket(res.data)
     
      API.put(`api/product/`+ data.product_id ,myData)
      .then ((res) => {
        console.log("put",res.data)

        API.delete(`api/lendproduct/` + id).then((res) => {
          console.log(res.data);
          setData(myData)
        })
        alert("success")
        props.history.push("/history");
      })   
    
    })

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
                   <Grid container spacing={6}>
                    <Grid item xs={6}>
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
                    <label>สถานะการคืน</label>
                    <select
                      class="form-control"
                      name="send_back"
                      id="send_back"
                      value={data.send_back}
                      onChange={handle}
                    >
                      <option value=""></option>
                      <option value="1">คืนตามกำหนด</option>
                      <option value="2">เกินกำหนดเวลา</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label>สภาพอุปกรณ์</label>
                    <select
                      class="form-control"
                      name="status_p"
                      id="status_p"
                      value={data.status_p}
                      onChange={handle}
                    >
                      <option value=""></option>
                      <option value="1">สภาพปกติ</option>
                      <option value="2">ชำรุด</option>
                    </select>
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
