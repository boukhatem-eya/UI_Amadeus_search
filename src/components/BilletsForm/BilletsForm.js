import React, { useState, useEffect } from "react";
import { Select, Button } from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import { SearchOutlined } from '@ant-design/icons';
import Axios from "axios"
import ListBillets from "../listBillets/ListBillets"

function BilletsForm (){
    const [loading, setLoading] = useState(false)
    const [billets, setBillet] = useState([])
    const { Option } = Select;
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState("")
    console.log('origin', origin);
    console.log('destination', destination);
    console.log('date', date)
    useEffect(() => {
      document.title = "Amadeus search"
    })

    const handleSearchBillets = async () => {
       
            //try {
              //setLoading(true)
              //const result = await searchBillets(date, origin, destination)
        //setBillets(result)
              //setLoading(false)
            //} catch (e) {
              //console.log("error")
            
          
        SearchBillets(date, origin, destination)
       
        
      }
const SearchBillets = async(date, origin, destination) => {
  try {
              setLoading(true)
  const result = await Axios.get(
    "https://devoxx2021-redhat-amadeus-contest-api.comwork.io/v1/amadeus?as_array=true&departure_date="+date+"&origin="+origin+"&destination="+destination
  )
    console.log(result.data.reverse())
    setBillet(result.data.reverse())
    console.log("bit", billets)
    setLoading(false)
            } catch (e) {
              console.log("error")
}}
    
    return (
        <div className="App">
            <h1>Amadeus search</h1>
            <label>Origin:</label>
            &nbsp;
            <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select origin"
    optionFilterProp="children"
    onChange={(value) => setOrigin(value)}
  >
    <Option value="CDG">Paris CDG</Option>
    <Option value="ORY">Paris Orly</Option>
    <Option value="TUN">Tunis</Option>
    <Option value="CMN">Casablanca</Option>
    <Option value="CAI">Cairo</Option>
    <Option value="MED">Madinah</Option>
    <Option value="JED">Djeddah</Option>
    <Option value="RUH">Riyadh</Option>
    <Option value="LCY">London</Option>
    <Option value="SXF">Berlin</Option>
    <Option value="SYD">Sydney</Option>
    <Option value="BKK">Bankok</Option>
    <Option value="SIN">Singapor</Option>
    <Option value="HKG">Hong Kong</Option>
  </Select>
  &emsp;
  <label>Distination:</label>
  &nbsp;
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select destination"
    optionFilterProp="children"
    onChange={(value) => setDestination(value)}
  >
    <Option value="CDG">Paris CDG</Option>
    <Option value="ORY">Paris Orly</Option>
    <Option value="TUN">Tunis</Option>
    <Option value="CMN">Casablanca</Option>
    <Option value="CAI">Cairo</Option>
    <Option value="MED">Madinah</Option>
    <Option value="JED">Djeddah</Option>
    <Option value="RUH">Riyadh</Option>
    <Option value="LCY">London</Option>
    <Option value="SXF">Berlin</Option>
    <Option value="SYD">Sydney</Option>
    <Option value="BKK">Bankok</Option>
    <Option value="SIN">Singapor</Option>
    <Option value="HKG">Hong Kong</Option>
  </Select>
  &emsp;
    <label>Departure date:</label>
    &nbsp;
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select date"
    optionFilterProp="children"
    onChange={(value) => setDate(value)}
  >
    <Option value="2022-01-17">2022-01-17</Option>
    <Option value="2022-01-18">2022-01-18</Option>
    <Option value="2022-01-19">2022-01-19</Option>
    <Option value="2022-01-20">2022-01-20</Option>
    <Option value="2022-01-21">2022-01-21</Option>
    <Option value="2022-01-22">2022-01-22</Option>
    <Option value="2022-01-23">2022-01-23</Option>
    <Option value="2022-01-24">2022-01-24</Option>
    <Option value="2022-01-25">2022-01-25</Option>
    <Option value="2022-01-26">2022-01-26</Option>
  </Select>
  &emsp;
  <Button type="primary" onClick={handleSearchBillets} icon={<SearchOutlined />}>
      Search
    </Button>
    <br/>
    <br/>
    <br/>
    {loading ? (
        <div>Loading ... </div>
      ) : (
        <ListBillets billets={billets} />
        )}
        </div>
    );
};

export default BilletsForm;