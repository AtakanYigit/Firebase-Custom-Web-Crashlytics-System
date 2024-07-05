import {db} from "../../firebase";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import DataTable             from 'react-data-table-component';
import "./CrashLogs.scss";

const CrashLogs = () => {
    const [data, setData] = useState([]);
    const [detailsActive, setDetailsActive] = useState(false);
    const [detailsData, setDetailsData] = useState({});

    useEffect(() => {
        const fetchLogs = async () => {
            const logsCollection = collection(db, "ErrorLogs");
            const logsSnapshot = await getDocs(logsCollection);
            const logsList = logsSnapshot.docs.map(doc => doc.data().log);
            setData(logsList);
        }
        fetchLogs();
    }, []);

    
    const handleRowClick = (row) => {
        console.log(row);
        setDetailsActive(true);
        setDetailsData(row);
    }

    const columns = [
        {
            name:       "date",
            selector:   row => row.date.toDate().toLocaleString(),
            sortable:   true,
            width:      "200px",
            compact:    true,
        },
        {
            name:       "component",
            selector:   row => row.component,
            sortable:   true,
            width:      "88px",
            compact:    true,
        },
        {
            name:       "url",
            selector:   row => row.url,
            sortable:   true,
            width:      "240px",
            compact:    true,
        },
        {
            name:       "extraInfo",
            selector:   row => row.extraInfo,
            sortable:   true,
            width:      "200px",
            compact:    true,
        },
        {
            name:       "error.message",
            selector:   row => row.error.message,
            sortable:   true,
            width:      "200px",
            compact:    true,
        },
        {
            name:       "error.stack",
            selector:   row => row.error.stack,
            sortable:   true,
            width:      "200px",
            compact:    true,
        },
    ];
    
    return(
        <div className = "CrashLogs">
            <DataTable title   = "Crash Logs"
                       columns = {columns} 
                       data    = {data} 
                       pointerOnHover
                       onRowClicked = {handleRowClick}
                       highlightOnHover/>

            <div className = {`details ${detailsActive ? "active" : ""}`}>
                <h2>{detailsData?.date?.toDate().toLocaleString()}</h2>
                <p><strong>Component:</strong> {detailsData?.component}</p>
                <p><strong>URL:</strong> {detailsData?.url}</p>
                <p><strong>Extra Info:</strong> {detailsData?.extraInfo}</p>
                <p><strong>Error Message:</strong> {detailsData?.error?.message}</p>
                <p><strong>Error Stack:</strong> {detailsData?.error?.stack}</p>
                <button onClick = {() => setDetailsActive(false)}>Close</button>
            </div>
        </div>
    );
}

export default CrashLogs;