export default function Navbar({ onOpen }) {
    return (
        <>
            <div className="navbar bg-base-100 w-[70%] mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">BBC</a>
                </div>
                <div className="navbar-end">
                    <button
                        onClick={() => onOpen("add")}
                        className="btn btn-primary"
                    >
                        Add News
                    </button>
                </div>
            </div>
        </>
    );
}
