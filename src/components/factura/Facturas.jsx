import { useEffect } from "react";
import { useGetOwnBills } from "../../shared/hooks/useGetOwnBills";

export const Facturas = () => {
    const { ownBillsData, loading, error, fetchOwnBills } = useGetOwnBills();

    useEffect(() => {
        fetchOwnBills();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="factura-section">
            <div className="factura-container">
                <h1>FACTURAS</h1>
                {ownBillsData.length === 0 ? (
                    <p>No hay facturas disponibles.</p>
                ) : (
                    ownBillsData.map((factura) => (
                        <div key={factura._id} className="factura-card">
                            <h2>Factura</h2>
                            <p>Fecha: {new Date(factura.fecha).toLocaleDateString()}</p>
                            <p>Total: {factura.monto} USD</p>
                            <p>Reservación: {factura.reservacion.map(res => res.nombre).join(", ")}</p>
                            <p>Usuario: {factura.usuario.nombre}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};
