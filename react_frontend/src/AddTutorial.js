import React, { useState } from "react";
import WaresDataService from "./services/wares.service";

function AddTutorial() {

    const [product_id, setProduct_id] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState(null);
    const [img_group_id, setImg_group_id] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    function onChangeProduct_id(e) {
        setProduct_id(e.target.value);
    }

    function onChangeName(e) {
        setName(e.target.value);
    }

    function onChangeCategory(e) {
        setCategory(e.target.value);
    }

    function onChangeCondition(e) {
        setCondition(e.target.value);
    }

    function onChangePrice(e) {
        setPrice(e.target.value);
    }

    function onChangeImg_group_id(e) {
        setImg_group_id(e.target.value);
    }

    function saveTutorial() {
        var data = {
            name: name,
            category: category,
            product_id: product_id,
            condition: condition
        };  

        WaresDataService.create(data)
            .then(response => {
                setProduct_id(response.data.product_id);
                setName(response.data.name);
                setCategory(response.data.category);
                setCondition(response.data.condition);
                setSubmitted(true);

                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    function newTutorial() {
        setProduct_id(null);
        setName("");
        setCategory("");
        setCondition("");
        setPrice(false);
        setImg_group_id(false);

        setSubmitted(false);
    }

    return(
        <div className="submit-form">
            {submitted ? (
            <div>
                {console.log("submitted correctly")}
                <button className="btn btn-success" onClick={newTutorial}>
                Add
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={name}
                        onChange={onChangeName}
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        required
                        value={category}
                        onChange={onChangeCategory}
                        name="category"
                    />
                </div>

                <button onClick={saveTutorial} className="btn btn-success">
                    Submit
                </button>
            </div>
            )}
        </div>
    )
}

export default AddTutorial;