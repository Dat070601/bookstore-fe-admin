import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Switch } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
          <Switch>
          <Route exact path="/">
            {/* Thêm component cho trang chủ ở đây */}
          </Route>
          <Route path="/order">
            {/* Thêm component cho quản lý đơn hàng ở đây */}
          </Route>
          <Route path="/category">
            {/* Thêm component cho quản lý danh mục ở đây */}
          </Route>
          <Route path="/product">
            {/* Thêm component cho quản lý sản phẩm ở đây */}
          </Route>
          <Route path="/dashboard">
            {/* Thêm component cho chỉ số ở đây */}
          </Route>
          <Route path="/finance">
            {/* Thêm component cho tài chính ở đây */}
          </Route>
          <Route path="/info">
            {/* Thêm component cho thông tinshop ở đây */}
          </Route>
          <Route path="/logout">
            {/* Thêm component cho đăng xuất ở đây */}
          </Route>
        </Switch>
        <Navbar />
    </div>
  )
}

export default Dashboard