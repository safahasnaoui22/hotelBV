import "./register.css";
import React from "react";
import useSignup from "../hooks/useSignup";
import { Alert, Button, Card, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";

function Register() {
    const { loading, error, registerUser } = useSignup();

    const handleRegister = (values) => {
        registerUser(values);
    };

    return (
        <Card className="form-container">
            <div className="flex-container">
                <div className="form-section">
                   
                      <h1 className="authtitle font-primary text-[45px]">  Create an account</h1> 
                    
                    <Typography.Title type="secondary" strong className="slogan">
                        Join for exclusive access!
                    </Typography.Title>

                    <Form
                        layout="vertical"
                        onFinish={handleRegister}
                        autoComplete="off"
                        className="form"
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your full name",
                                },
                            ]}
                        >
                            <Input size="large" placeholder="Enter your full name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email",
                                },
                                {
                                    type: "email",
                                    message: "The input is not valid email",
                                },
                            ]}
                        >
                            <Input size="large" placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password",
                                },
                            ]}
                        >
                            <Input.Password size="large" placeholder="Enter your password" />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="passwordConfirm"
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password",
                                },
                            ]}
                        >
                            <Input.Password
                                size="large"
                                placeholder="Re-enter your password"
                            />
                        </Form.Item>

                        {error && <Alert description={error} type="error" showIcon closable />}
<div className="button-container">
<Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                className={`btnL ${loading ? "loading" : ""}`}
                            >
                                {loading ? <Spin /> : "Create Account"}
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link to="/login">
                                <Button size="large" className="btnL">
                                    Sign In
                                </Button>
                            </Link>
                        </Form.Item>
</div>
                    
                    </Form>
                </div>

                <div className="image-section">
                    <img
                        className="auth-image"
                        src="https://th.bing.com/th/id/R.f3849fca66d143332683fa74ccbc3413?rik=T6IwDsVacjpoEw&pid=ImgRaw&r=0"
                        alt="Authentication"
                    />
                </div>
            </div>
        </Card>
    );
}

export default Register;
