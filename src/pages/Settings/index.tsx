import React from 'react';
import { Card } from 'antd';
import './style.scss';

const gridStyle: React.CSSProperties = {
  width: '50%',
  textAlign: 'center',
  cursor: 'pointer',
};

function Settings() {
  return (
    <div className="settings__page">
      <div className="settings__content">
        <Card title="Settings">
          <Card.Grid style={gridStyle}>Roles</Card.Grid>
          <Card.Grid style={gridStyle}>Permissions</Card.Grid>
          <Card.Grid style={gridStyle}>System</Card.Grid>
          <Card.Grid style={gridStyle}>Notification</Card.Grid>
        </Card>
      </div>
    </div>
  );
}

export default Settings;
