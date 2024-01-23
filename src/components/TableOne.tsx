import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/joy/CircularProgress';
import { smallCircularProgressBar } from './progressBar/circularProgressBar';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
const DashboardProductsTable = () => {
  // @ts-expect-error
  const { users, isLoadingP } = useSelector((state) => state.product);
  const [newProducts, setNewProducts] = useState<[]>();
  const navigate = useNavigate();
  useEffect(() => {
    users && setNewProducts(users?.slice(0, 2));
  }, [users]);

  return (
    <div className="min-h-[280px] rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-full cursor-pointer items-center justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Scorees
        </h4>
        <div
          className="mr-2 flex min-w-[100px] items-center	justify-end gap-1 hover:translate-x-0.5	"
          onClick={() => navigate('/product-list/1')}
        >
          <span className="text-sm font-medium">view all</span>
          <ArrowRightIcon width={15} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Score
            </h5>
          </div>
        </div>
        {!newProducts && (
          <div className="flex h-[150px] items-center justify-center xl:p-5">
            <CircularProgress color="info" size="sm" variant="plain" />
          </div>
        )}
        {users.length === 0 && !isLoadingP && (
          <div className="flex h-[150px] items-center justify-center xl:p-5">
            <h3 className="text-lg font-semibold">No User</h3>
          </div>
        )}
        {newProducts?.map((product: any, index: number) => {
          console.log(product);
          return (
            <div
              key={index}
              className="grid grid-cols-2 border-b border-stroke pb-3 dark:border-strokedark sm:grid-cols-3"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="text-black dark:text-white sm:block">
                  {product.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{product.scoree}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const DashboardCategoriesTable = () => {
  // @ts-expect-error
  const { officers, isLoadingP } = useSelector((state) => state.product);
  const [newCategories, setNewCategories] = useState<[]>();
  useEffect(() => {
    officers && setNewCategories(officers?.slice(0, 2));
  }, [officers]);
  useEffect(() => {
    console.log(newCategories, 'new categories');
  }, [newCategories]);

  const navigate = useNavigate();

  return (
    <div className="min-h-[280px] rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-full cursor-pointer items-center justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Officers
        </h4>
        <div
          className="mr-2 flex min-w-[100px] items-center	justify-end gap-1 hover:translate-x-0.5	"
          onClick={() => navigate('/category-list')}
        >
          <span className="text-sm font-medium">view all</span>
          <ArrowRightIcon width={15} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className=" p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Gender
            </h5>
          </div>
        </div>
        {!newCategories && (
          <div className="flex h-[150px] items-center justify-center xl:p-5">
            <CircularProgress color="info" size="sm" variant="plain" />
          </div>
        )}
        {officers?.length === 0 && !isLoadingP && (
          <div className="flex h-[150px] items-center justify-center xl:p-5">
            <h3 className="text-lg font-semibold">No Category</h3>
          </div>
        )}

        {newCategories?.map((category: any, index: number) => {
          return (
            <div
              key={index}
              className="grid grid-cols-2 border-b border-stroke pb-3 dark:border-strokedark sm:grid-cols-3"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className=" text-black dark:text-white sm:block">
                  {category.name}
                </p>
              </div>
              <div className="flex items-center justify-center  p-2.5 xl:p-5">
                <p className="text-meta-3">
                  {' '}
                  {category.gender ? <span>Kadın</span> : <span>Erkek</span>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DashboardWaitersTable = () => {
  // @ts-expect-error
  const { waiters, isLoadingW } = useSelector((state) => state.waiter);
  const [newWaiters, setNewWaiters] = useState<[]>();
  useEffect(() => {
    console.log(waiters);
    waiters && setNewWaiters(waiters?.slice(0, 2));
    console.log(newWaiters, 'new waiters');
  }, [waiters]);
  const navigate = useNavigate();

  return (
    <div className="min-h-[280px] rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-full cursor-pointer items-center justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Waiters
        </h4>
        <div
          className="mr-2 flex min-w-[100px] items-center	justify-end gap-1 hover:translate-x-0.5	"
          onClick={() => navigate('/waiter-list')}
        >
          <span className="text-sm font-medium">view all</span>
          <ArrowRightIcon width={15} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-1">
          <div className=" p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Waiter Name
            </h5>
          </div>
        </div>
        {!newWaiters && !isLoadingW && (
          <div className="flex h-[150px] items-center justify-center xl:p-5">
            <CircularProgress color="info" size="sm" variant="plain" />
          </div>
        )}
        {waiters?.length === 0 && !isLoadingW && (
          <div className="flex h-[150px] items-center justify-center xl:p-5">
            <h3 className="text-lg font-semibold">No Waiter</h3>
            <button className="flex items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
              Add Waiter
            </button>
          </div>
        )}

        {newWaiters?.map((waiter: any, index: number) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-stroke pb-3 dark:border-strokedark sm:grid-cols-1"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden text-black dark:text-white sm:block">
                  {waiter.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export {
  DashboardProductsTable,
  DashboardCategoriesTable,
  DashboardWaitersTable,
};
