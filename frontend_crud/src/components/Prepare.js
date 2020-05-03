import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageUploading from "react-images-uploading";
import "./styles.css";
import API from '../api'



export default function Prepare(props) {
    const maxNumber = 69;
    const onChange = imageList => {
        console.log(imageList);
    };
    const [data, setData] = useState({
        product_name: "",
        product_type: "",
        product_number: "",
        product_picture: "",
        product_details: ""
    })
    const handle = (e) => {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData(newData)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        API.post(`api/product/`, data)
            .then(res => {
                console.log(res.data);
                alert("success")
            });
    }
    const onSubmitHome = (e) => {
        props.history.push("/")
    }
    return (
        <div class="content-wrapper">
            <section class="content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">Create Equipment</h3><br></br>
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
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>จำนวนอุปกรณ์</label>
                                        <input class="form-control" type="number" value={data.product_number} name="product_number" onChange={handle}></input>
                                    </div>
                                    <div>
                                        รูปภาพอุปกรณ์
                                        <input type="file" value={data.product_picture} name="product_picture" onChange={handle} />
                                    </div>
                                    {/* <div>
                                        <label>UploadImage</label>
                                        <ImageUploading value={data.product_picture} name="product_picture" multiple onChange={onChange} maxNumber={maxNumber}>
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
                                    <div class="col">
                                        <button type="submit" onClick={onSubmitHome}>home</button>
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