import React from 'react'

export default function Menu() {
    return (
      <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item">
            <a href="/index" className="nav-link">
              <i className="nav-icon fas fa-home" />
              <p>
                อุปกรณ์
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="/Request" className="nav-link">
              <i className="nav-icon fas fa-check-square" />
              <p>
                คำร้องขอยืมอุปกรณ์
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="/PrepareEquipment" className="nav-link">
              <i className="nav-icon fas fa-truck " />
              <p>
                จัดเตรียมอุปกรณ์
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="/Managemembers" className="nav-link">
              <i className="nav-icon fas fa-address-card" />
              <p>
                จัดการสมาชิก
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="/Returndevice" className="nav-link">
              <i className="nav-icon fas fa-address-card" />
              <p>
                คืนอุปกรณ์
              </p>
            </a>
          </li>
         
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-calendar-alt" />
              <p>
                ตั้งค่า
                <span className="badge badge-info right">2</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                ออกจากระบบ
              </p>
            </a>
          </li>
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

    )
}
