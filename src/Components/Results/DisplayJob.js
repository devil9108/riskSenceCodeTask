import React from 'react';
import { Row, Col, Divider, Tag } from 'antd';
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/lib/typography/Paragraph";
import {ReactComponent as Building} from './furniture-and-household.svg';
import {EnvironmentOutlined} from '@ant-design/icons'

export default function DisplayJob(props){

  let requiredSkills = props.data.requiredSkills.split(',');

  const capsuleFunction = () => {
    let color;
    if(props.data.jobType === 'Full Time'){
      color = '#57d48e';
    }else{
      color = '#ffc04d'
    }
    return {
      backgroundColor: color,
      marginLeft: '10px',
      padding: '0 10px',
      borderRadius: '16px',
      marginBottom: '5px',
      color:'white',
      fontWeight: 600
    }
  }

  return(
    <>
    <Row key={props.data.id} justify={"space-between"}>
      <Col>
        <Title level={3} style={{display:'inline'}}>{props.data.title}</Title>
        <Tag style={capsuleFunction()}>{props.data.jobType}</Tag>
      </Col>
      <Col>
        <Title level={4} style={{textAlign:'right'}}>&#x20b9; {props.data.salarymin} - {props.data.salarymax} / hr</Title>
      </Col>
    </Row>
    <Row>
      <Building style = {{ width: '15px'}}/>
      <Text style={{color:'#8eb6d8',fontWeight:600, margin:'0px 10px'}}>Epic Coders</Text>
      <EnvironmentOutlined style={{margin:'0px', color:'#8eb6d8', paddingTop:'3px', width:'20px'}} />
      <Text strong type='secondary'>{props.data.location}</Text>
    </Row>
    <Row style={{margin:'20px 0px'}}>
      <Paragraph>
        {props.data.desciption}
      </Paragraph>
    </Row>
    <Row>
      <Col>
        {requiredSkills.map((skill,index) => (
          <Tag style={{borderRadius:'16px'}} key={index}><Text style={{fontSize:'16px'}}>{skill}</Text></Tag>
        ))}
      </Col>
    </Row>
    <Divider />

    </>
  );
}