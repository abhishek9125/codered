import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import { customToast } from 'config/toast';

function CreateProblem({ setActiveState }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('Easy');
    const [time, setTime] = useState(45);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const payload = { title: name, description, averageTime: time, difficulty };
            const response = await axios.post(`${config.apiUrl}/problem/create-problem`, payload);
            customToast('Problem Created Successfully', true);
        } catch(error) {
            console.log(`error`, error)
            customToast(error.response.data.message);
            console.log('Error Creating Problem : ', error.response.data.message);
        }

        setLoading(false);
        setActiveState(false);
    }

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
                            {/* <div>
                                <div className="title">
                                    Enable / Disable
                                </div>
                                <select 
                                    className="select-control" 
                                    value={active}
                                    onChange={e => setActive(e.target.value)}
                                >
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div> */}
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