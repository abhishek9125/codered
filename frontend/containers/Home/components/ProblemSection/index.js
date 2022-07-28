import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from 'components/Title';
import ProblemTable from 'components/ProblemTable';

function ProblemSection() {

    const [problems, setProblems] = useState([]);

    const title = "Most Common Interview Questions";
    const description = "Solve recently asked problems in the coding interviews by big companies";

    const getProblems = async () => {
        const response = await axios.get("https://api.codingninjas.com/api/v3/public_section/landing/recent_problems");
        setProblems(response.data.data.problem_list)
    }

    useEffect(() => {
        getProblems();
    }, [])
    
    return (
        <>
            <Title title={title} description={description} />
            <ProblemTable problems={problems} />
        </>
    )
}

export default ProblemSection;
