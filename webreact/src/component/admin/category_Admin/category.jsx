import React, { Component } from 'react'
import "./category.css"

export class category extends Component {
    render() {
        return (
            <div>
                <div >
                   
                <h2 className="titlePage">Quản Lý Danh Mục Shop</h2>
                </div>
                <div className="listTable">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="15%">Mã Danh Mục</th>
                                <th >Tên Danh Mục</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Default</td>
                                <td>Defaultson</td>
                                
                            </tr>
                            <tr class="success">
                                <td>Success</td>
                                <td>Doe</td>
                                
                            </tr>
                            <tr class="danger">
                                <td>Danger</td>
                                <td>Moe</td>
                                
                            </tr>
                            <tr class="info">
                                <td>Info</td>
                                <td>Dooley</td>
                                
                            </tr>
                            <tr class="warning">
                                <td>Warning</td>
                                <td>Refs</td>
                                
                            </tr>
                            <tr class="active">
                                <td>Active</td>
                                <td>Activeson</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-danger" style={{float:"right",marginRight:"10px"}}>Thêm Danh Mục</button>
            </div>
            
        )
    }
}

export default category
