import React, { useState, useEffect } from "react";
import API from "../api";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

export default function Menu(props) {

  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  const [name, setName] = useState([]);

  useEffect(() => {
    API.post(`api/details/`).then((res) => {
      console.log("setcon", res.data.user);
      setName(res.data.user);
    });
  }, []);
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image" >
           
            <img
                className="img-circle elevation-5 "
                src={"http://127.0.0.1:8000/storage/" + name.name_picture}  
                alt={name.id}
              />

            </div>
            <div className="info">
              <a className="d-block">{name.name + " " + name.last_name} </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              {/* addmin */}
              {name.person_type === "เจ้าหน้าที่" ? (
                <li className="nav-item has-treeview">
                  <a href="/index" className="nav-link">
                    <i className="nav-icon fas fa-ambulance" />
                    <p>อุปกรณ์</p>
                  </a>
                </li>
              ) : (
                ""
              )}

              {/* {name.person_type === "เจ้าหน้าที" ? (
                <li className="nav-item has-treeview">
                  <a href="/Request" className="nav-link">
                    <i className="nav-icon fas fa-check-square" />
                    <p>คำร้องขอยืมอุปกรณ์</p>
                  </a>
                </li>
              ) : (
                ""
              )} */}

              {name.person_type === "เจ้าหน้าที่" ? (
                <li className="nav-item has-treeview">
                  <a href="/PrepareEquipment" className="nav-link">
                    <i className="nav-icon fas fa-people-carry" />
                    <p>คำร้องขอยืมอุปกรณ์</p>
                  </a>
                </li>
              ) : (
                ""
              )}

              {name.person_type === "เจ้าหน้าที่" ? (
                <li className="nav-item has-treeview">
                  <a href="/Managemembers" className="nav-link">
                    <i className="nav-icon fas 	far fa-address-book" />
                    <p>จัดการสมาชิก</p>
                  </a>
                </li>
              ) : (
                ""
              )}

              {name.person_type === "เจ้าหน้าที่" ? (
                <li className="nav-item has-treeview">
                  <a href="/Returndevice" className="nav-link">
                    <i className="nav-icon fas fa-file-export" />
                    <p>คืนอุปกรณ์</p>
                  </a>
                </li>
              ) : (
                ""
              )}

                {name.person_type === "เจ้าหน้าที่" ? (
                <li className="nav-item has-treeview">
                  <a href="/history" className="nav-link">
                    <i className="nav-icon fas fa-file-powerpoint" />
                    <p>ประวัติการยืม</p>
                  </a>
                </li>
              ) : (
                ""
              )}

              {/* user และ อาจารย์ */}
              {name.person_type === "ผู้ใช้ทั่วไป" ? (
                <li className="nav-item has-treeview">
                  <a href="/studenthome" className="nav-link">
                    <i className="nav-icon 	fas fa-store-alt" />
                    <p>หน้าอุปกรณ์</p>
                  </a>
                </li>
              ) : (
                ""
              )}

                {/* {/* {name.person_type === "ผู้ใช้ทั่วไป" ? (
                <li className="nav-item has-treeview">
                  <a href="/BasketPD" className="nav-link">
                    <i className="nav-icon fas fa-check-square" />
                    <p>ตะกร้าอุปกรณ์</p>
                  </a>
                </li>
              ) : (
                "" */}
              

                {name.person_type === "ผู้ใช้ทั่วไป" ? (
                <li className="nav-item has-treeview">
                  <a href="/Devicestatus" className="nav-link">
                    <i className="nav-icon fas fa-truck" />
                    <p>สถานะอุปกรณ์</p>
                  </a>
                </li>
              ) : (
                ""
              )}
                 

              

              {/* {name.person_type === 1 && 2 ?<li className="nav-item has-treeview">
                <a href="/index" className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>อุปกรณ์ที่เลือก</p>
                </a>
              </li> : ""}

              {name.person_type === 1 && 2 ?<li className="nav-item has-treeview">
                <a href="/index" className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>สถานะอุปกรณ์</p>
                </a>
              </li> : ""}
              {name.person_type === 1 && 2 ?<li className="nav-item has-treeview">
                <a href="/index" className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>ประวัติการยืม</p>
                </a>
              </li> : ""} */}

              <li className="nav-header">----------------------------------</li>
              {/* <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    ตั้งค่า
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li> */}
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-share-square" />
                  <p>ออกจากระบบ</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
