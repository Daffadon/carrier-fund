import Layout from "../components/Layout/Layout";
import foto from "../assets/Account/foto.svg";
import changePic from "../assets/Account/changePic.svg";
import { fontType } from "../components/Text/text";
import dana from "../assets/LandingPage/Dana.svg";
import DropdownCustom from "../components/Dropdown/DropdownCustom";
import { useEffect, useState } from "react";
import { countries } from "../container/account/account";
import { school } from "../container/account/account";
import ConfirmChangeBio from "../components/PopUp/ConfirmChangeBio";
const Account = () => {
        const [pendidikan, setPendidikan] =useState("SMA"); 
        const [country, setCountry] = useState("Zimbabwe")
        const [isShow,setIsShow] = useState(false);
        const saveBio = () => {
                // saveBio
        };
        return (
                <Layout>
                        <div className="flex h-[90vh] mt-24">
                                <div className="w-4/12  rounded-xl  gap-4 flex justify-center items-start h-11/12">
                                        <div className="w-3/4  bg-white flex flex-col justify-start items-center gap-16 rounded-2xl py-10 ">
                                                <div className="relative">
                                                        <img src={foto} />
                                                        <img
                                                                src={changePic}
                                                                alt=""
                                                                className="absolute left-12 -bottom-4"
                                                        />
                                                </div>
                                                <div>
                                                        <p
                                                                className={`${fontType["h1"]} text-center`}
                                                        >
                                                                Rina Doe
                                                        </p>
                                                        <p
                                                                className={`${fontType["p1"]} text-center text-neutral50`}
                                                        >
                                                                Malang,
                                                                Indonesia
                                                        </p>
                                                </div>
                                                <div className="w-9/12 h-[0.1rem] bg-neutral10"></div>
                                                <div className="flex gap-3 w-10/12 ml-4">
                                                        <img
                                                                src={dana}
                                                                alt=""
                                                        />
                                                        <div className="flex flex-col justify-center w-10/12 ml-3 ">
                                                                <p
                                                                        className={`${fontType["p1"]}`}
                                                                >
                                                                        Saldo
                                                                </p>
                                                                <p
                                                                        className={`${fontType["h3"]} w-8/12`}
                                                                >
                                                                        RP3.000.000
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className=" w-3/5 bg-white rounded-3xl flex justify-center h-max pt-7 pb-24 ">
                                        <div
                                                className={`${fontType["h4"]}  w-1/2 flex flex-col gap-10 ml-24 mt-5`}
                                        >
                                                <div>
                                                        <p>Nama Depan</p>
                                                        <input
                                                                type="text"
                                                                placeholder="Nama Depan"
                                                                className="w-10/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                                        />
                                                </div>
                                                <div>
                                                        <p>
                                                                Pendidikan
                                                                Terakhir
                                                        </p>
                                                        <DropdownCustom options={school} selectedOption={pendidikan} onOptionSelect={setPendidikan} />
                                                </div>
                                                <div>
                                                        <p>No. Telepon</p>
                                                        <input
                                                                type="text"
                                                                placeholder="0821-xxxx-xxxx"
                                                                className="w-10/12  rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                                        />
                                                </div>
                                                <div>
                                                        <p>Kode Pos</p>
                                                        <input
                                                                type="text"
                                                                placeholder="432412"
                                                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                                        />
                                                </div>
                                        </div>
                                        <div
                                                className={`${fontType["h4"]}  w-1/2 flex flex-col gap-10 mt-5`}
                                        >
                                                <div>
                                                        <p>Nama Belakang</p>
                                                        <input
                                                                type="text"
                                                                placeholder="Nama Belakang"
                                                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                                        />
                                                </div>
                                                <div>
                                                        <p>Email</p>
                                                        <input
                                                                type="text"
                                                                placeholder="Email"
                                                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                                        />
                                                </div>
                                                <div>
                                                        <p>Kota</p>
                                                        <input
                                                                type="text"
                                                                placeholder="SMA"
                                                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                                        />
                                                </div>
                                                <div>
                                                        <p>Negara </p>                                                        
                                                        <DropdownCustom options={countries} selectedOption={country} onOptionSelect={setCountry} />

                                                </div>
                                                <p
                                                        className={`${fontType["button"]} bg-primary50 w-4/12 self-end mr-24 text-center text-white py-2 rounded-full cursor-pointer`}
                                                        onClick={()=>{
                                                                setIsShow(true)
                                                        }}
                                                >
                                                        Simpan
                                                </p>
                                                        {isShow && <ConfirmChangeBio user={""} setIsShow={setIsShow}/>}
                                        </div>
                                </div>
                        </div>
                </Layout>
        );
};

export default Account;
