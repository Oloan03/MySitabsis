import React, { useState } from 'react';
//import TableOne from '../components/Tables/TableOne';
//import TableTwo from '../components/Tables/TableTwo';
import TableThree from '../components/Tables/TableThree';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const DataNasabah = () => {
    return (
       <DefaultLayout>
        <Breadcrumb pageName="Data Nasabah" />
        <div className="dataNasabah">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Input Data Nasabah
                </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        Nomor Rekening
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan nomor rekening nasabah"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        Nama Nasabah
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan nama lengkap nasabah"
                            className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block font-medium text-black dark:text-white">
                        Alamat Nasabah
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan alamat lengkap nasabah"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                        />
                    </div>
                    <div>
                    <label className="mb-3 block font-medium text-black dark:text-white">
                        Nomor Hp/Telepon Nasabah
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan nomor hp/telepon nasbah"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                        />
                    </div>
                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Simpan
                    </button>
                </div>
            </div>
            <TableThree />
        </div>
       </DefaultLayout>
    );
};

export default DataNasabah;
