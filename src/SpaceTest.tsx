import Space from './space';
import './SpaceTest.css';

const SpaceTest = () => (
  <Space direction="horizontal" size="small" align="baseline" style={{height:'200px'}} split={<div className="box" style={{background: 'red'}}></div>} wrap={false}>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
  </Space>
);

export default SpaceTest;