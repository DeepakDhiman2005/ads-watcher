import React from "react";
import ScreenView from "../../screen/ScreenView";
import DataTable from "react-data-table-component";
import tableCustomStyle from "../../constants/tableCustomStyle";

const Payments = () => {
    const handleStatus = (status) => {
        switch (status) {
            case "completed":
                return <p className="text-green-800">Completed</p>;
            case "failed":
                return <p className="text-red-800">Failed</p>;
            case "pending":
                return <p className="text-yellow-800">Pending</p>;
        }
    }

    const columns = [
        {
            name: "Date",
            selector: row => row?.date || '-',
            sortable: true,
        },
        {
            name: "Amount",
            selector: row => row?.amount ? `$${row?.amount}` : '$0',
            sortable: true,
        },
        {
            name: "Status",
            selector: row => handleStatus(row?.status),
        }
    ]

    const data = [
        {
            date: "27-5-2024",
            amount: 100,
            status: "pending",
        },
        {
            date: "26-5-2024",
            amount: 2,
            status: "failed",
        },
        {
            date: "11-12-2024",
            amount: 50,
            status: "completed"
        },
    ]

    return <>
        <ScreenView title={"Payments"}>
            <div className="w-full my-3">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={tableCustomStyle}
                    pagination
                />
            </div>
        </ScreenView>
    </>
}

export default Payments;