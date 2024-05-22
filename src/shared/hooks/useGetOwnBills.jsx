import { useState } from "react";
import { getOwnBills } from "../../services/api";

export const useGetOwnBills = () => {
    const [ownBillsData, setOwnBillsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOwnBills = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await getOwnBills();
            console.log("data facturas", data);
            setOwnBillsData(data?.facturas || []);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        ownBillsData,
        loading,
        error,
        fetchOwnBills,
    };
};
