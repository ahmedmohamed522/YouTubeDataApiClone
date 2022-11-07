const CopiedAlert = ({ showAlert, text }) => {
    return (
        <div
            className={`${
                showAlert ? "translate-y-0" : "translate-y-[100px]"
            } transition-all duration-300 bg-zinc-800 text-gray-100 p-4 fixed bottom-6 left-6 z-[200] rounded-lg w-[260px] text-sm`}
        >
            {text}
        </div>
    );
};

export default CopiedAlert;
