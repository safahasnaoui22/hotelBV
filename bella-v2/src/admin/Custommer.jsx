import React, { useState } from "react";

function Customer() {
    const newCustomers = [
        { name: 'John Doe', email: 'john.doe@example.com', avatar: 'https://th.bing.com/th/id/OIP.jI6fmqUnnghWqhb9Fcna4AAAAA?rs=1&pid=ImgDetMain' },
        { name: 'Jane Smith', email: 'jane.smith@example.com', avatar: 'https://th.bing.com/th/id/OIP.cMMK93lLGQnUYe3BNtVcYgAAAA?rs=1&pid=ImgDetMain' },
        { name: 'Alice Johnson', email: 'alice.johnson@example.com', avatar: 'https://th.bing.com/th/id/OIP.cMMK93lLGQnUYe3BNtVcYgAAAA?rs=1&pid=ImgDetMain' },
        { name: 'Bob Brown', email: 'bob.brown@example.com', avatar: 'https://th.bing.com/th/id/OIP.cMMK93lLGQnUYe3BNtVcYgAAAA?rs=1&pid=ImgDetMain' },
        { name: 'Emily Wilson', email: 'emily.wilson@example.com', avatar: 'https://th.bing.com/th/id/OIP.cMMK93lLGQnUYe3BNtVcYgAAAA?rs=1&pid=ImgDetMain' }
    ];

    const [menuOpen, setMenuOpen] = useState(null);

    const handleMenuClick = (index) => {
        setMenuOpen(index === menuOpen ? null : index);
    };

    return (
        <div className="customer">
            <div className="custinner">
                <div className="cardc">
                    {newCustomers.map((customer, index) => (
                        <div key={index} className="customercomponent">
                            <img src={customer.avatar} alt={customer.name} className="avatar" />
                            <div>
                                <p>{customer.name}</p>
                                <p>{customer.email}</p>
                                <hr className="line" />
                            </div>
                            <button className="menu-button" onClick={() => handleMenuClick(index)}>
                                &#8942;
                            </button>
                            {menuOpen === index && (
                                <div className="menu">
                                    <p>Settings</p>
                                    <p>Push Notification</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Customer;
