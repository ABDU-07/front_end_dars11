export default function TableList({ clients, onEdit, onDelete, onAktif }) {
    return (
        <div className=" w-[70%]  mx-auto mt-10">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td className="max-w-xs">{item.description}</td>
                            <td>
                                <button
                                    onClick={() => onAktif(item)}
                                    className={`btn rounded-full w-20 ${
                                        item.status
                                            ? "btn-primary"
                                            : "btn-outline btn-primary"
                                    }`}
                                >
                                    {item.status ? "Active" : "Inactive"}
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        onEdit(item);
                                    }}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-accent"
                                    onClick={() => onDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
