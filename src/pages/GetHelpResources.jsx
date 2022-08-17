import "../App.css";
import { Button } from "antd";
export const GetHelpResources = () => {
  return (
    <div className="resources-body">
      <div className="resource-box">
        <h1>24/7 National Domestic Violence Hotline</h1> <br />
        <p>
        24 hours a day, seven days a week, 365 days a year, the National Domestic Violence Hotline provides essential tools and support to help survivors of domestic violence so they can live their lives free of abuse. 
        </p>
        <p>
        Contacts to The Hotline can expect highly-trained, expert advocates to offer free, confidential, and compassionate support, crisis intervention information, education, and referral services in over 200 languages.
        </p>
        <br />
        <Button type='primary' className='button-purple'>
          <a
            href="https://www.thehotline.org/"
            target="_blank"
            rel="noreferrer"
          >
            24/7 National Domestic Violence Hotline
          </a>
        </Button>
      </div>
      <div className="resource-box">
        <h1>Florida Department of Children and Families</h1> <br />
        <p>
        The mission of the Department of Children and Families is to work in partnership with local communities to protect the vulnerable, promote strong and economically self-sufficient families, and advance personal and family recovery and resiliency.
        </p>
        <p>
        We are a highly skilled workforce committed to empowering people with complex and varied needs to achieve the best outcomes for themselves and their families. In collaboration with community stakeholders, we will deliver world class and continuously improving service focused on providing the people we serve with the level and quality that we would demand and expect for our own families.
        </p>
        <br />
        <Button type='primary' className='button-purple'>
          <a
            href="https://www.myflfamilies.com/service-programs/domestic-violence"
            target="_blank"
            rel="noreferrer"
          >
            Florida Department of Children and Families
          </a>
        </Button>
      </div>
    </div>
  );
};
