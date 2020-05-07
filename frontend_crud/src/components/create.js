import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ImageUploading from "react-images-uploading";
import "./styles.css";
import API from '../api'

export default function Create(props) {
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
        e.preventDefault();
        API.post(`api/product/`, data)
            .then(res => {
                console.log(res.data);
            });
        props.history.push("/")
    }
    const onSubmitHome = (e) => {
        props.history.push("/")
    }
    return (
        <div className="content-wrapper">
            <form onSubmit={onSubmit}>
                <div >
                    ชื่ออุปกรณ์
                <input type="text" value={data.product_name} name="product_name" onChange={handle} />
                </div>
                <div>
                    เลือกหมวดหมู่ให้ตรงกับสินค้า
                <select name="product_type" id="product_type" value={data.product_type} onChange={handle}>
                        <option value=""></option>
                        <option value={data.product_name} label={data.product_name}></option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>

                    </select>
                </div>
                <div>
                    จำนวนอุปกรณ์
                <input type="number" value={data.product_number} name="product_number" onChange={handle} />
                </div>
                <div>
                    รูปภาพอุปกรณ์
                <input type="text" value={data.product_picture} name="product_picture" onChange={handle} />
                </div>
                {/* <ImageUploading value={data.product_picture} name="product_picture" onChange={onChange}>
                    {({ imageList, onImageUpload }) => (
                        <div className="upload__image-wrapper">อัพโหลดรูปภาพ
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
                </ImageUploading> */}
                <div>
                    รายละเอียดอุปกรณ์
                <input type="text" value={data.product_details} name="product_details" onChange={handle} />
                </div>
                <button type="submit" onClick={onSubmit}>submit</button>
                <button type="submit" onClick={onSubmitHome}>home</button>
            </form>

        </div>
    )
}
