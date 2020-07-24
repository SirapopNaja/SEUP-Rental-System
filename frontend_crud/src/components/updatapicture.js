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

export default function Updatapicture(props) {

    
  const [picture, setPicture] = useState(null);
  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_details: "",
    product_picture: "",
    lend_day: "",
    status_id: "1",
  });
  const [pic, setPic] = useState(0);


  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };


  useEffect(() => {
  
    if (pic === 0) {
      const id = props.match.params.id;
      API.get(`api/product/` + id).then((res) => {
        console.log('testproduct',res.data);
        setData(res.data);
      });
  }
  else{
    const id = props.match.params.id;
    API.put(`api/updatelend/` + id , data).then((res) => {
      console.log("lend",res.data)
    });
  }
  }, [pic]);




  console.log("low",data);

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("product_picture", picture);
    formData.append("_method", "put");
    const id = props.match.params.id;
    API.post(`api/updatepicture/` + id, formData).then((res) => {
      console.log("product",res.data);
      setData(res.data);
      setPic(1)
    
      props.history.push("/index");
    });
    console.log("data",data);
  };
  const onSubmitHome = (e) => {
    props.history.push("/index");
  };
  const classes = useStyles();


  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="row">
          <div className="col-md-6">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">แก้ไข้รูปภาพอุปกรณ์</h3>
                <br></br>
              </div>
              <form onSubmit={onSubmit} role="form">
                <div className="box-body">

         
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
                    <br></br>  <br></br>
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
                    <label>รหัสอุปกรณ์</label>
                    <input
                    disabled
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
                      required="required"
                      name="product_picture"
                      onChange={handlePicture}
                    />
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
