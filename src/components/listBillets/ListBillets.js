import React from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';



// exemlpe avec table modifier et supprimer ne fonctionne pad
function ListBillets({billets}){

const columns = [
  {
    title: 'departure',
    dataIndex: '0',
    key: 'departure',
  },
  {
    title: 'arrival',
    dataIndex: '1',
    key: 'arrival',
  },
  {
    title: 'price',
    dataIndex: '2',
    key: 'price',
  },
  {
    title: 'vclass',
    dataIndex: '3',
    key: 'vclass',
  },
];


return(<Table columns={columns} dataSource={billets} />)
}
export default ListBillets;