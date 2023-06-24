import "./Users.scss";
import Table from "../Table/Table";
import usersData from "../../helpers/users.json";

import { USERS_CARD_DATA } from "../../helpers/utility";
import Card from "../../layout/Card/Card";
import TabPage from "../../layout/TabPage/TabPage";

const Users = () => {
  //columns data for table component
  const columns = [
    { value: "ORGANIZATION" },
    { value: "USERNAME" },
    { value: "EMAIL" },
    { value: "PHONE NUMBER" },
    { value: "DATE JOINED" },
    { value: "STATUS" },
    { value: " " },
  ];

  // map data to columns present in table component
  const data = usersData?.map((item) => ({
    id: item._id,
    organization: item.organization,
    username: item.username,
    email: item.personalInformation.email,
    phoneNumber: item.personalInformation.phoneNumber,
    dateJoined: item.dateJoined.split("T")[0],
    status: item.status,
    options: "",
  }));

  return (
    <TabPage title="users">
      <div className="users__cards-container">
        {USERS_CARD_DATA.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            img_url={data.img_url}
            value={data.value}
          />
        ))}
      </div>
      <Table columns={columns} initialData={data} itemsPerPage={9} />
    </TabPage>
  );
};

export default Users;
