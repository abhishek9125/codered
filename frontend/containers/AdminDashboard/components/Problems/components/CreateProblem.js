import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import { customToast } from 'config/toast';
import MultiSelect from 'components/MultiSelect';

function CreateProblem({ setActiveState }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('Easy');
    const [time, setTime] = useState(45);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [allCompanies, setAllCompanies] = useState([]);
    const [lists, setLists] = useState([]);
    const [allLists, setAllLists] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = categories.map((c) => c.value);
        const company = companies.map((c) => c.value);
        const list = lists.map((c) => c.value);

        try {
            setLoading(true);
            const payload = { title: name, description, averageTime: time, difficulty, category, company, list };
            await axios.post(`${config.apiUrl}/problem/create-problem`, payload);
            customToast('Problem Created Successfully', true);
        } catch(error) {
            console.log(`error`, error)
            customToast(error.response.data.message);
            console.log('Error Creating Problem : ', error.response.data.message);
        }

        setLoading(false);
        setActiveState(false);
    }

    const getCategories = async () => {
        const response = await axios.get(`${config.apiUrl}/category/get-all-categories`);
        let data = [];
        response.data.data.map((item) => {
            data.push({ value: item._id, label: item.name })
        })
        setAllCategories(data)
    }

    const getCompanies = async () => {
        const response = await axios.get(`${config.apiUrl}/company/get-all-companies`);
        let data = [];
        response.data.data.map((item) => {
            data.push({ value: item._id, label: item.name })
        })
        setAllCompanies(data)
    }

    const getLists = async () => {
        const response = await axios.get(`${config.apiUrl}/list/get-all-lists`);
        let data = [];
        response.data.data.map((item) => {
            data.push({ value: item._id, label: item.name })
        })
        setAllLists(data)
    }

    useEffect(() => {
        getCategories();
        getCompanies();
        getLists();
    }, [])

    return (
        <Wrapper>
            <div className="form-wrapper">
                <form className="form-box">
                    <div className="input-fields">
                        <div className="form-group">
                            <div className="title">
                                Name
                            </div>
                            <input 
                                type="name" 
                                className="form-control" 
                                value={name}
                                placeholder="Title"
                                onChange={e => setName(e.target.value)}
                                autoFocus
                                required
                            />
                        </div>
                        <div className="form-group">
                            <div className="title">
                                Description
                            </div>
                            <input 
                                type="name" 
                                className="form-control" 
                                value={description}
                                placeholder="Description"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group same-line">
                            <div>
                                <div className="title title-same-line">
                                    Average Time (in mins)
                                </div>
                                <input 
                                    type="name" 
                                    className="form-control input-same-line" 
                                    value={time}
                                    placeholder="Average Time"
                                    onChange={e => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="title">
                                    Difficulty
                                </div>
                                <select 
                                    className="select-control" 
                                    value={difficulty}
                                    onChange={e => setDifficulty(e.target.value)}
                                >
                                    <option value={"Easy"}>Easy</option>
                                    <option value={"Medium"}>Medium</option>
                                    <option value={"Hard"}>Hard</option>
                                    <option value={"Radiant"}>Radiant</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <div className="title">
                                    Categories
                                </div>
                                <MultiSelect 
                                    dataOptions={allCategories}
                                    optionSelected={categories}
                                    setOptionSelected={setCategories}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <div className="title">
                                    Companies
                                </div>
                                <MultiSelect 
                                    dataOptions={allCompanies}
                                    optionSelected={companies}
                                    setOptionSelected={setCompanies}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <div className="title">
                                    Lists
                                </div>
                                <MultiSelect 
                                    dataOptions={allLists}
                                    optionSelected={lists}
                                    setOptionSelected={setLists}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button 
                            className="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            >
                            Save
                        </button>
                        <button 
                            className="cancel"
                            onClick={() => setActiveState(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default CreateProblem;

const Wrapper = styled.div`

    .form-wrapper {
        margin-left: 20px;
    }

    .form-group {
        .title {
            width: 150px;
        }
    }

    .same-line {
        display: flex;
    }

    .form-control {
        width: 600px;
        margin: 10px;
        margin-left: 0px;
        padding: 10px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 2px;
        margin-bottom: 20px;
    }

    .select-control {
        margin: 10px;
        margin-left: 0px;
        padding: 10px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 2px;
        margin-bottom: 20px;
        width: 100px;
        cursor: pointer;
    }

    .button {
        background-color: ${({ theme }) => theme.general.primaryColor};
        color: white;
        width: 150px;
        padding: 10px;
        border: 0;
        border-radius: 2px;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.16);
        cursor: pointer;
        margin-top: 10px;
    }

    .cancel {
        color: ${({ theme }) => theme.general.primaryColor};
        background-color: white;
        width: 150px;
        padding: 10px;
        border: 0;
        border-radius: 2px;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.16);
        cursor: pointer;
        margin-top: 10px;
        margin-left: 20px;
    }

    .input-same-line {
        margin: 10px;
        margin-left: 0px;
        padding: 10px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 2px;
        margin-bottom: 20px;
        width: 200px;
    }

    .title-same-line {
        width: 200px !important;
    }

`;