import { useState, useEffect } from 'react';

const FetchThreads = () => {
    const [threadIds, setThreadIds] = useState([]);
    const [threadNames, setThreadNames] = useState([]);
    const [threadUsers, setThreadUsers] = useState([]);
    const [threadCreationTimes, setThreadCreationTimes] = useState([]); 

    useEffect(() => {fetch('http://localhost:8080/api/thread')
        .then((res) => { return res.json() }).then((data) => {console.log(data); setThreadNames(data);})

    }, []);
}

    function RecentThreads() {
    return(
        <>
        <FetchThreads />
        you should see smth in console
        </>
    )
}
export default RecentThreads