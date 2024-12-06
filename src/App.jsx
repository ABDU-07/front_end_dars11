import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalMode, setModalMode] = useState("add");
    const [clients, setClients] = useState([]);
    const [currentClient, setCurrentClient] = useState(null);

    const handleOpen = (mode, client = null) => {
        setModalMode(mode);
        setIsOpen(true);
        setCurrentClient(client);
    };

    const handleSubmit = (clientData) => {
        if (modalMode === "add") {
            setClients((prev) => [...prev, clientData]);
        } else if (modalMode === "edit") {
            setClients((prev) =>
                prev.map((client) =>
                    client.id === clientData.id ? clientData : client
                )
            );
        }
        setIsOpen(false);
        setCurrentClient(null);
    };

    const handleDelete = (client) => {
        setClients((prev) => prev.filter((c) => c.id !== client));
        setIsOpen(false);
    };

    const aktif = (client) => {
        if (client.status === true) client.status = false;
        else client.status = true;

        setClients((prev) =>
            prev.map((c) => (c.id === client.id ? client : c))
        );
        setIsOpen(false);
    };

    return (
        <div className="py-5 px-5">
            <Navbar onOpen={() => handleOpen("add")} />
            <TableList
                clients={clients}
                onEdit={(client) => handleOpen("edit", client)}
                onDelete={handleDelete}
                onAktif={(client) => aktif(client)}
            />
            <ModalForm
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                mode={modalMode}
                onSubmit={handleSubmit}
                client={currentClient}
            />
        </div>
    );
}

export default App;
