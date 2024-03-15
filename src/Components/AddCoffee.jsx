import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quality = form.quality.value;
    const supplier = form.suppiler.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quality,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // sent data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully <:3",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="p-24">
      <h2 className="text-3xl"> add coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div>
          {/* Name and quantity  */}
          <div className="md:flex mt-7">
            <div className=" md:w-1/2">
              <span className="label-text">Coffee Name</span>

              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>{" "}
            <div className=" md:w-1/2">
              <span className="label-text">Available Quality </span>

              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="quality"
                  placeholder="Available Quality "
                  className="input input-bordered  w-full"
                />
              </label>
            </div>{" "}
          </div>
          {/* Name and quantity  */}
          <div className="md:flex mt-7">
            <div className=" md:w-1/2">
              <span className="label-text">Suppiler</span>

              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="suppiler"
                  placeholder="Suppiler"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>{" "}
            <div className=" md:w-1/2">
              <span className="label-text">Taste?</span>

              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>{" "}
          </div>
          {/* Name and quantity  */}
          <div className="md:flex mt-7">
            <div className=" md:w-1/2">
              <span className="label-text">Category</span>

              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>{" "}
            <div className=" md:w-1/2">
              <span className="label-text">Details</span>

              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>{" "}
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Photo</span>

            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>{" "}
        <input
          type="submit"
          className=" mt-7 bg-red-500 text-white hover:bg-red-900 btn btn-block"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
