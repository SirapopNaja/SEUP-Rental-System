import React, { useState, useEffect } from "react";
import API from "../api";
import styled from "styled-components";
import { Userapi } from "../components/service/userapi";
import DataTable from "react-data-table-component";
import "./App.css";
import 'moment/locale/th';
import moment from 'moment';

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
  background: yellow;
  color: black;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton2 = styled.button`
  background: #339fff;
  color: white;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton3 = styled.button`
  background: green;
  color: white;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const EditButton = styled.button`
  background: green;
  color: white;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Warpper = styled.div`
  width: 100%;
`;

export default function Devivestatus(props) {
  function statusTotext(status) {
    if (status.status_id == 1) {
      return "อุปกรณ์พร้อมรับ";
    }
    if (status.status_id == 2) {
      return "กำลังดำเนินการ";
    } else {
      return "รับอุปกรณ์แล้ว";
    }
  }

  // const [name, setName] = useState([]);

  const [data, setData] = useState([]);

  const [number, setNumber] = useState(1);

  const [user] = Userapi();


  if (number === 1) {
    API.get(`api/lendproduct/` + user).then((res) => {
      console.log("lend", res.data);
      console.log("user", user);
      for (let i of res.data) {
        i.status_id = statusTotext(i);

      }
      setData(res.data);
      
    });
    setTimeout(() => {
      setNumber(0);
    
    }, 1500);
  }

  const columns = [
    // {
    //   name: "รูป",
    //   selector: "product_picture",
    //   sortable: true,
    // },
    {
      name: "รูป",
      cell: (row) => (
        <img
          src={"http://127.0.0.1:8000/storage/" + row.product_picture}
          alt={row.product_name}
          height="80"
          width="80"
        />
      ),
    },
    {
      name: "อุปกรณ์",
      selector: "product_name",
      sortable: true,
    },

    {
      name: "รหัสอุปกรณ์",
      selector: "product_number",
      sortable: true,
    },

    {
      name: "เวลายืม",
      cell: row => (moment(row.created_at).format('LL')),
      sortable: true,
    },

    {
      name: "ระยะเวลายืม",
      selector: "lend_day",
      sortable: true,
    },

    {
      name: "สถานะ",
      center: true,
    cell: (row) => (
         <div> {  row.status_id === "กำลังดำเนินการ" ? <DeleteButton >กำลังดำเนินการ</DeleteButton> :
                  row.status_id === "อุปกรณ์พร้อมรับ" ? <DeleteButton2 >อุปกรณ์พร้อมรับ</DeleteButton2>
              :   <DeleteButton3 >รับอุปกรณ์แล้ว</DeleteButton3> }
          
         </div>
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

  return (
    <div className="content-wrapper">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
