import React, { useState, useEffect } from "react";
import API from "../api";
import styled from "styled-components";
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
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Warpper = styled.div`
  width: 100%;
`;


export default function Returndevice(props) {

    const handleOnclickEdit = (id) => {
        console.log(id);
        props.history.push("/Retureproduct/" + id);
      };

     
    
    
      function statusTotext(send) {
        if (send.send_back == 1){
          return "คืนตามกำหนด"
        }
        if (send.send_back == 2){
            return "เกินกำหนดเวลาคืน"
          }
        else{
          return "ยังไม่คืน"
        }
      };
      const columns = [
        // {
        //   name: "รูป",
        //   selector: "product_picture",
        //   sortable: true,
        // },
        {
            name: "ชื่อผู้ยืม",
            selector: "name",
            sortable: true,
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
            name: "เวลาที่ทำการขอยืม",
            cell: row => (moment(row.created_at).format('LL')),
            sortable: true,
          },
      
          {
            name: "ระยะเวลาการยืม",
            selector: "lend_day",
            sortable: true,
          },
      
        //   {
        //       name: "สถานะ",
        //       selector: "send_back",
        //       sortable: true,
        //     },

        //     {
        //         name: "สภาพอุปกรณ์",
        //         selector: "status_p",
        //         sortable: true,
        //       },

        {
          name: "คืน",
          center: true,
          cell: (row) => (
            <EditButton  onClick={() => handleOnclickEdit(row.id)}  >คืน</EditButton>
          ),
        },

    ];
        const [data, setData] = useState([]);

        useEffect(() => {
          API.get(`api/lendproduct/`).then((res) => {
            console.log(res.data);
            for(let i of res.data){
              i.send_back = statusTotext(i);
            }
            setData(res.data);
          });
        }, []);

   
      

    return (
        <div className="content-wrapper">
          <h3>คืนอุปกรณ์</h3>
        <DataTable
     
          columns={columns}
          data={data}
        />
      </div>
    );
}

