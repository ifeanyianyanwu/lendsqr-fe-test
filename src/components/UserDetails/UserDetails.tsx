import { useEffect, useState } from "react";
import "./UserDetails.scss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Button from "../ui/Button/Button";
import Avatar from "../../assets/avatar-icon.png";
import { User } from "../../helpers/utility";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const navigate = useNavigate();
  const PersonalInformation = [
    {
      heading: "Personal Information",
      titles: [
        {
          title: "FULL NAME",
          value: userDetails?.personalInformation.fullName,
        },
        {
          title: "PHONE NUMBER",
          value: userDetails?.personalInformation.phoneNumber,
        },
        {
          title: "EMAIL ADDRESS",
          value: userDetails?.personalInformation.email,
        },
        { title: "BVN", value: userDetails?.personalInformation.bvn },
        { title: "GENDER", value: userDetails?.personalInformation.gender },
        {
          title: "MARITAL STATUS",
          value: userDetails?.personalInformation.maritalStatus,
        },
        { title: "CHILDREN", value: userDetails?.personalInformation.children },
        { title: "TYPE OF RESIDENCE", value: "Parent's Aprtment" },
      ],
    },
  ];
  const EducationAndEmployment = [
    {
      heading: "Education and Employment",
      titles: [
        {
          title: "LEVEL OF EDUCATION",
          value: userDetails?.educationAndEmployment.level,
        },
        {
          title: "EMPLOYMENT STATUS",
          value: userDetails?.educationAndEmployment.employmentStatus,
        },
        {
          title: "SECTOR OF EMPLOYMENT",
          value: userDetails?.educationAndEmployment.sector,
        },
        {
          title: "DURATION OF EMPLOYMENT",
          value: userDetails?.educationAndEmployment.duration,
        },
        {
          title: "OFFICIAL EMAIL",
          value: userDetails?.educationAndEmployment.officeEmail,
        },
        {
          title: "MONTHLY INCOME",
          value: userDetails?.educationAndEmployment.income,
        },
        {
          title: "LOAN REPAYMENT",
          value: userDetails?.educationAndEmployment.loanRepayment,
        },
      ],
    },
  ];
  const Socials = [
    {
      heading: "Socials",
      titles: [
        { title: "TWITTER", value: userDetails?.socials.twitter },
        { title: "FACEBOOK", value: userDetails?.socials.facebook },
        { title: "INSTAGRAM", value: userDetails?.socials.instagram },
      ],
    },
  ];
  const Guarantor = [
    {
      heading: "Guarantor",
      titles: [
        {
          id: "guarantor1",
          title: [
            {
              subtitle: "FULL NAME",
              value: userDetails?.guarantor[0].fullName,
            },
            {
              subtitle: "PHONE NUMBER",
              value: userDetails?.guarantor[0].phoneNumber,
            },
            {
              subtitle: "EMAIL ADDRESS",
              value: userDetails?.guarantor[0].email,
            },
            {
              subtitle: "RELATIONSHIP",
              value: userDetails?.guarantor[0].relationship,
            },
          ],
        },
        {
          id: "guarantor2",
          title: [
            {
              subtitle: "FULL NAME",
              value: userDetails?.guarantor[1].fullName,
            },
            {
              subtitle: "PHONE NUMBER",
              value: userDetails?.guarantor[1].phoneNumber,
            },
            {
              subtitle: "EMAIL ADDRESS",
              value: userDetails?.guarantor[1].email,
            },
            {
              subtitle: "RELATIONSHIP",
              value: userDetails?.guarantor[1].relationship,
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.userData));
    console.log(JSON.parse(localStorage.userData));
  }, []);

  return (
    <div className="user-details__container">
      <div className="user-details__back-to-users" onClick={() => navigate(-1)}>
        <p>
          <HiOutlineArrowNarrowLeft />
          Back to Users
        </p>
      </div>
      <div className="user-details__header-container">
        <h2>User Details</h2>
        <div className="user-details__button-container">
          <Button color="red-invert">BLACKLIST USER</Button>
          <Button color="accent-invert">ACTIVATE USER</Button>
        </div>
      </div>
      <div className="user-details__user-tab">
        <div className="user-details__user-info">
          <div className="user-details__user-avatar">
            <img src={Avatar} alt="icon" />
          </div>
          <div className="user-details__user-name">
            <h4>{userDetails?.personalInformation.fullName}</h4>
            <p>{userDetails?.userId}</p>
          </div>
          <div className="user-details__user-tier">
            <p>User's Tier</p>
            {userDetails?.tier === 3 ? (
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            ) : userDetails?.tier === 2 ? (
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            ) : (
              <div>
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            )}
          </div>
          <div className="user-details__user-balance">
            <h4>{userDetails?.balance}</h4>
            <p>{userDetails?.bankDetails}</p>
          </div>
        </div>

        <div className="user-details__tab">
          <div className="active">General Details</div>
          <div>Documents</div>
          <div>Bank Details</div>
          <div>Loans</div>
          <div>Savings</div>
          <div>App and System</div>
        </div>
      </div>
      <div className="user-details__user-full-details">
        {PersonalInformation.map((info, key) => (
          <div key={key} className="user-details__info-group">
            <h4>{info.heading}</h4>
            <div className="user-details__detail-card-container">
              {info.titles.map((item) => (
                <div key={item.title} className="user-details__detail-card">
                  <p className="title">{item.title}</p>
                  <p className="content">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {EducationAndEmployment.map((info, key) => (
          <div key={key} className="user-details__info-group">
            <h4>{info.heading}</h4>
            <div className="user-details__detail-card-container">
              {info.titles.map((item) => (
                <div key={item.title} className="user-details__detail-card">
                  <p className="title">{item.title}</p>
                  <p className="content">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Socials.map((info, key) => (
          <div key={key} className="user-details__info-group">
            <h4>{info.heading}</h4>
            <div className="user-details__detail-card-container">
              {info.titles.map((item) => (
                <div key={item.title} className="user-details__detail-card">
                  <p className="title">{item.title}</p>
                  <p className="content">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Guarantor.map((info, key) => (
          <div key={key} className="user-details__info-group" id="guarantor">
            <h4>{info.heading}</h4>
            {info.titles.map((item) => (
              <div className="user-details__detail-card-container" id="special">
                {item.title.map((title, index) => (
                  <div key={index} className="user-details__detail-card">
                    <p className="title">{title.subtitle}</p>
                    <p className="content">{title.value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
