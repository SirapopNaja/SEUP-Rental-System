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

 

  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_picture: "",
    product_details: "",
    status_id: "",
    lend_day: "",
   
  });

  const [name, setName] = useState([]);
  const [basket, setBasket] = useState([]);
  const [status , setStatus] = useState(2);
  const [productid , setProductid] = useState([]);

  const myData = {
    product_name : data.product_name,
    product_type :  data.product_type,
    product_number : data.product_number,
    product_picture : data.product_picture, 
    product_details : data.product_details,
    lend_day : data.lend_day,
    name : name.name,
    last_name : name.last_name ,
    status_id : status ,
    product_id : productid 
}
    
console.log('mydata', myData)

  useEffect(() => {
    API.post(`api/details/`).then((res) => {
      console.log("test",res.data.user.name);
      console.log("test2",res.data.user.last_name);
      setName(res.data.user);
    });
  }, []);

  useEffect(() => {
    const id = props.match.params.id;
    API.get(`api/product/` + id).then((res) => {
      console.log("product",res.data.id);
      setData(res.data);
      setProductid(res.data.id);
    });
  }, [props]);


  
  const onSubmit = (e) => {
    const id = props.match.params.id;
    API.post(`api/lendproduct/`,myData ,)
    .then ((res) => {
      console.log("lend",res.data)
      setBasket(res.data)

      API.put(`api/product/`+ id, myData)
      .then ((res) => {
        console.log("put",res.data)
      })
  
     alert("success")
     props.history.push("/Devicestatus");
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
                    <div class="row">
                    <div class="col">
                    <div className="form-group">
                    <label>ชื่ออุปกรณ์</label>
                    <input
                      disabled
                      className="form-control"
                      type="text"
                      value={data.product_name}
                      name="product_name"
                      
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>รายละเอียด</label>
                    <input
                      disabled
                      className="form-control"
                      type="text"
                      value={data.product_details}
                      name="product_details"
                      
                    ></input>
                  </div>
                    </div>
                    <div class="col">
                    <div className="form-group">
                    <label>รหัสอุปกรณ์</label>
                    <input
                      disabled
                      className="form-control"
                      type="text"
                      value={data.product_number}
                      name="product_number"
                      
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>ระยะเวลาในการยืม</label>
                    <input
                      disabled
                      className="form-control"
                      type="text"
                      value={data.lend_day}
                      name="lend_day"
                    ></input>
                  </div>


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
