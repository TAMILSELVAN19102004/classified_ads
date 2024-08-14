import React, { useState, useEffect } from 'react';
import '../Profile/Profile.css';

const Profile = ({ toggle }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await response.json();
                setProfileData({
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    address: `${data.address.street}, ${data.address.city}`,
                });
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        const fetchUserPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
                const postsData = await response.json();
                const postsWithImages = postsData.map(post => ({
                    id: post.id,
                    title: post.title,
                    imageUrl: post.thumbnailUrl,
                }));
                setMyPosts(postsWithImages);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        fetchProfileData();
        fetchUserPosts();
    }, []);

    const handleEditToggle = () => {
        if (isEditing) {
            console.log('Saving profile data:', profileData);
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="unique-profile-container">
            <div className="unique-profile-header">
                <div className="unique-profile-image-section">
                    <img src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="Profile" className="unique-profile-img" />
                </div>
                <div className="unique-account-details">
                    <h2>Account Details</h2>
                </div>
            </div>

            <div className="unique-profile-info">
                <div className="unique-detail-item">
                    <strong>Name: </strong>
                    {isEditing ? (
                        <input name="name" value={profileData.name} onChange={handleChange} className="unique-profile-input" />
                    ) : (
                        profileData.name
                    )}
                </div>
                <div className="unique-detail-item">
                    <strong>Address: </strong>
                    {isEditing ? (
                        <input name="address" value={profileData.address} onChange={handleChange} className="unique-profile-input" />
                    ) : (
                        profileData.address
                    )}
                </div>
                <div className="unique-detail-item">
                    <strong>Phone: </strong>
                    {isEditing ? (
                        <input name="phone" value={profileData.phone} onChange={handleChange} className="unique-profile-input" />
                    ) : (
                        profileData.phone
                    )}
                </div>
                <div className="unique-detail-item">
                    <strong>Email: </strong>
                    {isEditing ? (
                        <input name="email" value={profileData.email} onChange={handleChange} className="unique-profile-input" />
                    ) : (
                        profileData.email
                    )}
                </div>
            </div>

            <div className="unique-my-posts">
                <h3>My Posts</h3>
                <div className="unique-posts-container">
                    {myPosts.length > 0 ? (
                        myPosts.map(post => (
                            <div key={post.id} className="unique-post-item">
                                <img src={post.imageUrl} alt={post.title} className="unique-post-image" />
                                <h4>{post.title}</h4>
                            </div>
                        ))
                    ) : (
                        <p>No posts yet.</p>
                    )}
                </div>
            </div>

            <div className="unique-profile-footer">
                <button className="unique-btn unique-close" onClick={toggle}>Close</button>
                <button className="unique-btn unique-edit" onClick={handleEditToggle}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>
        </div>
    );
};

export default Profile;
