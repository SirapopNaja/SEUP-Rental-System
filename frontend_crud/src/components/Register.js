import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import ImageUploading from "react-images-uploading";
import "./styles.css";
import API from '../api'


export default function Register(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        API.post(`api/product/`, data)
            .then(res => {
                console.log(res.data);
            });
        props.history.push("/")
    }
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
    return (
        <div class="content-wrapper">
            <section class="content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">Register</h3><br></br>
                            </div>
                            <form role="form" >
                                <div class="box-body">
                                    <div class="form-group">
                                        <label>E-mail Adress</label>
                                        <input class="form-control" type="text"></input>
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control" type="text"></input>
                                    </div>
                                    <div class="form-group">
                                        <label>Comfirm Password</label>
                                        <input class="form-control" type="text"></input>
                                    </div>
                                    <div class="form-group">
                                        <label>ชื่อ</label>
                                        <input class="form-control" type="text" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label>นามสกุล</label>
                                        <input class="form-control" type="text" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label>เบอร์โทรศัพท์</label>
                                        <input class="form-control" type="text"></input>
                                    </div>
                                    <div>
                                        <label>บัตรประชาชน</label>
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
                                    </div>
                                    <div>
                                        <label>รูปปัจจุบัน</label>
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
                                    </div>
                                    <div class="form-group"><br></br>
                                        <input  type="checkbox" ></input>
                                        <label >มึงอ่านกฏแล้ว</label>
                                    </div>
                                    <button type="submit" onClick={onSubmit}>submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}