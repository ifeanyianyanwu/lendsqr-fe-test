import UsersImg from "../assets/users-dets-users.png";
import ActiveUsersImg from "../assets/users-dets-activeusers.png";
import UsersWithLoansImg from "../assets/users-dets-userswithloans.png";
import UsersWithSavingsImg from "../assets/users-dets-userswithsavings.png";
import usersData from "./users.json";

export const USERS_CARD_DATA = [
  {
    img_url: UsersImg,
    title: "USERS",
    value: "2,453",
  },
  {
    img_url: ActiveUsersImg,
    title: "ACTIVE USERS",
    value: "2,453",
  },
  {
    img_url: UsersWithLoansImg,
    title: "USERS WITH LOANS",
    value: "12,453",
  },
  {
    img_url: UsersWithSavingsImg,
    title: "USERS WITH SAVINGS",
    value: "102,453",
  },
];

export const ORGANIZATIONS = (() => {
  const orgs = usersData.map((data, index) => ({
    key: index + 1,
    value: data.organization,
  }));
  const uniqueOrgs = [{ key: 0, value: "Select" }, ...new Set(orgs)];
  return uniqueOrgs;
})();

export const STATUS = [
  { key: 0, value: "Select" },
  { key: 1, value: "active" },
  { key: 2, value: "inactive" },
  { key: 3, value: "pending" },
  { key: 4, value: "blacklisted" },
];

export type User = {
  _id: string;
  index: number;
  organization: string;
  username: string;
  dateJoined: string;
  status: string;
  balance: string;
  bankDetails: string;
  tier: number;
  userId: string;
  personalInformation: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: string;
  };
  educationAndEmployment: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    income: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
};
