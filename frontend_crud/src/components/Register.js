import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import API from '../api'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://s.isanook.com/ns/0/rp/rc/w700h366/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTYxMS84MDU1MTg2L3ByYXl1dGgtZmlnaHQtY292aWQtMTktdG4uanBn.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function Register(props) {
    const classes = useStyles();
    const [picture, setPicture] = useState("") 
    const handlePicture = (e) =>{
        setPicture(e.target.files[0])
    }
    return (
        /*<div class="content-wrapper">
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
        </div>*/
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="องค์กร"
              label="องค์กร"
              type="องค์กร"
              id="องค์กร"
              autoComplete="องค์กร"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="ตำแหน่ง"
              label="ตำแหน่ง"
              type="ตำแหน่ง"
              id="ตำแหน่ง"
              autoComplete="ตำแหน่ง"
            />
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="confirmpassword"
              id="confirmpassword"
              autoComplete="comfirm-password"
            />
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="First Name"
              label="First Name"
              type="First Name"
              id="First Name"
              autoComplete="fname"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Last Name"
              label="Last Name"
              type="Last Name"
              id="Last Name"
              autoComplete="lname"
            />
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Phone"
              label="Phone Number"
              type="Phone"
              id="Phone"
              autoComplete="current-phone"
            />
            <div>
                รูปบัตรประชาชน
                <input type="file"  name="product_picture" onChange={handlePicture} />
            </div>
            <div>
                รูปถ่ายปัจจุบัน
                <input type="file"  name="product_picture" onChange={handlePicture} />
            </div>
            <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ฉันอ่านและเข้าใจกฎแล้ว"
            />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Read My Rule
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={5}>
          </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    );
}