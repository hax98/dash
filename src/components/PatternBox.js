export default function Box({modo, canale, messaggio, integrity}) {
    return (
        <div className=" w-full mt-4 lg:w-6/12 xl:w-5/12 ml-4 px-4 " >
            <div className="bg-orange-100 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg " >
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap ">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <span className="font-semibold text-xl text-blueGray-700">{modo}</span>
                            <p className="text-sm text-blueGray-400 mt-1">
                                <span className="text-black mr-2">canale:</span>
                                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{canale}</span>
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-1">
                        <span className="text-black mr-2">messaggio:</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{messaggio}</span>
                    </p>
                    <p className="text-sm text-blueGray-400 mt-1">
                        <span className="text-black mr-2">integrity:</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{integrity}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}