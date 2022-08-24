import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import { customToast } from 'config/toast';

function UpdateList({ data, setActiveState }) {

    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [logo, setLogo] = useState(data.logo);
    const [type, setType] = useState(data.listType);
    const [explore, setExplore] = useState(data.showInExplore);
    const [active, setActive] = useState(data.active);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const payload = { name, description, logo, showInExplore: explore, active, slug: data.slug, listType: type};
            const response = await axios.post(`${config.apiUrl}/list/update-list`, payload);
            customToast('List Item Updated Successfully', true);
        } catch(error) {
            console.log(`error`, error)
            customToast(error.response.data.message);
            console.log('Error Updating List : ', error.response.data.message);
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
                        <div className="form-group">
                            <div className="title">
                                Logo
                            </div>
                            <input 
                                type="name" 
                                className="form-control" 
                                value={logo}
                                placeholder="Your Last Name"
                                onChange={e => setLogo(e.target.value)}
                            />
                        </div>
                        <div className="form-group same-line">
                            <div>
                                <div className="title">
                                    List Type
                                </div>
                                <select 
                                    className="select-control" 
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                >
                                    <option name="Expert">Expert</option>
                                    <option name="Company">Company</option>
                                    <option name="Topic">Topic</option>
                                </select>
                            </div>
                            <div>
                                <div className="title">
                                    Show In Explore
                                </div>
                                <select 
                                    className="select-control" 
                                    value={explore}
                                    onChange={e => setExplore(e.target.value)}

                                >
                                    <option value={true}> True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                            <div>
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

export default UpdateList;

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


`;