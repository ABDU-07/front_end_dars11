import { useEffect } from "react";

export default function ModalForm({ isOpen, onClose, mode, onSubmit, client }) {
    useEffect(() => {
        if (mode === "add" && client === null) {
            const form = document.getElementById("modalForm");
            form.reset();
        }
    }, [mode, client]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const result = {
            id: client?.id || Date.now(),
            name: data.get("name"),
            description: data.get("description"),
            status: data.get("status") === "Active",
        };

        onSubmit(result);
    };

    return (
        <dialog id="my_modal_3" className="modal bg-black/40" open={isOpen}>
            <div className="modal-box">
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg py-4">
                    {mode === "edit" ? "Edit News" : "Add News"}
                </h3>

                <form id="modalForm" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center my-4 gap-2">
                        <input
                            type="text"
                            className="grow"
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </label>
                    <textarea
                        placeholder="Description"
                        name="description"
                        type="text"
                        className="textarea textarea-bordered textarea-md w-full"
                    ></textarea>

                    <select
                        className="select select-bordered w-full max-w-xs my-2 mr-5"
                        name="status"
                        required
                    >
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                    </select>

                    <button type="submit" className="btn btn-success w-[120px]">
                        {mode === "edit" ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </dialog>
    );
}
