import React, {
  useState,
  SyntheticEvent,
  ReactNode,
  useEffect,
  FormEvent,
  useRef,
  MutableRefObject,
} from "react";
import TextInput from "../ui/TextInput/TextInput";
import usersData from "../../helpers/users.json";
import {
  MdFilterList,
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import "./Table.scss";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

import { FiUserCheck, FiUserX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SelectInput from "../ui/SelectInput/SelectInput";
import { ORGANIZATIONS, STATUS } from "../../helpers/utility";
import Button from "../ui/Button/Button";

interface Item {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}
interface Column {
  value: string;
}

interface TableProps {
  initialData: Item[];
  itemsPerPage: number;
  columns: Column[];
}

interface OptionsPopupShown {
  [key: string]: boolean;
}
export type FormRef = MutableRefObject<HTMLFormElement | null>;

const Table = ({ initialData, itemsPerPage, columns }: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<Item[]>(initialData);
  const [numberOfValuesToShow, setNumberOfValuesToShow] = useState<number>(5);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [filterFormShown, setFilterFormshown] = useState<boolean>(false);
  const [optionsPopupShown, setOptionsPopupShown] = useState<OptionsPopupShown>(
    {}
  );

  const navigate = useNavigate();
  const formRef: FormRef = useRef(null);
  const optionPopupRef: MutableRefObject<HTMLSpanElement | null> = useRef(null);

  //Handle closing filter form and options popup when you click outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setFilterFormshown(false);
      }
      if (
        optionPopupRef.current &&
        !optionPopupRef.current.contains(event.target as Node)
      ) {
        setOptionsPopupShown((prev) => {
          const obj = { ...prev };
          for (var key in obj) {
            obj[key] = false;
          }
          return obj;
        });
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFilterFormshown(false);
        setOptionsPopupShown((prev) => {
          const obj = { ...prev };
          for (var key in obj) {
            obj[key] = false;
          }
          return obj;
        });
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  //Handle updating the table data when you filter and when you change number of items diplayed
  useEffect(() => {
    let filteredData: Item[] = initialData;

    filteredData?.forEach((item) =>
      setOptionsPopupShown((prev) => ({ ...prev, [item.id]: false }))
    );

    if (isSubmitted) {
      // Apply filtering based on the filter values
      filteredData = initialData.filter((item: Item) => {
        for (let key in filterValues) {
          const filterValue: string = filterValues[key];
          const itemValue: string | number = item[key as keyof Item];

          if (
            filterValue !== "" &&
            typeof itemValue === "string" &&
            !itemValue.toLowerCase().includes(filterValue.toLowerCase())
          ) {
            return false;
          }
        }
        return true;
      });
    }

    const newData = filteredData.slice(0, numberOfValuesToShow * 100);

    setData(newData);
    setCurrentPage(1); // Reset current page when any filter changes
  }, [filterValues, numberOfValuesToShow, isSubmitted]);

  //handle number of values in the table
  const handleNumberOfValuesShown = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLSelectElement;
    setNumberOfValuesToShow(Number(value));
  };

  // Calculate the range of data to display
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  const currentItems: Item[] = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  // Handle pagination controls
  const nextPage = (): void => {
    setCurrentPage((prevPage: number) => prevPage + 1);
  };

  const prevPage = (): void => {
    setCurrentPage((prevPage: number) => prevPage - 1);
  };

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  // Handle individual column filter changes
  const handleFilterChange = (e: SyntheticEvent): void => {
    const { name, value } = e.target as HTMLInputElement;

    setFilterValues((prevFilterValues: Record<string, string>) => ({
      ...prevFilterValues,
      [name]: value,
    }));
    console.log(filterValues);
  };

  // Handle filter form submission
  const handleFilterSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitted(true);
    setFilterFormshown(false);
  };

  //Handle Options pop up toggle
  const handleOptionsPopup = (id: string) => {
    let open = false;
    if (optionsPopupShown[id]) open = true;

    // Close any open options popup by setting the value to false
    for (var key in optionsPopupShown) {
      optionsPopupShown[key] = false;
    }

    if (!open) {
      setOptionsPopupShown((prev) => ({ ...prev, [id]: true }));
    } else {
      setOptionsPopupShown((prev) => ({ ...prev, [id]: false }));
    }
  };

  // Helper function to generate the pagination buttons
  const generatePaginationButtons = (): React.ReactNode[] => {
    const buttons: React.ReactNode[] = [];
    // Add Previous button
    buttons.push(
      <button
        key="prev"
        onClick={prevPage}
        disabled={currentPage === 1}
        className={
          currentPage === 1
            ? "table__direction-btn btn"
            : "table__direction-btn btn active"
        }
      >
        <MdOutlineArrowBackIos />
      </button>
    );

    // Add first page button
    buttons.push(
      <button
        key={1}
        onClick={() => goToPage(1)}
        className={currentPage === 1 ? "active btn" : "btn"}
      >
        1
      </button>
    );

    if (totalPages > 6) {
      // add second page button
      buttons.push(
        <button
          key={2}
          onClick={() => goToPage(2)}
          className={currentPage === 2 ? "active btn" : "btn"}
        >
          2
        </button>
      );

      // add third page button
      buttons.push(
        <button
          key={3}
          onClick={() => goToPage(3)}
          className={currentPage === 3 ? "active btn" : "btn"}
        >
          3
        </button>
      );

      buttons.push(<span key="ellipsis2">...</span>);
    }

    // Add second to last page button
    if (totalPages > 6) {
      buttons.push(
        <button
          key={totalPages - 1}
          onClick={() => goToPage(totalPages - 1)}
          className={currentPage === totalPages - 1 ? "active btn" : "btn"}
        >
          {totalPages - 1}
        </button>
      );
    }

    // Add last page button
    if (totalPages > 2) {
      buttons.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className={currentPage === totalPages ? "active btn" : "btn"}
        >
          {totalPages}
        </button>
      );
    }

    // Add Next button
    buttons.push(
      <button
        key="next"
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={
          currentPage === totalPages
            ? "table__direction-btn btn"
            : "table__direction-btn btn active"
        }
      >
        <MdOutlineArrowForwardIos />
      </button>
    );

    return buttons;
  };

  //switch status color and style based on status value
  const switchStatus = (status: string) => {
    if (status === "active") return "green";
    if (status === "blacklisted") return "red";
    if (status === "pending") return "yellow";
    if (status === "inactive") return status;
  };

  //handle reset button click
  const handleReset = () => {
    setFilterValues({
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      dateJoined: "",
      status: "",
    });
  };

  //handle view details option click
  const handleViewDetails = (id: string) => {
    localStorage.userData = JSON.stringify(
      usersData.filter((item) => item._id === id)[0]
    );
    navigate("/dashboard/user_details");
  };
  return (
    <div className="table__page-container">
      <div className="table__container">
        {/* Filter Form */}
        {filterFormShown && (
          <form
            onSubmit={handleFilterSubmit}
            className="table__filter-form"
            ref={formRef}
          >
            <SelectInput
              options={ORGANIZATIONS}
              label="Organization"
              name="organization"
              onChange={handleFilterChange}
              value={filterValues.organization}
            />

            <TextInput
              placeholder="User"
              label="User"
              name="username"
              onChange={handleFilterChange}
              value={filterValues.username}
            />
            <TextInput
              placeholder="Email"
              label="Email"
              name="email"
              onChange={handleFilterChange}
              value={filterValues.email}
            />
            <TextInput
              placeholder="Date"
              label="Date"
              name="dateJoined"
              onChange={handleFilterChange}
              value={filterValues.dateJoined}
              type="date"
            />
            <TextInput
              placeholder="Phone Number"
              label="Phone Number"
              name="phoneNumber"
              onChange={handleFilterChange}
              value={filterValues.phoneNumber}
            />
            <SelectInput
              options={STATUS}
              label="status"
              name="status"
              onChange={handleFilterChange}
              value={filterValues.status}
            />
            <div className="table__button-container">
              <Button onClick={handleReset} color="transparent">
                Reset
              </Button>
              <Button color="accent" type="submit">
                Submit
              </Button>
            </div>

            {/* Add more inputs for each column you want to filter */}
          </form>
        )}
        <table>
          <thead>
            <tr>
              {columns.map((item, index) => (
                <th key={index}>
                  <span>
                    {item.value}
                    {item.value !== " " && (
                      <MdFilterList
                        onClick={() => {
                          setFilterFormshown((prev) => !prev);
                          setIsSubmitted(false);
                        }}
                      />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!data.length && (
              <tr>
                <td> No Data</td>
              </tr>
            )}
            {currentItems?.map((item, index) => {
              const array = Object.entries(item);
              return (
                <tr key={item.id}>
                  {array.map(([name, value]) => {
                    if (name === "id") return;
                    if (name === "status") {
                      return (
                        <td key={name}>
                          <span
                            className={`${switchStatus(value)} table__status`}
                          >
                            <span>{value}</span>
                          </span>
                        </td>
                      );
                    }
                    if (name === "options") {
                      return (
                        <td key={name}>
                          <HiDotsVertical
                            onClick={() => {
                              handleOptionsPopup(item.id);
                            }}
                            className="table__options-icon"
                          />
                          {optionsPopupShown[item.id] && (
                            <span
                              ref={optionPopupRef}
                              className="table__options-popup"
                            >
                              <span
                                onClick={() => {
                                  handleViewDetails(item.id);
                                }}
                              >
                                <AiOutlineEye /> View Details
                              </span>
                              <span>
                                <FiUserX /> Blacklist User
                              </span>
                              <span>
                                <FiUserCheck />
                                Activate User
                              </span>
                            </span>
                          )}
                        </td>
                      );
                    }
                    return <td key={name}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="table__controls-container">
          <span className="table__display-controls">
            <span>Showing</span>
            <select
              name="display"
              defaultValue={numberOfValuesToShow}
              onChange={handleNumberOfValuesShown}
            >
              <option value="1">100</option>
              <option value="2">200</option>
              <option value="3">300</option>
              <option value="4">400</option>
              <option value="5">500</option>
            </select>
            out of {initialData.length}
          </span>
          <span className="table__pagination-controls">
            {generatePaginationButtons()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
