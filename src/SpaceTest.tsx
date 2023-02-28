import Space from './space';
import './SpaceTest.css';
import { ConfigContext, defaultGetPrefixCls,  } from './space/config-provider';
import React from 'react';


const SpaceTest = () => (
  <ConfigContext.Provider value={
    {
      getPrefixCls: defaultGetPrefixCls,
      space: { size: 'large'}
    }
  }>
    <Space 
      direction="horizontal"
      align="end" 
      style={{height:'200px'}}
      split={<div className="box" style={{background: 'red'}}></div>} 
      wrap={true}
    >
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </Space>
    <Space 
      direction="horizontal"
      align="end" 
      style={{height:'200px'}}
      split={<div className="box" style={{background: 'red'}}></div>} 
      wrap={true}
    >
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </Space>
  </ConfigContext.Provider>
);

export default SpaceTest;