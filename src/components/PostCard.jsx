import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    let imageUrl;
    try {
        imageUrl = featuredImage ? appwriteService.getFilePreview(featuredImage) : null;
    } catch (error) {
        console.error("Failed to get image preview:", error);
        imageUrl = null; // Fallback image URL or null
    }

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className='rounded-xl' />
                    ) : (
                        <div className='rounded-xl bg-gray-200' style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span>No image available</span>
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
