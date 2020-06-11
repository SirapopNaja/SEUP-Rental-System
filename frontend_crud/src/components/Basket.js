import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../api";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const DeleteButton = styled.button`
  background: red;
  color: white;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  background: #339fff;
  font-size: 15px;
  margin-left: 80%;
  color: white;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background: green;
  font-size: 15px;
  margin-left: 80%;
  color: white;
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Basket(props) {
  const [picture, setPicture] = useState(null);

  const classes = useStyles();
  const [data, setData] = useState({
    product_name: "",
    product_type: "",
    product_number: "",
    product_details: "",
  });
  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  useEffect(() => {
    const id = props.match.params.id;
    API.get(`api/product/` + id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [props]);

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("product_picture", picture);
    formData.append("product_name", data.product_name);
    formData.append("product_type", data.product_type);
    formData.append("product_number", data.product_number);
    formData.append("product_details", data.product_details);
    formData.append("_method", "put");
    const id = props.match.params.id;
    API.post(`api/product/` + id, formData).then((res) => {
      console.log(res.data);
      props.history.push("/index");
    });
  };

  const onRemove = (id) => {
    API.delete(`api/product/` + id).then((res) => {
      console.log(res.data);
      const myData = data.filter((item) => item.id !== id);
      setData(myData);
    });
  };
  const handleOnclickEdit = (id) => {
    console.log(id);
    props.history.push("/update/" + id);
  };

  const handleOnclickprepare = () => {
    props.history.push("/studenthome");
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <div className="content-wrapper">
      <br></br>
      <br></br>
      <h1>ยืมอุปกรณ์</h1>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={() => handleOnclickprepare()}>เลือกอุปกรณ์</Button>
      <br></br> <br></br>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>รูปภาพ</TableCell>
              <TableCell align="right">อุปกรณ์</TableCell>
              <TableCell align="right">รหัสอุปกรณ์</TableCell>
              <TableCell align="right">ลบ</TableCell>
              <TableCell align="right">{""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">
                  <DeleteButton
                    onClick={() => {
                      if (window.confirm) onRemove(row.id);
                    }}
                  >
                    ลบ
                  </DeleteButton>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>
      <section class="content">
        <div class="row">
          <div class="col-md-2">
            <div class="box box-primary">
              <div class="form-group">
                <label>กำหนดเวลาการยืม</label>
                <select
                  class="form-control"
                  name="person_type"
                  id="person_type"
                  value={data.person_type}
                  onChange={handle}
                >
                  <option value=""></option>
                  <option value="1">1 วัน</option>
                  <option value="2">2 วัน</option>
                  <option value="3">3 วัน</option>
                  <option value="4">4 วัน</option>
                  <option value="5">5 วัน</option>
                  <option value="6">6 วัน</option>
                  <option value="7">7 วัน</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <EditButton onClick={() => handleOnclickEdit()}>ยืนยัน</EditButton>
    </div>
  );
}
