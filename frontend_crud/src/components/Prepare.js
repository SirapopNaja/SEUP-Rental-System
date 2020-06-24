import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageUploading from "react-images-uploading";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "./styles.css";
import API from '../api'



export default function Prepare(props) {
    const [picture, setPicture] = useState("") 
    const [data, setData] = useState({
        product_name: "",
        product_type: "",
        product_number: "",
        product_details: ""
    })
    const handlePicture = (e) =>{
        setPicture(e.target.files[0])
    }
    const handle = (e) => {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData(newData)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData();
        formData.append('product_picture', picture);
        formData.append('product_name', data.product_name);
        formData.append('product_type', data.product_type);
        formData.append('product_number', data.product_number);
        formData.append('product_details', data.product_details);
        API.post(`api/product/`, formData)
            .then(res => {
                console.log(res.data);
                alert("success")
                props.history.push("/index");
            });
    }
    const onSubmitHome = (e) => {
        props.history.push("/index")
    }
    return (
        <div class="content-wrapper">
            <section class="content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">เพิ่มอุปกรณ์</h3><br></br>
                            </div>
                            <form onSubmit={onSubmit} role="form" >
                                <div class="box-body">
                                    <div class="form-group">
                                        <label>ชื่ออุปกรณ์</label>
                                        <input class="form-control" type="text" value={data.product_name} name="product_name" onChange={handle}></input>
                                    </div>
                                    <div class="form-group">
                                        <label>หมวดหมู่อุปกรณ์</label>
                                        <select class="form-control" name="product_type" id="product_type" value={data.product_type} onChange={handle}>
                                            <option value=""></option>
                                            <option value="กลุ่มทำสื่อ">กลุ่มทำสื่อ</option>
                                            <option value="กลุ่มเครื่องมือ">กลุ่มเครื่องมือ</option>
                                            <option value="อุปกรณ์อื่นๆ">อุปกรณ์อื่นๆ</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>รหัสอุปกรณ์</label>
                                        <input class="form-control" type="text" value={data.product_number} name="product_number" onChange={handle}></input>
                                    </div>
                                    <div>
                                        รูปภาพอุปกรณ์
                                        <input type="file"  name="product_picture" onChange={handlePicture} />
                                    </div>
                                    {/* <div>
                                        <label>UploadImage</label>
                                        <ImageUploading value={data.product_picture} name="product_picture" multiple onChange={onChange}>
                                            {({ imageList, onImageUpload }) => (
                                                <div className="upload__image-wrapper">
                                                    <button onClick={onImageUpload}>Upload images</button>&nbsp;
                                                    {imageList.map(image => (
                                                        <div key={image.key} className="image-item">
                                                            <img src={image.dataURL} alt="" width="100" />
                                                            <div className="image-item__btn-wrapper">
                                                                <button onClick={image.onRemove}>Remove</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </ImageUploading>
                                    </div> */}
                                    <div class="form-group">
                                        <label>รายละเอียดอุปกรณ์</label>
                                        <textarea class="form-control" type="text" value={data.product_details} name="product_details" onChange={handle}></textarea>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <Button type="submit" variant="contained" color="primary">submit</Button>
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