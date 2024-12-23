import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Typography } from "antd";
import { useAuth } from "../context/AuthContext.jsx";

function Profile() {
    const { userData, logout } = useAuth();
    
    // Check if userData exists before accessing its properties
    const userName = userData ? userData.name : '';
    const userEmail = userData ? userData.email : '';
    const userRole = userData ? userData.role : '';

    const handleLogout = async () => {
        await logout();
    };

    return (
        <Card className='profile-card'>
            <Flex vertical gap="small" align='center'>
                <Avatar size={150} icon={<UserOutlined />} />
                <Typography.Title level={2} strong className="username">
                    {userName}
                </Typography.Title>

                <Typography.Text type="secondary" strong>
                    Email : {userEmail}
                </Typography.Text>

                <Typography.Text type="secondary">
                    Role : {userRole}
                </Typography.Text>

                <Button size='large' type='primary'
                    className='profile-btn'
                    onClick={handleLogout}>Logout</Button>
            </Flex>

        </Card>
    );
}

export default Profile;