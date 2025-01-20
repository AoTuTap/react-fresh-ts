import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Divider, Form, Input } from 'antd';
import './register.scss'
import { Link } from 'react-router-dom';

type FieldType = {
    fullName: string,
    email: string,
    password: string,
    phone: string
};



// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };

const RegisterPage: React.FC = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log(values)
    };

    return (
        <div className='register-page '>
            <main className="main">
                <div className="container">
                    <section className='wrapper'>
                        <div className='heading'>
                            <h2 className='text text-large'>Đăng ký tài khoản</h2>
                            <Divider />
                        </div>
                        <Form
                            name="form-register"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} //whole column
                                label="Họ tên"
                                name="fullName"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} //whole column
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} //whole column
                                label="Mật Khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} //whole column
                                label="Số điện thoại"
                                name="phone"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit" loading={isSubmit}>
                                    Đăng ký
                                </Button>
                            </Form.Item>
                            <Divider>Or</Divider>
                            <p className="text text-normal" style={{ textAlign: "center" }}>
                                Đã có tài khoản ?
                                <span>
                                    <Link to='/login' > Đăng Nhập </Link>
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
        </div>

    )
}


export default RegisterPage;
