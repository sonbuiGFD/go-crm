import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import WorkFlow from './components/WorkFlow';
import Infomation from './components/Infomation';
import TaskStatus from './components/TaskStatus';

import './style.scss';

const TaskDetail = () => {
  let { id } = useParams();

  useEffect(() => {
    // if (!id) {
    //   history.push('/admin');
    //   return;
    // }
  }, [id]);

  return (
    <div className="invoice__page">
      <h2 className="page__title mb-4">TASK #{id}</h2>
      <TaskStatus />
      <Infomation />
      <WorkFlow />
    </div>
  );
};

export default memo(TaskDetail);
