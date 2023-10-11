import React, { useEffect, useState } from 'react';
import { Input, Button, Modal, Form, Select } from 'antd';
import './style.scss';
import { useAppDispatch, useAppSelector } from 'store';
import { updateOpenModal, updateModalUser } from 'store/features/userSlide';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 19,
    },
  },
};

const UserModel = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.user.openModal);
  const modalUser = useAppSelector(state => state.user.modalUser);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(modalUser);
  }, [modalUser]);

  const onSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleCancel();
    }, 5000);
  };

  const handleCancel = () => {
    dispatch(
      updateModalUser({
        user_name: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
      }),
    );
    dispatch(updateOpenModal(false));
  };

  const options = [
    {
      label: 'invoice.view',
      value: 'invoice.view',
    },
    {
      label: 'invoice.edit',
      value: 'invoice.edit',
    },
    {
      label: 'invoice.create',
      value: 'invoice.create',
    },
    {
      label: 'task.view',
      value: 'task.view',
    },
    {
      label: 'task.edit',
      value: 'task.edit',
    },
    {
      label: 'task.create',
      value: 'task.create',
    },
    {
      label: 'user.view',
      value: 'user.view',
    },
    {
      label: 'user.edit',
      value: 'user.edit',
    },
    {
      label: 'user.create',
      value: 'user.create',
    },
    {
      label: 'agent.view',
      value: 'agent.view',
    },
    {
      label: 'agent.edit',
      value: 'agent.edit',
    },
    {
      label: 'agent.create',
      value: 'agent.create',
    },
  ];

  return (
    <Modal title={'Agent'} open={open} onCancel={handleCancel} footer={[]}>
      <Form {...formItemLayout} colon={false} form={form} onFinish={onSubmit} initialValues={modalUser}>
        <div className="">
          <div className="">
            <Form.Item
              name={'user_name'}
              label="User Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder={`Input user name`} />
            </Form.Item>
            <Form.Item
              name={'email'}
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder={`Input user email`} />
            </Form.Item>
            <Form.Item
              name={'phone'}
              label="Phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input placeholder={`Input user phone`} />
            </Form.Item>

            <Form.Item name={'address'} label="Address">
              <Input.TextArea placeholder={`Input user Address`} />
            </Form.Item>

            <Form.Item name={'notes'} label="Notes">
              <Input.TextArea placeholder={`Input user notes`} />
            </Form.Item>

            <Form.Item name={'permissions'} label="Permissions">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                options={options}
                placeholder="Please select"
              />
            </Form.Item>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="default" onClick={handleCancel} className="mr-3" loading={loading}>
              {'Cancel'}
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              {'Submit'}
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default UserModel;
