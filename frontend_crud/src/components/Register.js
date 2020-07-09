import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import API from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://image.makewebeasy.net/makeweb/0/GEWsYFxlc/shop%20design%20/Getjet_Mobile_IT_2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Register(props) {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
    last_name: "",
    phone_number: "",
    company: "",
    position: "",
  });
  const [picture, setPicture] = useState("");
  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const [picture2, setPicture2] = useState("");
  const handlePicture2 = (e) => {
    setPicture2(e.target.files[0]);
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name_picture", picture);
    formData.append("ssn_picture", picture2);
    formData.append("company", data.company);
    formData.append("position", data.position);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("c_password", data.c_password);
    formData.append("last_name", data.last_name);
    formData.append("phone_number", data.phone_number);
    API.post(`api/register/`, formData).then((res) => {
      console.log(res.data);
      alert("success");
      props.history.push("/");
    });
  };
  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form onSubmit={onSubmit} className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="company"
                  label="องค์กร"
                  type="องค์กร"
                  id="องค์กร"
                  value={data.company}
                  onChange={handle}
                  autoComplete="องค์กร"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="position"
                  label="ตำแหน่ง"
                  type="ตำแหน่ง"
                  id="ตำแหน่ง"
                  value={data.position}
                  onChange={handle}
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
                value={data.email}
                onChange={handle}
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
                value={data.password}
                onChange={handle}
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="c_password"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                value={data.c_password}
                onChange={handle}
                autoComplete="comfirm-password"
              />
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="First Name"
                  type="First Name"
                  id="First Name"
                  value={data.name}
                  onChange={handle}
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="last_name"
                  label="Last Name"
                  type="Last Name"
                  id="Last Name"
                  value={data.last_name}
                  onChange={handle}
                  autoComplete="lname"
                />
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phone_number"
                label="Phone Number"
                type="Phone"
                id="Phone"
                value={data.phone_number}
                onChange={handle}
                autoComplete="current-phone"
              />
              <div>
                รูปบัตรประชาชน
                <input
                  type="file"
                  name="name_picture"
                  onChange={handlePicture}
                />
              </div>
              <div>
                รูปถ่ายปัจจุบัน
                <input
                  type="file"
                  name="ssn_picture"
                  onChange={handlePicture2}
                />
              </div>
              {/* <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ฉันอ่านและเข้าใจกฎแล้ว"
            />
            </Grid> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"></Link>
                </Grid>
              </Grid>
            </Grid>
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
