import React, { useState } from 'react';
import './PostAd.css';

const PostElectronicsAd = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    type: '', 
    condition: '',
    warranty: '',
    adTitle: '',
    description: '',
    price: '',
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Electronics Ad Form data:', formData);
  };

  return (
    <div className="body-new">
      <main className="main-new">
        <form className="form-new" onSubmit={handleSubmit}>
          <h2>Post Ad</h2>
          <div className="form-group-new">
            <label>Brand</label>
            <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="form-group-new">
            <label>Model</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} required />
          </div>
          <div className="form-group-new">
            <label>Year</label>
            <input type="number" name="year" value={formData.year} onChange={handleChange} required />
          </div>
          <div className="form-group-new">
            <label>Type</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} required />
          </div>
          <div className="form-group-new">
            <label>Condition</label>
            <select name="condition" value={formData.condition} onChange={handleChange} required>
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Refurbished">Refurbished</option>
            </select>
          </div>
          <div className="form-group-new">
            <label>Warranty</label>
            <select name="warranty" value={formData.warranty} onChange={handleChange} required>
              <option value="">Select Warranty</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group-new">
            <label>Ad Title</label>
            <input type="text" name="adTitle" value={formData.adTitle} onChange={handleChange} required />
          </div>
          <div className="form-group-new">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group-new">
            <label>Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="form-group-new file-input-new">
            <label>Upload Photos</label>
            <input type="file" name="photos" onChange={handleFileChange} multiple />
          </div>
          <button type="submit">Post Ad</button>
        </form>
      </main>
    </div>
  );
};

export default PostElectronicsAd;
