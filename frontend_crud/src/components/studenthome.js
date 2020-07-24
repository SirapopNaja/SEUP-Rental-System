import React, { useState, useEffect } from "react";
import API from "../api";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import "./App.css";

const Button = styled.button`
  background: #339fff;
  font-size: 15px;
  margin-left: 160%;
  color: white;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  background: red;
  color: white;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const EditButton = styled.button`
  background: green;
  color: white;
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButton2 = styled.button`
  background: red;
  color: white;
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Warpper = styled.div`
  width: 100%;
`;

export default function Studenthome(props) {

  const handleOnclickEdit = (id) => {
    console.log(id);
    props.history.push("/Basket/" + id);
  };
   


  function statusTotext(status) {
    if (status.status_id == 1){
      return "ว่าง"
    }
    else{
      return "ไม่ว่าง"
    }
  };
  const columns = [
    // {
    //   name: "รูป",
    //   selector: "product_picture",
    //   sortable: true,
    // },
    {
      name: "รูป",
      cell: (row) => (
        <img src={"http://127.0.0.1:8000/storage/" + row.product_picture} alt={row.product_name} height="80" width="80" />
      )

    },
    {
      name: "อุปกรณ์",
      selector: "product_name",
      sortable: true,
    },
    {
      name: "ประเภท",
      selector: "product_type",
      sortable: true,
    },
    {
      name: "รหัสอุปกรณ์",
      selector: "product_number",
      sortable: true,
    },
    {
      name: "ระยะเวลาในการยืม",
      selector: "lend_day",
      sortable: true,
    },
    {
      name: "Status",
      center: true,
      cell: (row) => (
      <div> {  row.status_id === "ว่าง" ? <EditButton onClick={() => handleOnclickEdit(row.id)}>Available</EditButton> :   
            <EditButton2 >Unavailable</EditButton2> }</div>
      ),
    },
 
    // {
    //   name: "Test",
    //   center: true,
    //   cell: (row) => (
    //     <div class="input-group">
    //       <input type="button" value="-" class="button-minus" data-field="quantity"/>
    //       <input type="number" step="1" max="" value="0" name="quantity" class="quantity-field"/>
    //       <input type="button" value="+" class="button-plus" data-field="quantity"/>
    //     </div>
    //   ),
    // },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(`api/product/`).then((res) => {
      console.log(res.data);
      for(let i of res.data){
        i.status_id = statusTotext(i);
      }
      setData(res.data);
    });
  }, []);
 

  return (
    <div className="content-wrapper">
      <DataTable
   
        columns={columns}
        data={data}
      />
    </div>
  );
}
