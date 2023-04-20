export default function Box({name, description, version, context, onClick}) {
    return (
        <div className="w-full mt-4 lg:w-6/12 xl:w-3/12 px-4 cursor-pointer hover:cursor-pointer" onClick={onClick}>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg hover:bg-red-500" >
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap ">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">{name}</h5>
                            <span className="font-semibold text-xl text-blueGray-700">{version}</span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-600">
                                <i className="far fa-chart-bar"></i>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-emerald-500 mr-2">{context}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{description}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
