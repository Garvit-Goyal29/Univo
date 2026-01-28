import imgurl from "../assets/logoSBM.png";
function Notes() {
    return (
        <>
            <div className="w-full min-h-[101vh] bg-white">
                <div className="min-h-26 flex items-center text-white bg-linear-to-r from-blue-700 to-blue-400">
                    <img src={imgurl} alt="" className="w-22 h-16 ml-5 mr-54" />
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-bold">Notes Area</h1>
                        <p className="text-sm">
                            Your personal space to organize study resources.
                        </p>
                        <p className="text-xs">
                            Keep PDFs, videos, and useful links structured for easy access.
                        </p>
                    </div>
                </div>
                <div className="border-b min-h-40">
                    <h1>Add subjects for easy management and access to study resources.</h1>
                    <label htmlFor="">Ssbject</label>
                    <input type="text" />
                    <label htmlFor="">Credit</label>
                    <input type="text" />
                    <br />
                    <label htmlFor="">Description</label>
                    <input type="text" className="" />
                </div>
            </div>
        </>
    )
}
export default Notes