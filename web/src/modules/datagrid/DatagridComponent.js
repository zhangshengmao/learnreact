
import React, {Component} from 'react'
import { Table , Input, Icon, Button, Popconfirm } from 'antd';
import http from '../../utils/HttpClient';
import * as DataGridAction from "./DataGridAction.js";
import AddComponent from "./AddComponent";
import addScss from "./add.scss";
import ZH_CN from "./ZH-CN.js";


const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

var titles = [];
export default class DatagridComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            thead: [],
            data: [],
            pagination: {},
            loading: false,
            showAdd:'none'
        };
    }
    handleTableChange = (pagination, filters, sorter) => {

      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
        pagination: pager
      });
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        ...filters
      })
    }
      
      fetch = (params = {}) => {
        this.setState({ loading: true });
        http.get(this.props.url,{
            results: 10,
            ...params
          }).then((res) => {
            var res = JSON.parse(res);
            var datas = res;
            var total = res.total
            var columns = [];
            datas.forEach(function(item,idx){
              item['key'] = String(idx);
            })
            if(this.props.title){
              titles =this.props.title.split(',');
            }else{
              for(var attr in datas[0]){
                  titles.push(attr)
              }
            }
            for (let i = 0; i < titles.length; i++) {
              var c_titles = ZH_CN[titles[i]];
              columns.push({
                title: c_titles,
                dataIndex: titles[i],
                key: titles[i],
                render: (text, record) => this.renderColumns(text, record, titles[i]),
              });
            }
            columns.push(
                {
                    title: '删除',
                    dataIndex: 'delete',
                    render: (text, record, index) => {
                    return (
                        this.state.data.length > 0  ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                            <a href="#">删除</a>
                            </Popconfirm>
                        ) : null
                    )}
                }  
            )
            columns.push(
                {
                    title: '修改',
                    dataIndex: 'update',
                    render: (text, record) => {
                      const { editable } = record;
                      return (
                        <div className="editable-row-operations">
                          {
                            editable ?
                              <span>
                                <a onClick={() => this.save(record.key)}>Save</a>
                                <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                                  <a>Cancel</a>
                                </Popconfirm>
                              </span>
                              : <a onClick={() => this.edit(record.key)}>修改</a>
                          }
                        </div>
                    )}
                }  
            )
            const pagination = { ...this.state.pagination };
            pagination.total = total;
            this.setState({
                loading: false,
                data: datas,
                thead : columns,
                pagination
            })
        })
      }
      onDelete = (index) => {

        const data = this.state.data;

        http.get(this.props.delete_url,`id=${data[index].id}`).then(()=>{
          this.setState({ data: data.filter(item => item !== data[index]) });
        })
      }
      handleAdd = () => {
        this.setState({showAdd:"block"})
      }

      renderColumns(text, record, column) {
        return (
          <EditableCell
            editable={record.editable}
            value={text}
            onChange={value => this.handleChange(value, record.key, column)}
          />
        );
      }
      handleChange(value, key, column) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.setState({ data: newData });
        }
      }
      edit(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target.editable = true;
          this.setState({ data: newData });
        }
      }
      save(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        var str = '';
        for (let i = 0; i < titles.length; i++) {
            for(var item in newData[key]){
              if(item==titles[i]){

                str += `${item}=${newData[key][titles[i]]}&`;
              }
            }
        }
        str += `id=${newData[key].id}`
        http.get(this.props.update_url,str).then(
          
        )
        console.log(str)
        console.log(newData)
        if (target) {
          delete target.editable;
          this.setState({ data: newData });
          this.cacheData = newData.map(item => ({ ...item }));
        }
      }
      cancel(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.setState({ data: newData });
        }
      }



      componentDidMount() {
        this.fetch();
      }
      render() {
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd.bind(this)}>Add</Button>
                <br/>
                <Table columns={this.state.thead}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />
                <div style={{display:this.state.showAdd}} className="addCom" >
                  <AddComponent  addUrl={this.props.url} data={this.state.data}/>
                </div>
                
            </div>
        )
    }
}




