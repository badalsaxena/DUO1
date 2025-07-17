import React, { useState } from 'react';

const AddVehicle: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    model: '',
    type: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // submit form to API
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Vehicle Name"
          className="block mb-2 border p-2"
        />
        <input
          type="text"
          name="model"
          value={form.model}
          onChange={handleChange}
          placeholder="Model"
          className="block mb-2 border p-2"
        />
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Type"
          className="block mb-2 border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
